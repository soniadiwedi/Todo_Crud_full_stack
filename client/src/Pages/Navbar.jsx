import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from "react-redux";
import { logoutData } from '../Redux/Auth/action';


function Navbars() {
  const dispatch = useDispatch();
  const userName=localStorage.getItem("name")
  console.log("user",userName);

  const handleLogout=()=>{
    console.log("hiiii");
    dispatch(logoutData())
  }
  return (
    <Container>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Todo Application</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {userName ? (
            <>
              <Nav.Link>{userName}</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
          <Nav.Link href="/">Todo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
  );
}

export default Navbars;
