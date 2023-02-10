import React from "react";
import { Button, Form, Container } from "react-bootstrap";

const Signin = () => {
  return (
    <>
      <Container className="position-absolute top-50 start-50 translate-middle w-50">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <div>
            <Button variant="primary" type="submit" className="me-2">
              로그인
            </Button>
            <Button type="submit">회원가입</Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Signin;
