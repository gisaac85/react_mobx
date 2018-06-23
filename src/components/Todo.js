import React from "react";
import { observer, inject } from 'mobx-react';
import '../App.css';

@inject('todostore')

@observer
class Todo extends React.Component {
  // handleCheckBox = () => {
  //   this.setState({
  //     done: !this.state.done
  //   });
  // };
  render() {
    const { id, description, date, done } = this.props;
    // const description = this.props.description;
    // const date = this.props.deadline;
    // const done = this.props.done;
    const { handleCheckBox } = this.props.todostore;

    return (
      <li style={done
        ? {
          textDecoration: 'line-through'
        }
        : {}}>

        <input
          type="checkbox"

          defaultChecked={done}

          onClick={() => handleCheckBox(id)}
        />

        {description}, on {date}.
      </li>

    );
  }

}

export default Todo;
