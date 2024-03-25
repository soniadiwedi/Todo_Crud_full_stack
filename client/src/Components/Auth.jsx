import React from "react"
import Login from "../Pages/Login"
import { useSelector } from "react-redux"
export const Auth = ({children}) =>{
    const isAuth = useSelector((store)=>store.loginReducer.isAuth);
    console.log("object",isAuth);
    
    return <>
    {isAuth?children:<Login />}
    </>
}