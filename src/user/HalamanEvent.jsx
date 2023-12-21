// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";
// import React from "react";
import "./../index.css";
// import { Button, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
// import Heading from './Heading'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import { navigate } from 'react-router-dom';

import imgEvents1 from "../Images/event1.png";
import imgEvents2 from "../Images/event2.png";
import imgEvents3 from "../Images/event3.png";
import imgEvents4 from "../Images/event4.png";
import imgEvents5 from "../Images/event5.png";
import imgEvents6 from "../Images/event6.png";
import Heading from "./Heading";

export default function HalamanEvent() {
  return (
    <>
      <Heading />
      <div className="  bg-[url('bg-event.png')] bg-blend-color-dodge bg-fixed bg-center bg-cover">
        <div className="flex justify-center ">
          <Nb />
        </div>
        <div className="flex w-full pl-2 justify-center"></div>
        <div className="flex flex-wrap justify-around align-center">
          <Card />
        </div>
      </div>
      <div className=" bg-[url('bg-documentation.png')]"></div>
    </>
  );
}
function Nb() {
  return (
    <>
      <h2 className="bg-blue-700 py-1 px-12 rounded-lg text-3xl font-semibold text-gray-50 my-2">
        Events Upcoming
      </h2>
    </>
  );
}

function Card() {
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div className="max-w-sm mx-5 relative shadow-md rounded-lg cursor-pointer my-5  w-8/12">
        <Link to="/Event/EventContent">
          <img
            src={imgEvents1}
            alt="Img by Meriç Dağlı https://unsplash.com/@meric"
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
        <div className="absolute bottom-0 left- right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
          <h1 className="text-2xl font-semibold">Aksi Bersama</h1>
          <p className="mt-2">
            Mengatasi Krisis Limbah Plastik dalam Upaya Konservasi Lingkungan
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-5 relative shadow-md rounded-lg cursor-pointer my-5  w-8/12">
        <Link to="/Event/EventContent">
          <img
            src={imgEvents2}
            alt="Img by Meriç Dağlı https://unsplash.com/@meric"
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
        <div className="absolute bottom-0 left- right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
          <h1 className="text-2xl font-semibold">Menuju Dunia Bebas Plastik</h1>
          <p className="mt-2">
            Event Inspiratif untuk Mengurangi Pencemaran Plastik
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-5 relative shadow-md rounded-lg cursor-pointer my-5  w-8/12">
        <Link to="/Event/EventContent">
          <img
            src={imgEvents3}
            alt="Img by Meriç Dağlı https://unsplash.com/@meric"
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
        <div className="absolute bottom-0 left- right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
          <h1 className="text-2xl font-semibold">Inovasi Ramah Lingkungan</h1>
          <p className="mt-2">
            Event Pengelolaan Limbah Plastik demi Masa Depan Berkelanjutan
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-5 relative shadow-md rounded-lg cursor-pointer my-5  w-8/12">
        <Link to="/Event/EventContent">
          <img
            src={imgEvents4}
            alt="Img by Meriç Dağlı https://unsplash.com/@meric"
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
        <div className="absolute bottom-0 left- right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
          <h1 className="text-2xl font-semibold">
          Meretas Polusi Plastik{" "}
          </h1>
          <p className="mt-2">
          Komunitas Bersatu untuk Aksi Nyata dengan semangat membasmi sampah"
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-5 relative shadow-md rounded-lg cursor-pointer my-5  w-8/12">
        <Link to="/Event/EventContent">
          <img
            src={imgEvents5}
            alt="Img by Meriç Dağlı https://unsplash.com/@meric"
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
        <div className="absolute bottom-0 left- right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
          <h1 className="text-2xl font-semibold">
            Tanpa Plastik, Lebih Baik!{" "}
          </h1>
          <p className="mt-2">
            Event Edukasi dan Aksi Lingkungan untuk Mengurangi Penggunaan
            Plastik Sekaligus Memotivasi Perubahan
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-5 relative shadow-md rounded-lg cursor-pointer my-5  w-8/12">
        <Link to="/Event/EventContent">
          <img
            src={imgEvents6}
            alt="Img by Meriç Dağlı https://unsplash.com/@meric"
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
        <div className="absolute bottom-0 left- right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
          <h1 className="text-2xl font-semibold">Jalur Hijau</h1>
          <p className="mt-2">
            Event Ramah Lingkungan untuk Meminimalkan Dampak Limbah Plastik di
            Masyarakat
          </p>
        </div>
      </div>
    </>
  );
}
