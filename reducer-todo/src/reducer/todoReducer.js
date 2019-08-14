export const initialState = {
    todos: [
      {
        item: "Learn about reducers",
        completed: false,
        id: Date.now()
      }
    ]
  };
export const todoReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos:state.todos.concat({item: action.payload, completed: false, id: Date.now()})
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                todos:state.todos.map(todo => 
                    todo.id === action.payload 
                    ? {...todo, completed: !todo.completed} 
                    : todo
                )
            }
        default:
            return state;
    }
    
}