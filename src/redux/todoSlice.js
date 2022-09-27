import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1000, task: "Walk the dog", done: false },
  { id: 2000, task: "Water the flower", done: true },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const existingTodo = state.find((item) => item.id === action.payload.id);
      if (existingTodo) {
        return state.filter((item) => item.id !== action.payload.id);
      }
    },
    toggleTodo: (state) => {
      state.done = !state.done;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
