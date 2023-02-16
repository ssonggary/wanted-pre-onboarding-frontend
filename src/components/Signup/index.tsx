import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signupUser } from "../../actions/user_action";

const Signup = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("입력한 비밀번호가 일치하지 않습니다.");
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
      confirmPassword: ConfirmPassword,
    };

    dispatch(signupUser(body)).then((response: any) => {
      if (response.payload.success) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
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
              placeholder="이메일을 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={Name}
              onChange={onNameHandler}
              placeholder="이름을 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={Password}
              onChange={onPasswordHandler}
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={ConfirmPassword}
              onChange={onConfirmPasswordHandler}
              placeholder="비밀번호를 다시 입력해주세요."
            />
          </Form.Group>
          <Button type="submit">회원가입</Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
