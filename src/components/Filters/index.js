import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  priorityFilterChange,
  searchFilterChange,
  statusFilterChange,
} from "../../redux/actions";
import filtersSlice from "./filterSlice_ReactToolkit";

const { Search } = Input;

const Filters = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [prioritiesFilter, setPrioritiesFilter] = useState([]);

  const searchTextChangeHandler = (e) => {
    setSearchText(e.target.value);
    // redux-core
    // dispatch(searchFilterChange(e.target.value));

    //redux-toolkit
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };

  const statusChangeHandler = (e) => {
    setStatusFilter(e.target.value);
    // redux-core
    // dispatch(statusFilterChange(e.target.value));

    //redux-toolkit
    dispatch(statusFilterChange(e.target.value));
  };

  const prioritiesChangeHandler = (values) => {
    setPrioritiesFilter(values);
    // redux-core
    // dispatch(priorityFilterChange(values));

    //redux-toolkit
    dispatch(filtersSlice.actions.priorityFilterChange(values));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={searchTextChangeHandler}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusFilter} onChange={statusChangeHandler}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={prioritiesFilter}
          onChange={prioritiesChangeHandler}
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
      </Col>
    </Row>
  );
};

export default Filters;
