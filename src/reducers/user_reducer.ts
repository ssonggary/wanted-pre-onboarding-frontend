import { SIGNIN_USER, SIGNUP_USER } from "../actions/tpyes";

export default function (state = {}, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;

    case SIGNUP_USER:
      return { ...state, register: action.payload };
      break;

    default:
      return state;
  }
}
