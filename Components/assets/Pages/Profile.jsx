import React from "react";
import img1 from "../Images/profile.png";
import check from "../Images/checklist.png";
import "../style/style.css";
import { Button } from "@material-tailwind/react";
import InputData from "../../Components/Input";

function Profile() {
  return (
    <div>
      <div className="bgProfile pt-12 px-5 lg:px-20 flex flex-wrap justify-between md:px-20 ">
        <div className="w-full bg-white h-96 rounded-lg lg:w-96 lg:me-10 md:w-80 md:me-10">
          <div className="grid justify-center">
            <img
              src={img1}
              alt=""
              className="w-24 ms-10 mt-3 lg:w-52 lg:ms-4 md:w-52 md:ms-4"
            />
            <p className=" text-blue-gray-400 text-center mb-8">username</p>
            <h1 className=" text-sm text-center lg:text-2xl font-extrabold">
              Jack Kahuna Laguna
            </h1>
            <p className="text-center text-sm font-bold">
              Signed Up On July 2023
            </p>
          </div>
        </div>
        <div className=" bg-white mt-10 w-full  border border-black p-6 relative rounded-lg lg:w-2/4 lg:mt-0 md:w-2/4 md:mt-0">
          <p className="text-2xl font-bold mb-5">Personal Information</p>
          <div className="flex justify-between flex-wrap gap-4 mb-8">
            <div className="w-full w-full lg:w-full md:w-full sm:w-full">
              <p>Name</p>
              <InputData></InputData>
            </div>
            <div className="w-full lg:w-full md:w-full sm:w-full">
              <p>Email</p>
              <InputData></InputData>
            </div>
            <div className="w-full lg:w-full md:w-full sm:w-full">
              <p>Username</p>
              <InputData></InputData>
            </div>
            <div className="w-full lg:w-full md:w-full sm:w-full">
              <p>Address</p>
              <InputData></InputData>
            </div>
          </div>
          <div className="block lg:flex">
            <Button color="green" className="me-3 block w-full md:w-full">
              Save
            </Button>
            <Button
              color="red"
              className="me-3 mt-3 block w-full lg:mt-0 md:w-full"
            >
              Reset
            </Button>
          </div>
          <div></div>
        </div>
        <div className="w-full mt-10 p-10 bg-white rounded-lg ">
          <p className="text-2xl font-bold mb-5">Donate History</p>
          <span className="flex">
            <img src={check} alt="" className="-ml-5" />
            <p className=" text-sm">Plant 1 Tree for the Future.</p>
          </span>
          <InputData></InputData>
          <span className="flex mt-5">
            <img src={check} alt="" className="-ml-5" />
            <p className=" text-sm">Free Indonesia from Plastic Waste.</p>
          </span>
          <InputData></InputData>
          <span className="flex mt-5">
            <img src={check} alt="" className="-ml-5" />
            <p className=" text-sm">Efforts to Recycle Waste Usable </p>
          </span>
          <InputData></InputData>
          <p className="mt-5 text-sm">Total Donate</p>
          <InputData></InputData>
          <Button color="green" className="mt-5">
            Lets Go Donate
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
