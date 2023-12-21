import React from "react";
import DonasiForm from "../../Components/FormDonasi";
import "../Asset/style1.css";
import Banner from "../../Components/Banner";

function FormDonasi() {
  return (
    <div>
        {/* <Banner></Banner> */}
      <div className="py-14 px-4">
        <Banner></Banner>
      </div>
      <div className="bgFormDonasi mt-14 py-14 px-4"> 
        <div className="w-full h-2/6 sm:w-4/6 md:w-4/6 lg:w-4/6 m-auto  bg-white -z-50 rounded-xl ">
        <DonasiForm/>
        </div>
      </div>
    </div>
  );
}

export default FormDonasi;
