import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
    return (
        <div className="shopping-list">
            {props.groceries.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearPurchased}>
                Clear Purchased
      </button>
        </div>
    );
};

export default TodoList;