import React, { Component } from "react";
import { Provider } from 'mobx-react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

import activities from './components/activities.json';
import stores from './stores';



class App extends Component {

  render() {
       return (
      <Provider {...stores}>
        <div className="App">
        <Header />
          <TodoList activities={activities} />
          </div>
        
      </Provider >
    );
  }
}

export default App;
