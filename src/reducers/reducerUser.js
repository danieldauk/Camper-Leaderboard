import {USERS} from "../actions/getList";

export default function (state = false, action) {
  switch(action.type) {
    case USERS:
      return action.payload;
    default:
      return state;
  }
}
