import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/filterSlice_ReactToolkit";
import todoListReducer from "../components/TodoList/todoSlice_ReactToolkit";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    todoList: todoListReducer,
  },
});

export default store;
