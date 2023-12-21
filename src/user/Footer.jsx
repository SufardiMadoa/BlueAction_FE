import { Button } from "@material-tailwind/react";
// import React from "react";
import logo from "../Images/Blue Action.png";
import logoIG from "../Images/logoIG.png";
import logoFB from "../Images/logoFB.png";
import logoX from "../Images/logoX.png";

function Footer() {
  return (
    <div>
      <div className="bg-[#06253a]">
        <div className=" box-border gap-x-24  text-white grid py-14  grid-rows-1 sm:grid-rows-1 md:grid-cols-3 lg:grid-cols-3 sm:px-6 md:px-6 lg:px-6">
          <div>
            <div className="flex  items-center">
              <img src={logo} alt="" />
              <p className=" font-bold text-base ">Blue Action</p>
            </div>
            <p className="mt-4 text-gray-400  ml-3">
            Masyarakat Tanpa Limbah Plastik
            </p>
            <ul className="flex w-48 mt-4 ml-3  justify-between ">
              <li>
                <img src={logoIG} alt="" />
              </li>
              <li>
                <img src={logoFB} alt="" />
              </li>
              <li>
                <img src={logoX} alt="" />
              </li>
            </ul>
          </div>
          <div className="lg:px-10">
            <h1 className="font-bold text-base ml-3 mt-4 sm:mt-4 md:mt-0 lg:mt-0">
              About Us
            </h1>
            <ul className="mt-4 text-gray-400 ml-3 ">
              <li>frontrunners</li>
              <li>Mission & Vision</li>
              <li>Working With Us</li>
              <li>Annual Reports</li>
              <li>Inquiries Press</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-base mt-4 ml-3 sm:mt-4 md:mt-0 lg:mt-0">
              Newsletter
            </h1>
            <p className="mt-4 text-gray-400 ml-3">
              Enter your email and we will send you our detailed activities
            </p>
            <input
              type="text"
              style={{
                height: "40px",
                // width: "200px",
                border: "1px solid black",
                color: "black",
                padding: "15px",
              }
           } placeholder="Write your Email here"
              className="w-full mt-2 rounded-md "
            />
            <br></br>
            <div className="flex justify-end">
              <Button color="red" className="me-0 mt-3 bg-red-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "93%",
            marginLeft: "30px",
          }}
        ></hr>
        <div className="pt-4 pb-7">
          <p className="px-10 mt-2 text-gray-400 text-sm">
            2023 Blue Action. All Right Reserved | Legal | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
