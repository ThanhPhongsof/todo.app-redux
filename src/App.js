import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { setupServer } from "./fakeApis";
import { useEffect } from "react";

const { Title } = Typography;
setupServer();

function App() {
  useEffect(() => {
    fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(),
    });

    fetch("/api/todos/")
      .then((res) => res.json())
      .then((res) =>
        console.log("🚀 ~ file: App.js ~ line 16 ~ useEffect ~ res", res)
      );
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
