import { action, observable } from 'mobx';
import todoList from '../components/activities.json';
import moment from 'moment';

class TodoStore {

    @observable
    listTodo = todoList;

    @observable
    defaultValue = {
        id: '',
        description: '',
        date: moment(),
        done: false
    }

    // I tried this function and it worked!
    // @action
    // handleCheckBox = () => {
    //     return alert('hello');
    // }

// this function didn't work ? 
    @action
    handleCheckBox = (id) => {
        const newTodoList = this.listTodo.map((todoElement) => {
            if (todoElement.id === id) {

                return {
                    ...todoElement,
                    done: !todoElement.done,
                }

            }
            return todoElement;

        });

        this.listTodo = newTodoList;

    }


};
export default new TodoStore();
