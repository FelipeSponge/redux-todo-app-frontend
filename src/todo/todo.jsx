import React, { Component } from "react";
import Axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { descripition: "", list: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChange(e) {
    this.setState({ ...this.state, descripition: e.target.value });
  }

  handleAdd() {
    const descripition = this.state.descripition;
    Axios.post(URL, { descripition }).then((resp) => console.log("Funcionou"));
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          descripition={this.state.descripition}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
        />
        <TodoList />
      </div>
    );
  }
}
