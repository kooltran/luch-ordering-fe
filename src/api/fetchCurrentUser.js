import axios from "axios";

const DOMAIN = "https://luch-ordering.herokuapp.com";

export const fetchCurrentUser = () => {
  return axios.get(`${DOMAIN}/user`).then(res => res.data);
};
