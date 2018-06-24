import { action, observable } from 'mobx';
import todoList from '../components/activities.json';
import moment from 'moment';


class TodoStore {

    @observable
    listTodo = todoList

    @observable
    emptyListTodo={}

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

    @action
    onChanging = (index, value) => {
        const newValue = this.defaultValue;
        newValue[index] = value;
        this.defaultValue=newValue;
              
        
    };

//  @action
//     onSubmitAdd = (id, description, date, done) => {
     
//         let stateTodos = this.defaultValue;
//       stateTodos = { id: this.listTodo.length + 1, description: this.defaultValue.description, date: this.defaultValue.date, done: this.defaultValue.done };
           
//         const newTodos = [...stateTodos, stateTodos];
//          console.log(newTodos);
//         this.listTodo=[...this.listTodo,newTodos];
                
//     }

   @action
   onSubmitAdd = (e) => {
       e.preventDefault();
     console.log(e.target.value)
       let stateTodos = this.listTodo;
      stateTodos = { id: this.listTodo.length + 1, description:e.target.description.value, date: e.target.date.value, done: e.done };
     
      this.listTodo.push(stateTodos);
      e.target.description.value='';
     e.target.date.value='';
             
    }

   
};
export default new TodoStore();
