import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function HalamanEvent() {
  const [cards, setCards] = useState([
    { title: "Nature Image", content: "This is a beautiful nature image placeholder." },
  ]);

  const [formData, setFormData] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const add = () => {
    navigate('/Event/Input');
  }
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (formData.title && formData.content) {
      setCards([...cards, formData]);
      setFormData({ title: "", content: "" });
    }
  };

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
      <div>
          <button onClick={add} className="hover:shadow-form rounded-md bg-[#21CA46] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Add Content
          </button>
        <div className="flex flex-wrap justify-around align-center">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </>
  );
}

function Card({ title, content, handleClick }) {
  return (
    <div className="max-w-sm mx-5 relative shadow-md rounded-lg cursor-pointer my-5  w-8/12">
      <Link to="/Event/EventContent">
        <img
          src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Nature"
          className="w-full h-auto object-cover rounded-lg"
        />
      </Link>
      <div className="absolute bottom-0 left- right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-2">{content}</p>
        <div className="flex justify-end">
          <h2 className="text-3xl mr-3">
            <Link to="/Event/update">
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
          </h2>
          <h2 className="text-3xl" onClick={handleClick}>
            <FontAwesomeIcon icon={faTrashCan} />
          </h2>
        </div>
      </div>
    </div>
  );
}
