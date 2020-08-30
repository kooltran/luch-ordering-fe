import axios from "axios";

const DOMAIN = "https://luch-ordering.herokuapp.com";

export const fetchCurrentUser = () => {
  return axios
    .get(`${DOMAIN}/user`, {
      headers: { "Access-Control-Allow-Origin": "*" },
      withCredentials: true
    })
    .then(res => res.data);
};
