import React from "react";
import "../assets/style/style.css";
import { Button, Typography } from "@material-tailwind/react";
import Input from "./Input";
import InputDate from "./InputDate";
import TextArea from "./TextArea";

function FormAdmin({ btn, tittle }) {
  return (
    <div>
      <div className="bgForm text-white py-14">
        <h1 className=" text-center mb-10 text-3xl text-white font-bold">
          {tittle ? tittle : "UPDATE"}
        </h1>
        <div className="px-5 md:px-0 lg:px-0">
          <div className="w-full md:w-2/4 md:h-2/6 lg:w-2/4 lg:h-2/6 m-auto  bg-white rounded-xl">
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
              <Typography className="mb-4 font-semibold">
                Attach File
              </Typography>
              <div className=" mb-4">
                <Button className="bg-maincolor w-full sm:w-full md:w-36 lg:w-36">
                  Choose Image{" "}
                </Button>
              </div>
              <Typography className="mb-4 font-semibold">
                Description
              </Typography>
              <div>
                <TextArea></TextArea>
              </div>
              <div className="block sm:block md:block lg:flex justify-between sm:w-full">
                <Button className="w-full sm:w-full md:w-full lg:w-36 mt-5 bg-maincolor">
                  {" "}
                  {btn ? btn : "UPDATE"}
                </Button>
                <Button className="w-full sm:w-full md:w-full lg:w-36 mt-5 bg-maincolor">
                  {" "}
                  Reset{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAdmin;
