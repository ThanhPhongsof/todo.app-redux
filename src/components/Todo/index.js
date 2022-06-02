import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleStatusTodo } from "../../redux/actions";
import todoListSlice from "../TodoList/todoSlice_ReactToolkit";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

const Todo = ({ id, name, prioriry, completed }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    // redux-core
    // dispatch(toggleStatusTodo(id));

    // redux-toolkit
    dispatch(todoListSlice.actions.toggleStatusTodo(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
};

export default Todo;
