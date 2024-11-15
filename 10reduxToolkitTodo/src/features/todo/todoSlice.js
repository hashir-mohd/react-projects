import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:1, text:"hello world"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            console.log(action);
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action) =>{
            console.log(action.payload);
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo:(state,action) =>{
            
            const updatedTodo = state.todos.find((todo)=> todo.id === action.payload.id)
            if(updatedTodo){
                updatedTodo.text = action.payload.text
            }
            
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer