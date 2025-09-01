import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
   id?: string;
   name: string
   description: string;
}

interface TasksState {
   list: Task[];
}

const initialState: TasksState = { list: [] };

const tasksSlice = createSlice({
   name: 'tasks',
   initialState,
   reducers: {
      addTask: (state, action: PayloadAction<Task>) => {
         state.list.push({ id: Date.now().toString(), name: action.payload.name,  description: action.payload.description })
      },
   },
})

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;