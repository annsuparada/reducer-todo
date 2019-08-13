import React from 'react';
import Todo from './component/Todo'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <Todo key={Math.random()}/>
    </div>
  );
}

export default App;
