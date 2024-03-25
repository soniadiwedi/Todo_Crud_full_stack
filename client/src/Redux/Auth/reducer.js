import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SET_TOASTER_MESSAGE, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes";


const initialState={
    isLoading:false,
    isAuth:false,
    token:"",
    isError:false,
    errorMsg: "",
    toasterMessage: ''
}

export const reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
            return{...state, isLoading:true, isError:false, errorMsg: ""};
        case LOGIN_SUCCESS:
            return{...state, isLoading:false, isAuth:true, token:payload.token};
        case SIGNUP_SUCCESS:
            return{...state, isLoading:false, }
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
            return{...state, isLoading:false, isError:true, errorMsg:payload.errorMsg};
        case LOGOUT:
            return{...state, isAuth:false, token:""};
            case SET_TOASTER_MESSAGE:
                return {
                  ...state,
                  toasterMessage: payload
                };
        default:
            return state;
    }
}