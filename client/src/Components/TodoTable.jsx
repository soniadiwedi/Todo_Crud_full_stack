import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Model";
import { deleteTodoFun, getTodoFun } from "../Redux/Todo/action";

function TodoTable() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const dispatch=useDispatch()
  const todos = useSelector((store) => {
    return store.todoReducer.todos.data;
  });

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteTodoFun(id)).then(()=>dispatch(getTodoFun()))
      
    } catch (error) {
      console.log('Error deleting todo:', error);
    }
  };
  
  
  useEffect(()=>{
    dispatch(getTodoFun())
  },[selectedTodo])


  return (
    <Container className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th
              style={{ backgroundColor: "#8f2b2b", color: "white" }}
              colSpan={4}
            >
              Available Todo List
            </th>
          </tr>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo, index) => (
            <tr key={index}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.done ? "Completed" : "Pending"}</td>
              
              <td>
                <button onClick={() => handleEdit(todo)}>
                  <i className="fas fa-edit"></i>
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(todo._id)}>
                  <i className="fas fa-trash-alt"></i> {/* Delete icon */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Todo Modal */}
      <Model
        showModal={showModal}
        setShowModal={setShowModal}
        selectedTodo={selectedTodo}
      />
    </Container>
  );
}

export default TodoTable;
