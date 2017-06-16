import {USERS} from "../actions/getList";

export default function (state = {data: []}, action) {
  switch(action.type) {
    case USERS:
      return action.payload;
    default:
      return state;
  }
}
