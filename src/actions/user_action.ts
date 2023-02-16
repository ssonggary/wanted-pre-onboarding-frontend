import axios from "axios";
import { SIGNIN_USER, SIGNUP_USER } from "./tpyes";

export function signinUser(dataToSubmit) {
  const request = axios
    .post(
      "https://pre-onboarding-selection-task.shop/auth/signin",
      dataToSubmit
    )
    .then((Response) => Response.data);

  return {
    type: SIGNIN_USER,
    payload: request,
  };
}

export function signupUser(dataToSubmit) {
  const request = axios
    .post(
      "https://pre-onboarding-selection-task.shop/auth/signup",
      dataToSubmit
    )
    .then((Response) => Response.data);

  return {
    type: SIGNUP_USER,
    payload: request,
  };
}
