import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
   id?: string;
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
      addTask: (state, action: PayloadAction<string>) => {
         state.list.push({ id: Date.now().toString(),  description: action.payload })
      },
   },
})

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;