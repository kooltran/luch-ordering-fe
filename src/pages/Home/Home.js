import React, { useEffect, useState } from "react";
import MenuList from "../../components/Menu/Menu";
import OrderCart from "../../components/Order/OrderCart";

import TimerCountDown from "../../components/TimerCountDown/TimerCountDown";
import { useAppContext } from "../../AppContext";

import Congrats from "../../assets/congrats.svg";
import OrderList from "../../assets/checklist.svg";
import { useHistory } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";

import "./Home.scss";

const Home = () => {
  const [{ submitOrder }] = useAppContext();
  const { createOrderSuccess } = submitOrder;
  const [show, setOpen] = useState(createOrderSuccess);
  let history = useHistory();

  const roles = localStorage.getItem("roles");
  const isAdmin = roles === "admin";

  useEffect(() => {
    if (createOrderSuccess) {
      setOpen(createOrderSuccess);
    }
  }, [createOrderSuccess]);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleGotoOrder = () => {
    history.push("/orders");
  };

  return (
    <div className="page">
      <h1 className="text-uppercase text-center">SP Team Lunch Ordering</h1>
      {!isAdmin && <TimerCountDown />}
      <a href="/lunch-ordering-fe/#/orders" className="icon-orders">
        <img src={OrderList} alt="checklist" />
      </a>
      <OrderCart />
      <MenuList />
      <Modal
        className="congrats-modal food-modal"
        show={show}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="food-modal__body">
          <img className="modal-icon" src={Congrats} alt="forbiden-order" />
          <div className="congrats-message">
            Thank you! Bạn đã order thành công!!
            <p>Chúc Ngon miệng</p>
          </div>
          <div className="congrats-button">
            <button className="btn-close" onClick={handleCloseModal}>
              Đóng
            </button>
            <button className="go-order" onClick={handleGotoOrder}>
              Xem order
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
