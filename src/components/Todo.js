import React from "react";
import {observer, inject} from 'mobx-react';
import '../App.css';

@inject('todostore')

@observer
class Todo extends React.Component {
   
    render() {
        const {id, description, date, done} = this.props;
        const {handleCheckBox,removeTodo} = this.props.todostore;

        return (
            <div>
                <li
                    style={done
                        ? {
                            textDecoration: 'line-through'
                        }
                        : {}}>

                    <input
                        type="checkbox"
                        defaultChecked={done}
                        onClick={() => handleCheckBox(id)}/> {description}, on {date}.

                </li>
                <span className="removeStyle">
                    <button onClick={() => removeTodo(id)}>
                        Remove Todo
                    </button>
                </span>
            </div>

        );
    }

}

export default Todo;
