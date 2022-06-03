// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList.todos;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  prioritiesFilterSelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    var result = todoList;

    if (searchText) {
      result = result.filter((todo) => {
        return todo.name.includes(searchText);
      });
    }

    if (status !== "All") {
      result = result.filter((todo) => {
        return status === "Completed" ? todo.completed : !todo.completed;
      });
    }

    if (priorities.length) {
      result = result.filter((todo) => {
        return priorities.includes(todo.prioriry);
      });
    }
    return result;
  }
);
