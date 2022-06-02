import { v4 } from "uuid";

const initialState = [
  { id: v4(), name: "Learn Java", completed: false, prioriry: "Medium" },
  { id: v4(), name: "Learn Python", completed: true, prioriry: "High" },
  { id: v4(), name: "Learn Rust", completed: false, prioriry: "Low" },
];

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleStatusTodo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
