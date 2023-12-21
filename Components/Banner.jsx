import React from "react";
import "./assets/Style/style.css";

function Banner() {
  return (
    <div>
      <div className="  py-14 px-4 sm:px-10 md:px-10 lg:px-10">
        <div className="flex justify-end flex-col pb-10 bg text-white px-4 pt-72 ">
          <h2 className=" text-2xl lg:text-3xl text-white md:text-3xl sm:text-2xl lg:px-14 md:px-14 sm:px-4 ">
            Help Free Rivers from Plastic Pollution
          </h2>
          <div className="w-4/5">
            <p className="mt-5 sm:text-sm md:text-sm lg:text-base lg:px-14 md:px-14 sm:px-4">
              Help us clean the river from plastic waste with your donation.
              Your support will be donate{" "}
              <span className=" hidden sm:hidden md:inline lg:inline">
                used for cleaning equipment and awareness campaigns. Together,
                let's protect our environment and nature. Donate now!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
