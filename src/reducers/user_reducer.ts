import { SIGNIN_USER } from "../actions/tpyes";

export default function (state = {}, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;

    default:
      return state;
  }
}
