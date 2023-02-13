import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signinUser } from "../../actions/user_action";
import { Button, Form, Container } from "react-bootstrap";

const Signin = () => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(signinUser(body));
  };

  return (
    <>
      <Container className="position-absolute top-50 start-50 translate-middle w-50">
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={Email}
              onChange={onEmailHandler}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={Password}
              onChange={onPasswordHandler}
              placeholder="Password"
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <div>
            <Button
              variant="primary"
              type="submit"
              className="me-2"
              formAction=""
            >
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
