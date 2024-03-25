
import { SET_TOASTER_MESSAGE,LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"
import axios from "axios"
const url="https://todo-crud-full-stack-backend-1.onrender.com"
export const loginRequest = () =>{
    return{type:LOGIN_REQUEST}
}
export const loginSuccess = (token) =>{
    return{type:LOGIN_SUCCESS,payload:token};
}
export const loginFailure = (error) =>{
    return{type:LOGIN_FAILURE,payload:error}
}
//Signup 
const signupRequest = () => ({
    type: SIGNUP_REQUEST,
  });
  
  const signupSuccess = () => ({
    type: SIGNUP_SUCCESS,
  });
  
  const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
  });
///Logout
  export const logoutData=()=>{
    return {type:LOGOUT}
  }
  ////////////////////////////////////////////
 

export const setToasterMessage = (message) => {
  return {
    type: SET_TOASTER_MESSAGE,
    payload: message
  };
};
//////////////////////////////////////////////
export const Signupfun=(user)=>async(dispatch)=>{
    dispatch(signupRequest())
    try {
      let res = await axios.post(
        `${url}/api/auth/register`,
        user
      );
      console.log("res", res.data.message);
      dispatch(signupSuccess(res.data))
      dispatch(setToasterMessage(res.data.message))
    } catch (err) {
      dispatch(signupFailure())
      setToasterMessage(err.message)
      console.log(err.message);
    }
}
///////////////////////////////////////////////////////////////////////////
export const loginFun = (email,password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(
      `${url}/api/auth/login`,
      {
        email,
        password,
      }
    );
    const { token } = response.data;
    const {name} =response.data.user;
    console.log("name",response.data.user)
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("name", JSON.stringify(name));

    dispatch(loginSuccess(response.data));
    dispatch(setToasterMessage(response.data.message))
   
  } catch (error) {
    dispatch(loginFailure(error.message));
    dispatch(setToasterMessage(error.message))

    
  }
};
