import axios from "axios";
import { DOMAIN } from "../constants";

export const fetchCurrentUser = () => {
  const token = localStorage.getItem("token");
  return axios
    .get(`${DOMAIN}/user`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data);
};
