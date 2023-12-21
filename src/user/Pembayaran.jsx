import React, { useState } from "react";
import Banner from "../../Components/Banner";
import "../style/style.css";
import imgDana from "../Images/Dana.jpeg";
import imgQris from "../Images/qris.webp";
import imggopay from "../Images/gopay.png";
import imgshopeepay from "../Images/logo-shopeepay.png";
import imgva from "../Images/virtual-account.png";
import imgCA from "../Images/credit-card.jpg";
import { Button } from "@material-tailwind/react";
import { NavLink, Link } from 'react-router-dom';

function Pembayaran() {
  const [activePayment, setActivePayment] = useState(null);

  const handlePaymentClick = (payment) => {
    setActivePayment(payment);
  };

  const paymentStyle = (payment) => {
    return `border ${activePayment === payment ? "border-blue-500" : "border-sky-500"} w-36 h-36 rounded-full object-cover hover:border-blue-500`;
  };

  return (
    <div>
      <Banner></Banner>
      <div className="py-14 px-14"></div>
      <div className="bgpembayaran py-14 px-14">
        <h1 className="font-bold text-3xl">Select Payment</h1>
        <div className="flex justify-evenly mt-14 ">
          <NavLink to="#" onClick={() => handlePaymentClick("Dana")}>
            <img
              src={imgDana}
              width={"250px"}
              alt=""
              className={paymentStyle("Dana")}
            />
          </NavLink>
          <NavLink to="#" onClick={() => handlePaymentClick("Qris")}>
            <img
              src={imgQris}
              alt=""
              width={"250px"}
              className={paymentStyle("Qris")}
            />
          </NavLink>
          <NavLink to="#" onClick={() => handlePaymentClick("Gopay")}>
            <img
              src={imggopay}
              alt=""
              width={"250px"}
              className={paymentStyle("Gopay")}
            />
          </NavLink>
        </div>
        <div className="flex justify-evenly mt-14 ">
          <NavLink to="#" onClick={() => handlePaymentClick("Shopeepay")}>
            <img
              src={imgshopeepay}
              alt=""
              width={"250px"}
              className={paymentStyle("Shopeepay")}
            />
          </NavLink>
          <NavLink to="#" onClick={() => handlePaymentClick("VirtualAccount")}>
            <img
              src={imgva}
              alt=""
              width={"250px"}
              className={paymentStyle("VirtualAccount")}
            />
          </NavLink>
          <NavLink to="#" onClick={() => handlePaymentClick("CreditCard")}>
            <img
              src={imgCA}
              alt=""
              width={"250px"}
              className={paymentStyle("CreditCard")}
            />
          </NavLink>
        </div>
        <div className="flex justify-center">
          <Link to="/Donation/Register/Form/bayar/confir">
            <Button color="blue" className="mt-7">
              Confirmation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
