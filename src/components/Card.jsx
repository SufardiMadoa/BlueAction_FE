import React from "react";

function Card({ imag, header, Num, location }) {
  return (
    <>
      <div className=" px-4 h-full shadow-xl rounded-xl mb-4 text-left  ">
        <div className="bg-center bg-cover rounded-xl drop-shadow-xl mt-2 mb-8 ">
          <img
            src={imag}
            className="rounded-xl drop-shadow-xl w-full lg:h-52 md:h-40  "
          />
        </div>
        <div className="h-16">
          <p className=" lg:text-base text-sm font-medium">{header}</p>
        </div>
        <p className="mt-3 text-gray-700 lg:text-base text-sm ">{location}</p>
        <p className="lg:mt-10 md:mt-5 mt-5 lg:text-base text-sm">{Num}</p>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => navigate("/Form")} />
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => navigate("/Form")} />
      </div>
    </>
  );
}

export default Card;
