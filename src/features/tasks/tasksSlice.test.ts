import tasksReducer, { addTask } from './tasksSlice';

describe('tasksSlice', () => {
   it('should return the initial state', () => {
      expect(tasksReducer(undefined, { type: '' })).toEqual({ list: [] });
   });

   it('addTask should append a new task with id and description', () => {
      const prevState = { list: [] };
      const result = tasksReducer(prevState, addTask('Test task'));
      expect(result.list.length).toBe(1);
      expect(result.list[0].description).toBe('Test task');
      expect(typeof result.list[0].id).toBe('string');
   });
});
