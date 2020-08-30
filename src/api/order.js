import axios from "axios";

const DOMAIN = "https://luch-ordering.herokuapp.com";

export const createOrder = orders => {
  return axios.post(`${DOMAIN}/orders/create`, orders).then(res => res.data);
};

export const getOrders = () => {
  return axios.get(`/${DOMAIN}orders/list`).then(res => res.data);
};

export const getAllOrders = () => {
  return axios.get(`/${DOMAIN}orders/all`).then(res => res.data);
};
