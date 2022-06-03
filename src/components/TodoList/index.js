import Todo from "../Todo";
import { v4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { addTodo } from "../../redux/actions";
import { todosRemainingSelector } from "../../redux/selector";
import todoListSlice, { addNewTodo, addTodos } from "./todoSlice_ReactToolkit";

const TodoList = () => {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector);

  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    // dispatch(
    //   //   // redux-core
    //   //   // addTodo({
    //   //   //   id: v4(),
    //   //   //   name: todoName,
    //   //   //   prioriry: priority,
    //   //   //   completed: false,
    //   //   // })

    //   //   // redux-toolkit
    //   todoListSlice.actions.addTodo({
    //     id: v4(),
    //     name: todoName,
    //     prioriry: priority,
    //     completed: false,
    //   })
    // );
    dispatch(
      addNewTodo({
        id: v4(),
        name: todoName,
        prioriry: priority,
        completed: false,
      })
    );

    setTodoName("");
    setPriority("Medium");
  };

  const onChangeTodoNameHandler = (e) => {
    e.target.value && setTodoName(e.target.value);
  };

  const onChangePriorityHandler = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList?.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.prioriry}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={onChangeTodoNameHandler} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={onChangePriorityHandler}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};

export default TodoList;
