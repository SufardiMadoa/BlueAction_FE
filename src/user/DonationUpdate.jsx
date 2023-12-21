import React from "react";
import "../style/style.css";
import { Button, Typography } from "@material-tailwind/react";
import Input from "../../Components/Input";
import InputDate from "../../Components/InputDate";
import TextArea from "../../Components/TextArea";

function DonationUpdate() {
  return (
    <div>
      <div className="bgForm text-white py-14">
        <h1 className=" text-center mb-10 text-3xl text-black font-bold">
          UPDATE
        </h1>
        <div className="w-2/4 h-2/6 m-auto  bg-white rounded-xl">
          <div className="px-14 py-14 text-black">
            <Typography className="mb-4 font-semibold">Theme</Typography>
            <div className="mb-4 ">
              <Input className=""></Input>
            </div>
            <Typography className="mb-4 font-semibold">Date</Typography>
            <div className="mb-4 ">
              <InputDate></InputDate>
            </div>
            <Typography className="mb-4 font-semibold">Location</Typography>
            <div className="mb-4">
              <Input></Input>
            </div>
            <Typography className="mb-4 font-semibold">Attach File</Typography>
            <div className=" mb-4">
              <Button className="bg-maincolor">Choose Image </Button>
            </div>
            <Typography className="mb-4 font-semibold">Description</Typography>
            <div>
              <TextArea></TextArea>
            </div>
            <div className="flex justify-between">
              <Button className="mt-5 bg-maincolor text-black"> Update</Button>
              <Button className="mt-5 bg-maincolor text-black"> Cancel </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationUpdate;
