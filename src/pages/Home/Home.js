import React, { useEffect } from "react";
import MenuList from "../../components/Menu/Menu";
import OrderCart from "../../components/Order/OrderCart";

import TimerCountDown from "../../components/TimerCountDown/TimerCountDown";
import { useAppContext } from "../../AppContext";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [{ submitOrder }] = useAppContext();
  const { createOrderSuccess } = submitOrder;

  useEffect(() => {
    if (createOrderSuccess) {
      toast.success("Bạn đã đặt món thành công, chúc ngon bạn miệng!!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }

    const formData = new FormData();

    formData.append("string", "Thứ Sáu");
    formData.append("date", "2020-08-28");
    console.log(formData, "formData");
    axios
      .post("https://www.anzi.com.vn/home/getListMenu", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => console.log(res, "lala"));
  }, [createOrderSuccess]);

  return (
    <div className="page">
      <h1 className="text-uppercase text-center">SP Team Luch Ordering</h1>
      <TimerCountDown />
      <OrderCart />
      <MenuList />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Home;
