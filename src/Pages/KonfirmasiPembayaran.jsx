import React from "react";
import { Checkbox, Typography, Button } from "@material-tailwind/react";
import Banner from "../../Components/Banner";
import TextArea from "../../Components/TextArea";
import Footer from "../../Components/Footer";

function KonfirmasiPembayaran() {
  return (
    <div>
      <Banner></Banner>
      <h1 className=" text-center mb-8  text-2xl font-bold">
        Konfirmasi Pembayaran
      </h1>
      <div className="bgConfirm py-14">
        <div className="w-4/5 m-auto py-14 px-11  bg-white rounded-xl">
          <input
            type="text"
            style={{
              height: "60px",
              borderRadius: "10px",
              color: "black",
              padding: "25px",
              width: "100%",
              border: "1px solid black",
            }}
            value={"RP 1.500.000"}
            className=" mb-3"
          />
          <p className=" mb-3 text-sm md:text-base lg:text-base">
            Payment Method
          </p>
          <div className="flex justify-between mb-3 text-sm md:text-base lg:text-base ">
            <p>Shopee Pay</p>
            <p>Selected</p>
          </div>
          <h2 className=" mb-3 text-sm md:text-base lg:text-base">Username</h2>
          <p className=" mb-3 text-sm md:text-base lg:text-base">
            JackKahunaLaguna@gmail.com
          </p>
          <Checkbox
            label={
              <Typography
                color="black"
                className="text-sm md:text-base lg:text-base"
              >
                Hide My Identity
              </Typography>
            }
          ></Checkbox>
          <TextArea></TextArea>
          <div className="block sm:block md:flex lg:flex justify-between mt-5">
            <Button
              color="blue"
              className="w-full sm:block sm:w-full md:w-4/12 lg:w-4/12 h-12 mb-2"
            >
              Cancel
            </Button>
            <Button
              color="blue"
              className="w-full sm:block sm:w-full sm:mb-3 md:w-4/12 lg:w-4/12 h-12"
            >
              Confirmation
            </Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default KonfirmasiPembayaran;
