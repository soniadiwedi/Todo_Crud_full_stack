import { ADD_TODO, DELETE_TODO_SUCCESS, ERROR, GET_TODO, LOADING, UPDATE_TODO } from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  flag:false
};

// Reducer for employee-related actions
export const reducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case LOADING:
      return { ...state, isLoading: true };
    case ERROR:
      return { ...state, isError: true, isLoading: false };
    case GET_TODO:
      return { ...state, todos: payload,isLoading:false,isError:false };
    
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
   
   
      case DELETE_TODO_SUCCESS:
        // Filter out the deleted todo item from the state
        const updatedTodos = state.todos.filter(todo => todo._id !== payload);
        return {
          ...state,
          todos: updatedTodos
        }  
    default:
      return state;
  }
};