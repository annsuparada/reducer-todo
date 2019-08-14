import React, { useReducer} from 'react';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList'
import TodoForm from './component/TodoForm'

import { todoReducer, initialState} from './reducer/todoReducer'
import './App.css';


const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = item => {
    dispatch({type: "ADD_TODO", payload: item })
  }
  
  const toggle = item => {
    dispatch({type: "TOGGLE_TODO", payload: item })
  }
    return (
      <div className="App">
        <div className="header">
          
          <TodoForm 
            add={addTodo}
          />
          <TodoList  
            list={state.todos}
            toggle={toggle}
          />
          
        </div>
      </div>
    );
  
}

export default App;
