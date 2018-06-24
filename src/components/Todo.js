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
            <div className="comment">
                <span
                    style={done
                        ? {
                            textDecoration: 'line-through'
                        }
                        : {}}>

                    <input className="checkbox"
                        type="checkbox"
                        defaultChecked={done}
                        onClick={() => handleCheckBox(id)}/>
                        <h2 className="text">Task:
                    </h2> {description} <h2 className="text">Dead Line:</h2> {date}

                </span>
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
