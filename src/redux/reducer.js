const initialState = {
  filters: {
    search: "",
    status: "All",
    prioriry: [],
  },
  todoList: [
    { id: 1, name: "Learn Java", completed: false, prioriry: "Medium" },
    { id: 1, name: "Learn Python", completed: true, prioriry: "High" },
    { id: 1, name: "Learn Rust", completed: false, prioriry: "Low" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "filters/searchFilterChange":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
