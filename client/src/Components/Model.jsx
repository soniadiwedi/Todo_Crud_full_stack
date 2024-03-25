import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getTodoFun, updateTodoFun } from "../Redux/Todo/action";

const Model = ({ showModal, setShowModal, selectedTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  console.log("/////////////////", selectedTodo, title, description,status);

  const handleSave = () => {
    const editedTodo = {
      id: selectedTodo._id, // Make sure to include the ID of the selected todo
      title,
      description,
      done:status,
    };

    dispatch(updateTodoFun(selectedTodo._id, editedTodo))
      .then(() => dispatch(getTodoFun()))
      .then(() => setShowModal(false));
  };
  useEffect(() => {
    setTitle(selectedTodo?.title);
    setDescription(selectedTodo?.description);
    setStatus(selectedTodo?.done);
  }, [selectedTodo]);

  return (
    <Container>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={false}>Pending</option>
                <option value={true}>Completed</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Model;
