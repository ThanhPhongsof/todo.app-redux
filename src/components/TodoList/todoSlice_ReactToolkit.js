import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: v4(), name: "Learn Java", completed: false, prioriry: "Medium" },
    { id: v4(), name: "Learn Python", completed: true, prioriry: "High" },
    { id: v4(), name: "Learn Rust", completed: false, prioriry: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatusTodo: (state, action) => {
      const currentTodo = state.filters((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});
