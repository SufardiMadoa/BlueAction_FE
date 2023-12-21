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
import { useState, useEffect } from "react";
import axios from "axios";

export default function HalamanEvent() {
  return (
    <>
      {/* <Heading /> */}
      <div className="  bg-[url('bg-event.png')] bg-blend-color-dodge bg-fixed bg-center bg-cover">
        <div className="flex justify-center ">
          <Nb />
        </div>
        <div className="flex w-full pl-2 justify-center">
          <Link to="/Event/Input">
            <button className="hover:shadow-form rounded-md bg-[#21CA46] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Add Content
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-around align-center">
          <Card />
        </div>
      </div>
      <div className=" bg-[url('bg-documentation.png')]">
        <div className="flex justify-center ">
          <Nb2 />
        </div>
        <div className="flex flex-wrap justify-around align-center">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
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
function Nb2() {
  return (
    <>
      <h2 className="bg-blue-700  py-1 px-12 rounded-lg text-3xl font-semibold text-gray-50 my-2">
        Events Sucesfully
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

  const [event, setCard] = useState([]);

  useEffect(() => {
    const fetchAllEvent = async () => {
      try {
        const hasil = await axios.get("http://localhost:8800/event");
        console.log(hasil);
        setCard(hasil.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllEvent();
  }, []);


  return (
    <>
          {event.map((tes) => (
        <div
          className="max-w-sm mx-5 relative shadow-md rounded-lg cursor-pointer my-5  w-8/12"
          key={tes.id_event}
        >
          <div className="max-w-sm mx-5 relative shadow-md rounded-lg cursor-pointer my-5  w-8/12">
            <>
              <Link to="/Event/EventContent">
                {tes.image && (
                  <img
                    src={`http://localhost:8800/images/${tes.image}`}
                    alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                )}
              </Link>
              <div className="absolute bottom-0 left- right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 className="text-2xl font-semibold">{tes.title}</h1>
                <p className="mt-2">{tes.deskripsi}</p>
              </div>
            </>
          </div>
          <div className="flex justify-end">
        <h2 className="text-3xl mr-3">
          <Link to="/admin/Event/update">
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
        </h2>
        <h2 className="text-3xl">
          <FontAwesomeIcon icon={faTrashCan} onClick={handleClick} />
        </h2>
      </div>
        </div>
      ))}
     
    </>
  );
}

function Card2() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="mb-6 relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36"
        onClick={() => navigate("/Form")}
      >
        <img
          className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80"
        />
        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
          <div className="absolute w-full flex place-content-center">
            <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
              Team work
            </p>
          </div>
          <div className="absolute w-full flex place-content-center mt-20">
            <p className="font-sans text-center w-4/5 text-white mt-5">
              Collaborative effort of a group to achieve a common goal the most
              effective and efficient way!
            </p>
          </div>
          <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
