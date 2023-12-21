import React from "react";
import "../assets/style/style.css";

function BannerEdukasi() {
  return (
    <div>
      <div className="bgEdukasi1 flex">
        <p className=" text-white text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-center m-auto">
          Getting <span className="yellow">Started</span> <br />{" "}
          <span className="yellow">Loving</span> the Environment <br />{" "}
          <span className="yellow">The Clean</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center"></div>
    </div>
  );
}

export default BannerEdukasi;
