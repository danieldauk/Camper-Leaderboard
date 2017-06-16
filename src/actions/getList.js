import axios from "axios";

export const USERS = "USERS";

export function getList(url) {

   const response = axios.get(url);
     return {
       type: USERS,
       payload: response
     }

}
