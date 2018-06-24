import React from "react";
import Todo from "./Todo";
import "../App.css";
import uuid from 'uuid/v4';
import TodosForm from '../components/TodosForm';
import '../App.css';
import {observer, inject} from 'mobx-react';

@inject('todostore')

@observer
class TodoList extends React.Component {

    render() {

        const activities = this.props.todostore.listTodo;
        
        const todoListItem = activities.map((
            element => <Todo
                id={element.id}
                description={element.description}
                date={element.date}
                done={element.done}
                handleCheckBox={this.props.handleCheckBox}
                key={uuid()}/>
        ));

        return (

            <div>
                <TodosForm/> 
                {todoListItem}
                  <div>
                    {!(this.props.todostore.listTodo && this.props.todostore.listTodo.length > 0) 
                      ? <h1 className="comment"> NO ITEM !!! </h1> : null}
                </div>

            </div>
        )
    }
};

export default TodoList;
