import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { setupServer } from "./fakeApis";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./components/TodoList/todoSlice_ReactToolkit";

const { Title } = Typography;

if (process.env.NODE_ENV === "development") {
  setupServer();
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="app">
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
