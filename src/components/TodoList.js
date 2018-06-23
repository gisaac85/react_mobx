import React from "react";
import Todo from "./Todo";
import "../App.css";
import { observer, inject } from 'mobx-react';

@inject('todostore')

@observer
class TodoList extends React.Component {
  render() {
    const activities = this.props.todostore.listTodo;
    const todoListItem = activities.map((element =>
      <Todo
        id={element.id}
        description={element.description}
        date={element.date}
        done={element.done}
        handleCheckBox={this.props.handleCheckBox}
        key={element.id}

      />
    ));

    return (

      <div>
        {todoListItem}

      </div>
    )
  }
};

export default TodoList;
