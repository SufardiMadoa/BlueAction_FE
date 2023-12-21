import React from "react";
import { Link } from 'react-router-dom';
import { Checkbox, Typography, Button } from "@material-tailwind/react";
import Banner from "../../Components/Banner";
import TextArea from "../../Components/TextArea";
import Swal from "sweetalert2";
// import Footer from "../../Components/Footer";
import shopee from "../Images/shopee.png"

function KonfirmasiPembayaran() {
  const handleClick = () => {
    // Show SweetAlert2 popup with an image and "Selesai" button
    Swal.fire({
      imageUrl: shopee,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Custom image",
      title: 'Konfirmasi Pembayaran',
      html: `
        <p>Payment Method: Shopee Pay</p>
        <p>Username: Sufardi@gmail.com</p>
      `,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Selesai',
      cancelButtonColor: 'green',
    }).then((result) => {
      if (result.isConfirmed) {
        // Show another SweetAlert2 popup with a "Terima kasih Orang Baik" message
        Swal.fire({
          icon: 'success',
          title: 'Terima kasih Orang Baik',
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
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
          <h2 className=" mb-3 text-sm md:text-base lg:text-base">Sufardi</h2>
          <p className=" mb-3 text-sm md:text-base lg:text-base">
            Sufardi@gmail.com
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
           <Link to="/Donation" className="w-full sm:block sm:w-full md:w-4/12 lg:w-4/12 h-12 mb-2"> <Button
              color="blue"
              className="w-full sm:block sm:w-full md:w-full lg:w-full h-12 mb-2"
            >
              Cancel
            </Button>
            </Link>
            <Button
            onClick={handleClick}
              color="blue"
              className="w-full sm:block sm:w-full sm:mb-3 md:w-4/12 lg:w-4/12 h-12"
            >
              Confirmation
            </Button>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default KonfirmasiPembayaran;
