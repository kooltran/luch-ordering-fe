import axios from "axios";
import { DOMAIN } from "../constants";

export const fetchMenuApi = () => {
  return axios.get(`${DOMAIN}/menuList`).then(res => res.data);
};
