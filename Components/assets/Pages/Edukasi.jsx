import React from "react";
import BannerEdukasi from "../../Components/BannerEdukasi";
import "../style/style.css";
import { Button } from "@material-tailwind/react";

function Edukasi() {
  return (
    <div>
      <BannerEdukasi></BannerEdukasi>
      <div className="flex justify-center">
        <Button
          color="blue"
          className="m-auto w-4/12 sm:w-4/12 sm:text-base lg:w-3/12 mt-10 text-xs mb-10 "
        >
          NEWS
        </Button>
      </div>
      <div className="flex flex-wrap gap-6  justify-center sm:flex">
        <div className=" relative w-80 h-80 border card-1 rounded-xl">
          <div className="absolute bottom-0 text-white bg-opacity p-3">
            Governor Khofifah Indar Parawansa Fights Plastic Waste, Calls the
            Arjuno Mountain Fire Human Act
          </div>
        </div>
        <div className=" relative w-80 h-80 border card-2 rounded-xl">
          <div className="absolute bottom-0 text-white bg-opacity p-3">
            Governor Khofifah Indar Parawansa Fights Plastic Waste, Calls the
            Arjuno Mountain Fire Human Act
          </div>
        </div>
        <div className=" relative w-80 h-80 border card-3 rounded-xl">
          <div className="absolute bottom-0 text-white bg-opacity p-3">
            Governor Khofifah Indar Parawansa Fights Plastic Waste, Calls the
            Arjuno Mountain Fire Human Act
          </div>
        </div>
        <div className=" relative w-80 h-80 border card-4 rounded-xl">
          <div className="absolute bottom-0 text-white bg-opacity p-3">
            Governor Khofifah Indar Parawansa Fights Plastic Waste, Calls the
            Arjuno Mountain Fire Human Act
          </div>
        </div>
        <div className=" relative w-80 h-80 border card-5 rounded-xl">
          <div className="absolute bottom-0 text-white bg-opacity p-3">
            Governor Khofifah Indar Parawansa Fights Plastic Waste, Calls the
            Arjuno Mountain Fire Human Act
          </div>
        </div>
        <div className=" relative w-80 h-80 border card-6 rounded-xl">
          <div className="absolute bottom-0 text-white bg-opacity p-3">
            Governor Khofifah Indar Parawansa Fights Plastic Waste, Calls the
            Arjuno Mountain Fire Human Act
          </div>
        </div>

        <div className=" relative w-80 h-80 border card-7 rounded-xl">
          <div className="absolute bottom-0 text-white bg-opacity p-3">
            Governor Khofifah Indar Parawansa Fights Plastic Waste, Calls the
            Arjuno Mountain Fire Human Act
          </div>
        </div>
        <div className=" relative w-80 h-80 border card-8 rounded-xl">
          <div className="absolute bottom-0 text-white bg-opacity p-3">
            Governor Khofifah Indar Parawansa Fights Plastic Waste, Calls the
            Arjuno Mountain Fire Human Act
          </div>
        </div>
        <div className=" relative w-80 h-80 border card-9 rounded-xl">
          <div className="absolute bottom-0 text-white bg-opacity p-3">
            Governor Khofifah Indar Parawansa Fights Plastic Waste, Calls the
            Arjuno Mountain Fire Human Act
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edukasi;
