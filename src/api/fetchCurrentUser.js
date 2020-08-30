import axios from "axios";

export const fetchCurrentUser = () => {
  return axios.get(`http://localhost:3000/user`).then(res => res.data);
};
