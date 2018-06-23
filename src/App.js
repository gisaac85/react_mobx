import React, { Component } from "react";
import { Provider } from 'mobx-react';
import "./App.css";
import TodoList from './components/TodoList';
import activities from './components/activities.json';
import stores from './stores';



class App extends Component {

  render() {
       return (
      <Provider {...stores}>
        <React.Fragment>
          <TodoList activities={activities} />
        </React.Fragment>
      </Provider >
    );
  }
}

export default App;
