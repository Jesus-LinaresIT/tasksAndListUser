import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { TasksPage } from '../features/tasks/TasksPage';
import { TaskModal } from '../features/tasks/TaskModal';
import { MemoryRouter } from 'react-router-dom';

test('abrir modal, agregar task y verificar que aparece en la lista', async () => {
   render(
      <Provider store={store}>
         <MemoryRouter>
         <TasksPage />
         </MemoryRouter>
      </Provider>
   );

// abrir modal
fireEvent.click(screen.getByText(/New Task/i));
expect(screen.getByPlaceholderText(/New Task Name/i)).toBeInTheDocument();

// escribir y guardar
fireEvent.change(screen.getByPlaceholderText(/New Task Name/i), { target: { value: 'Comprar leche' } });
fireEvent.click(screen.getByText(/Add/i));

// ahora el modal se cierra y la lista contiene el nuevo elemento
expect(screen.queryByPlaceholderText(/Descripción/i)).not.toBeInTheDocument();
expect(screen.getByText(/Comprar leche/i)).toBeInTheDocument();
});
