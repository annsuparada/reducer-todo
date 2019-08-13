export const initialState = {
            task: 'Learn about reducers',
            completed: false,
            id: 1  
        }
export const todoReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "TOGG_ITEM":
          return 
        default:
            return state;
    }
    
}