import { useEffect, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Col,Row } from 'react-bootstrap';
import "./todo.css";
import { createTodoFun, getTodoFun } from "../Redux/Todo/action"
import { toast } from "react-toastify"
import TodoTable from "./TodoTable";
export const Todo = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const msg = useSelector((store)=>{
      return store.loginReducer.toasterMessage
    })

    useEffect(()=>{
      dispatch(getTodoFun());
    },[])
    const handleSubmit = (e) => {
      e.preventDefault();
      const todoData={title,description};
      dispatch(createTodoFun(todoData))
      .then(() => {
        dispatch(getTodoFun())
        toast.success("todo has been created");
        
      })
      .catch((error) => {
        
        toast.error(error.message);
      });
      setTitle('');
      setDescription('');
    };




 

    //console.log(todos)
    return (
      <>
        <Container className="form-container mt-3"> {/* Apply the CSS class */}
        <Form onSubmit={handleSubmit}>

          <Form.Group as={Row} controlId="title">
          <Form.Label column sm="3"  className="label-bold">Title</Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="description" >
            <Form.Label column sm="3"  className="label-bold">Description</Form.Label>
            <Col>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit" className="mx-auto d-block my-1">
            Add Todo
          </Button>
        </Form>
       
      </Container>

      <TodoTable />
      </>
    )
}

