import React from "react";
import { Button, Form, Container } from "react-bootstrap";

const Signup = () => {
  return (
    <>
      <Container className="position-absolute top-50 start-50 translate-middle w-50">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="이메일을 입력해주세요." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="이름을 입력해주세요." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
            />
          </Form.Group>
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

export default Signup;
