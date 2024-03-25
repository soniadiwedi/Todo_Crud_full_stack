import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Signupfun, setToasterMessage } from '../Redux/Auth/action';
import { ToastContainer, toast } from 'react-toastify'
const Register = () => {
  const [name,setName]=useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[error,setError]=useState("")
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const msg=useSelector((store)=>{
    return store.loginReducer.toasterMessage;
  })
  console.log("msg",msg);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    dispatch(Signupfun(userData))
    toast.success(msg)
    navigate("/login")
  };
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
    <div className="login-form p-5 border rounded shadow">
      <h2 className="mb-4">Register</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column sm="3">Name</Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column sm="3">Email</Form.Label>
          <Col sm="9">
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPassword">
          <Form.Label column sm="3">Password</Form.Label>
          <Col sm="9">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
        <div className="text-center mt-3">
          
          <Link to="/login">Login here</Link>
        </div>
      </Form>
    </div>
  </Container>
  )
}

export default Register