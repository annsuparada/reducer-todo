import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList'
import TodoForm from './component/TodoForm'

import './App.css';

const groceriesData = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
]
const App = () => {
  const [groceries, setGroceries] = useState(groceriesData)

  const toggleItem = id => {
    console.log(id)
    setGroceries( groceries.map(item => {
        if(item.id === id) {
          return {
            ...item,
            // name: item.name,
            // id: item.id,
            // purchased: item.purchased,
           purchased: !item.purchased
          }
        } else {
          return item;
        }
      })
    )

  }

  const addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      purchased: false
    }
    setGroceries([...groceries, newItem]);
  }
  const clearPurchased = () => {
    setGroceries(groceries.filter(item => !item.purchased)
    );
  };

  
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <TodoForm 
            addItem={addItem}
            
          />
          <TodoList  
            groceries={groceries} 
            toggleItem={toggleItem}
            clearPurchased={clearPurchased}
          />
          
        </div>
      </div>
    );
  
}

export default App;
