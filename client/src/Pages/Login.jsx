import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginFailure, loginFun, loginRequest, loginSuccess, setToasterMessage } from '../Redux/Auth/action'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const msg = useSelector((store)=>{
      return store.loginReducer.toasterMessage
    })

    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(loginFun(email,password))
      .then(() => {
        
        toast.success("Login Successful..... ",msg);
        navigate("/")
      })
      .catch((error) => {
        
        toast.error(error.message);
      });
     }

  return (
    
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-form p-5 border rounded shadow">
        <h2 className="mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formBasicEmail">
            <Form.Label column sm="3">Email</Form.Label>
            <Col sm="9">
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicPassword">
            <Form.Label column sm="3">Password</Form.Label>
            <Col sm="9">
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
          <div className="text-center mt-3">
            <span>Not registered? </span>
            <Link to="/register">Register here</Link>
          </div>
        </Form>
      </div>
    </Container>
    )
        {/* <h1>Welcome To The Login Page</h1>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Emai"  />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
        <button onClick={handleLogin}>Login</button> */}
    
  
}

export default Login
//