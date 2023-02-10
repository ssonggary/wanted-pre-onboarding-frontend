import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Gnb = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="signin">로그인</Nav.Link>
          <Nav.Link href="signup">회원가입</Nav.Link>
          <Nav.Link href="TodoList">To Do List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Gnb;
