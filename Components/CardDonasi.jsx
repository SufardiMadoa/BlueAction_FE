import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';

const handleClick = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}


function CardDonasi({ imag, header, Num, location }) {
  return (
    <>
    <Link to="/Donation/Register">
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
        
      </div>
      </Link>
    </>
  );
}

export default CardDonasi;
