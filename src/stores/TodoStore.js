import {action, observable,computed} from 'mobx';
import todoList from '../components/activities.json';
import moment from 'moment';
import '../App.css';

class TodoStore {

    @observable 
    listTodo = todoList 

    @observable 
    emptyListTodo = {}

    @observable 
    defaultValue = {
        id: '',
        description: '',
        date: moment(),
        done: false
    }
    @computed 
    get completedTodosCount() {
    return this.listTodo.filter(
        todo => todo.done === true
    ).length;
}
 @computed 
    get todosCount() {
    return this.listTodo.length;
}



    @action 
    handleCheckBox = (id) => {
        const newTodoList = this
            .listTodo
            .map((todoElement) => {
                if (todoElement.id === id) {

                    return {
                        ...todoElement,
                        done: !todoElement.done
                    }

                }
                return todoElement;

            });

        this.listTodo = newTodoList;

    }

    @action 
    onChanging = (index, value) => {
        const newValue = this.defaultValue;
        newValue[index] = value;
        this.defaultValue = newValue;

    };

    @action 
    onSubmitAdd = (e) => {
        e.preventDefault();

        let stateTodos = this.listTodo;
        stateTodos = {
            id: this.listTodo.length + 1,
            description: e.target.description.value,
            date: e.target.date.value,
            done: e.done
        };

        this
            .listTodo
            .push(stateTodos);
        e.target.description.value = '';
        e.target.date.value = '';

    }

    @action 
    removeTodo = (id) => {
        
        let stateTodos = this.listTodo.filter((item) => {
                return item.id !== id
            })
        this.listTodo=stateTodos;
       
    }

   


};
export default new TodoStore();
