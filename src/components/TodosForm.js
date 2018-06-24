import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('todostore')
@observer
class TodosForm extends Component {
 
    render() {
      
       const { description, date } = this.props;
       const { onChanging } = this.props.todostore;
       const { onSubmitAdd } = this.props.todostore;   

       return (
            
               <form  onSubmit={(e) => onSubmitAdd(e)}>
               <div>
                    <p style={{ "color": "blue", "fontSize": "20px" }}>Description :</p>
                    <textarea className="textArea" placeholder="write the new todo here "
                        type="textarea"
                        name="description"
                        value={description}
                        onChange={(e) => onChanging("description", e.target.value)}
                    /></div>
              <div>
                    <p style={{ "color": "blue", "fontSize": "20px" }}>Dead Line Date : </p>
                    <input className="textArea" placeholder="write the deadline here "
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => onChanging("date", e.target.value)}
                    /></div>
             
                    <button className="buttonStyle">
                        Add
                    </button>
                    <br /> <br />
               </form>
        );
    }
};
export default TodosForm;