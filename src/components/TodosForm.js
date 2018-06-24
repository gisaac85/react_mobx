import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('todostore')
@observer
class TodosForm extends Component {
 
    // constructor(props) {
    //     super(props);
    //     this.state = ({
    //         description: "",
    //         deadline: "",
    //         done: false
    //     })
    // }
    // state = this.state;

    render() {
      
       const { id,description, date, done } = this.props;
       const { onChanging } = this.props.todostore;
       const { onSubmitAdd, defaultValue } = this.props.todostore;   

       return (
            
               <form  onSubmit={(e) => onSubmitAdd(e)}>
                    <p style={{ "color": "blue", "fontSize": "20px" }}>Description :</p>
                    <textarea className="textArea" placeholder="write the new todo here "
                        type="textarea"
                        name="description"
                        value={description}
                        onChange={(e) => onChanging("description", e.target.value)}
                    />
              
                    <p style={{ "color": "blue", "fontSize": "20px" }}>Dead Line Date : </p>
                    <input className="textArea" placeholder="write the deadline here "
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => onChanging("date", e.target.value)}
                    />
             
                    <button className="buttonStyle">
                        Add
                    </button>
                    <br /> <br />
               </form>
        );
    }
};
export default TodosForm;