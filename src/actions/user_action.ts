import axios from "axios";
import { SIGNIN_USER } from "./tpyes";

export function signinUser(dataToSubmit) {
  const request = axios
    .post("", dataToSubmit)
    .then((Response) => Response.data);

  return {
    type: SIGNIN_USER,
    payload: request,
  };
}
