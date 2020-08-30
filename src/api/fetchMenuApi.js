import axios from "axios";

const DOMAIN = "https://luch-ordering.herokuapp.com";

export const fetchMenuApi = () => {
  return axios.get(`${DOMAIN}/menuList`).then(res => res.data);
};
