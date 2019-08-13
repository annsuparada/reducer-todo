import React, { useState, useReducer } from 'react'
import { initialState, todoReducer } from '../reducer/todoReducer'
import TodoForm from '../component/TodoForm'

const Todo = () => {
    const [newItem, setNewItem] = useState([])
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state);
    
    const addTodo = e => {
        e.preventDefault();
        const newTodo = { task: '', completed: false, id: Date.now() };
        // setNewItem({ 
        //   todos: [...todos, newTodo], 
        //   todo: '' 
        // });
      };
    const  changeTodo = e => setNewItem({ [e.target.name]: e.target.value });

    const  toggleTodoComplete = id => {
        let todos = todos.slice();
        todos = todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
            return todo;
          } else {
            return todo;
          }
        });
        setNewItem({ todos });
      };
    
    const  clearCompletedTodos = e => {
        e.preventDefault();
        let todos = todos.filter(todo => !todo.completed);
        setNewItem({ todos });
      };
    
    return(
        <div>
            <h1>{state.task}</h1>
            <TodoForm 
                value={newItem}
                handleTodoChange={changeTodo}
                handleAddTodo={addTodo}
                handleClearTodos={clearCompletedTodos}
            />
        </div>
    )
}

export default Todo;