import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from '../reducer/todoReducer'

const Todo = () => {
    const [newItem, setNewItem] = useState([])
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state);
    return(
        <div>
            {state.map(todo => {
                return <h1 key={todo.id}>{todo.item}</h1>
            })}
            <input />
        </div>
    )
}

export default Todo;