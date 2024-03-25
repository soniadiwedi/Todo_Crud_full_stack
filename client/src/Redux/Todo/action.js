import axios from "axios"
import { ADD_TODO, CHANGE_FLAG, DELETE_TODO_SUCCESS, ERROR, GET_TODO, LOADING, UPDATE_TODO } from "./actionTypes";
import { setToasterMessage } from "../Auth/action";

const url="https://todo-crud-full-stack-backend-1.onrender.com"

export const getTodoList = (payload) => {
    return { type: GET_TODO, payload };
  };
  
  export const loadingData=()=>{
      return{type:LOADING}
  }
  export const ErrorData=()=>{
      return{type:ERROR}
  }
  
  export const addTodo=(payload)=>{
    return {type:ADD_TODO,payload}
  }
  
  export const changeFlag = (payload)=>{
    return{type:CHANGE_FLAG,payload}
  }
  
  export const deleteTodoSuccess = (id) => ({
    type: DELETE_TODO_SUCCESS,
    payload: id,
  });
//create
export const createTodoFun=(emp)=>async(dispatch)=>{
    console.log("action",emp);
    let token = JSON.parse(localStorage.getItem("token"));
  
       try{
       let res= await axios.post(`${url}/api/todo/add`,emp,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
       })
        dispatch(addTodo(res.data))
        dispatch(setToasterMessage(res.data.msg))
        console.log("createdtodo",res.data)
       }catch(err){
          console.log(err)
       } 
  }
//get
  export const getTodoFun = () => (dispatch) => {
    dispatch(loadingData())
  let token = JSON.parse(localStorage.getItem("token"));
  axios
    .get(`${url}/api/todo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
     dispatch( getTodoList(res.data))
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch(ErrorData())
    });
} 
//edit
export const updateTodoFun = (_id, data) => async (dispatch) => {
    try {
        const res = await axios.patch(`${url}/api/todo/update/${_id}`, data );
console.log(res)
      return res
        
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}

//Delete

export const deleteTodoFun = (id) => (dispatch) => {
  let res=axios.delete(`${url}/api/todo/delete/${id}`)
  return res;
};



