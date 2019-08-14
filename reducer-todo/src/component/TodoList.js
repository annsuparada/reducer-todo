import React from 'react';

function TodoList({ list, toggle })  {
    console.log()
    return (
        <div>
            {list.map(todo => (
                <div onClick={() => toggle(todo.id)}>{todo.item}</div>
            ))}
        </div>
    )
};

export default TodoList;