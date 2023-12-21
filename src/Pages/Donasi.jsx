import React from "react";
import { Button } from "@material-tailwind/react";
import "../style/style.css";
import img1 from "../Images/imgDonasii1.png";
import img2 from "../Images/imgDonasi2.png";
import img3 from "../Images/imgDonas3.png";
import img4 from "../Images/imgDonasi4.png";
import img5 from "../Images/imgDonasi5.png";
import img6 from "../Images/imgDonasi6.png";
import Card from "../../Components/CardDonasi";
import Footer from "../../Components/Footer";

function Donasi() {
  return (
    <div>
      <div className="px-4 py-14 md:px-14 ">
        <div className="relative bg">
          <div className="absolute inset-x-4 bottom-12 ps-5 md:ps-12 lg:ps-12">
            <span className="lg:text-3xl text-white md:text-3xl sm:text-2xl ">
              <h1>Help Free Rivers from Plastic Pollution</h1>
            </span>
            <p className="text-white font-light">Palu Sulawesi Barat</p>
            <span className="flex float-row justify-between">
              <p className="mt-7 lg:text-2xl text-white md:text-3xl sm:text-2xl  ">
                Collected Rp.151.212.309
              </p>
              <Button
                className="lg:inline-block md:inline-block w-36 text-base sm:hidden hidden "
                color="blue"
              >
                Donate
              </Button>
            </span>
            <div className="sm:block lg:hidden md:hidden xs:hidden">
              <Button className=" text-base" color="blue">
                Donate
              </Button>
            </div>
          </div>
        </div>

        <div className="main-content text-center md:p-14 lg:p-14">
          <Button
            color="blue"
            className="w-48 h-16 md:h-20 lg:h-20 mt-10 lg:w-72 md:w-72 sm:w-56 text-sm lg:text-lg md:text-lg sm:text-sm"
          >
            Event Donation
          </Button>
          <div className="Card-Body justify-center mt-10 md:mt-20 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              className="me-5"
              header="One plant for the future a healthy earth"
              location="Makassar, Sulawesi Selatan"
              Num="Collected : Rp.151.212.309"
              imag={img1}
            ></Card>
            <Card
              header="Indonesia's future without plastic waste"
              location="Biak, Papua"
              Num="Collected : Rp.70.233.091"
              imag={img2}
            ></Card>
            <Card
              header="Efforts to Recycle Waste into Usable Goods"
              location="Pinrang, Sulawesi Selatan"
              Num="Collected: Rp. 81.221.991"
              imag={img3}
            ></Card>
            <Card
              header="Zero Plastic Challenge: Care for the Earth, Reduce Plastic"
              location="Palu, Sulawesi Barat "
              Num="Collected : Rp.19.438.833"
              imag={img4}
            ></Card>
            <Card
              header="Plastic Action: For a Better Environment"
              location="Pinrang, Sulawesi Selatan"
              Num="Collected : Rp. 81.221.991"
              imag={img5}
            ></Card>
            <Card
              header="No Plastic, No Limits: A Movement for Change"
              location="Surabaya, Jawa Timur"
              Num="Collected : Rp.19.438.833"
              imag={img6}
            ></Card>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Donasi;
