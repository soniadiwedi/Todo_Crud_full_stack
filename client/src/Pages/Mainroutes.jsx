import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'

import { EditTodo } from './EditTodo'
import { Auth } from '../Components/Auth'
import Register from './Register'

function Mainroutes() {
  return (
    <Routes>
        <Route path='/' element={<Auth> <HomePage /> </Auth>} />
    
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/todos/edit/:id' element={
        <Auth>
        <EditTodo />
        </Auth>
        } />
     </Routes>
  )
}

export default Mainroutes