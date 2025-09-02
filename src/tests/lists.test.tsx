// src/tests/lists.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { vi, type Mock } from 'vitest';

vi.mock('../api/services', () => ({
   getListUsers: vi.fn(),
}));
import { getListUsers } from '../api/services'; // <-- mockeado arriba
import { ListPage } from '../pages/ListPage';

describe('ListPage', () => {
   beforeEach(() => {
      vi.clearAllMocks();
   });

   it('muestra loading y luego los items traídos del endpoint', async () => {
      const fakeData = [
         { id: '1', name: 'Elemento 1', avatar: 'http://example.com/a1.png' },
         { id: '2', name: 'Elemento 2', avatar: 'http://example.com/a2.png' },
      ];
      (getListUsers as unknown as Mock).mockResolvedValueOnce({ data: fakeData });

      render(
         <Provider store={store}>
         <ListPage />
         </Provider>
      );

      // loader visible
      expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument();

      // espera a que desaparezca el loader
      await waitFor(() => {
         expect(screen.queryByRole('status', { name: /loading/i })).not.toBeInTheDocument();
      });

      // ojo: find* retorna Promesa -> usa await
      expect(await screen.findByText(/Elemento 1/i)).toBeInTheDocument();
      expect(await screen.findByText(/Elemento 2/i)).toBeInTheDocument();

      expect(getListUsers).toHaveBeenCalledTimes(1);
   });

   it('muestra mensaje de error en caso de fallo', async () => {
      (getListUsers as unknown as Mock).mockRejectedValueOnce(new Error('network'));

      render(
         <Provider store={store}>
            <ListPage />
         </Provider>
      );

      // loader visible
      expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument();

      // aparece el alert accesible
      const alert = await screen.findByRole('alert');
      expect(alert).toHaveTextContent(/No se pudo cargar la lista/i);
   });
});
