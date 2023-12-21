import React from "react";
import Banner from "../../Components/Banner";
import "../style/style.css";
import imgDana from "../Images/Dana.jpeg";
import imgQris from "../Images/qris.webp";
import imggopay from "../Images/gopay.png";
import imgshopeepay from "../Images/logo-shopeepay.png";
import imgva from "../Images/virtual-account.png";
import imgCA from "../Images/credit-card.jpg";
import { Button } from "@material-tailwind/react";
import Footer from "../../Components/Footer";

function Pembayaran() {
  return (
    <div>
      <Banner></Banner>
      <div className="py-14 px-14"></div>
      <div className="bgpembayaran py-14 px-14">
        <h1 className="font-bold text-3xl">Select Payment</h1>
        <div className="flex justify-evenly mt-14 ">
          <span>
            <img
              src={imgDana}
              width={"250px"}
              alt=""
              srcset=""
              className="border border-sky-500 w-36 h-36 rounded-full object-cover"
            />
          </span>
          <span>
            <img
              src={imgQris}
              alt=""
              width={"250px"}
              className="border border-sky-500 w-36 h-36  rounded-full object-cover"
            />
          </span>
          <span>
            <img
              src={imggopay}
              alt=""
              width={"250px"}
              className="border border-sky-500 w-36 h-36 rounded-full object-cover"
            />
          </span>
        </div>
        <div className="flex justify-evenly mt-14 ">
          <span>
            <img
              src={imgshopeepay}
              alt=""
              width={"250px"}
              className="border border-sky-500 w-36 h-36 rounded-full object-cover"
            />
          </span>
          <span>
            <img
              src={imgva}
              alt=""
              width={"250px"}
              className="border border-sky-500 rounded-full w-36 h-36 object-cover"
            />
          </span>
          <span>
            <img
              src={imgCA}
              alt=""
              width={"250px"}
              className="border border-sky-500 rounded-full w-36 h-36 object-cover"
            />
          </span>
        </div>
        <div className="flex justify-center">
          <Button color="blue" className="mt-7">
            Confirmation
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Pembayaran;
