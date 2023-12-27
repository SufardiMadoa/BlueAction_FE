import { useState } from "react";
// import Heading from "./Heading";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const EventInput = () => {
  const [events, setEvents] = useState({
    title: "",
    date: null,
    session: "",
    time_start: null,
    time_end: null,
    location: "",
    image: null,
    deskripsi: "",
  });

const navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.type === "file") {
      // Handle file input
      setEvents((prev) => ({ ...prev, image: e.target.files[0] }));
    } else {
      // Handle other inputs
      setEvents((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleClick =async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/event", events)
      navigate("/")
    } catch (err) {
      console.log(err)
      
    }
    Swal.fire({
      border:"solid",
      position: "top",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

 

  return (
    <>
      <div className="flex items-center justify-center p-12 bgForm bg-blend-color-dodge bg-fixed bg-center bg-cover">
        <div className="mx-auto w-full max-w-[650px] bg-white px-10 py-5 rounded-lg">
          <h1 className="text-center mb-10 text-3xl text-black font-bold">
            UPLOAD
          </h1>
          <form >
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="theme"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Theme
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="title"
                    id="theme"
                    placeholder="Them"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                   
                  />
                </div>
              </div>
              <div className="mb-5 pl-3">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="session"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Session
              </label>
              <select
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                id="session" // Tambahkan id sesuai dengan label htmlFor
                onChange={handleChange}
                name="session" // Tambahkan name sesuai dengan data yang diinginkan
              >
                <option value="" disabled>
                  Select Session
                </option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="timeStart"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time Start
                  </label>
                  <input
                    type="time"
                    name="timeStart"
                    id="timeStart"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5 pl-3">
                  <label
                    htmlFor="timeEnd"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time End
                  </label>
                  <input
                    type="time"
                    name="timeEnd"
                    id="timeEnd"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="location"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleChange}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-5">
              <label
                htmlFor="image"
                className="block text-base font-medium text-[#07074D] mb-3 mt-5"
              >
                Upload File
              </label>
              <label
                htmlFor="image"
                className="cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                  Event File
                </h2>

                <p className="mt-2 text-gray-500 tracking-wide">
                  Upload or drag & drop your file SVG, PNG, JPG, or GIF.
                </p>

                <input
                  id="image"
                  type="file"
                  onChange={handleChange}
                  className="hidden"
                />

                <label
                  htmlFor="image"
                  className="mt-2 text-gray-500 tracking-wide cursor-pointer border border-[#e0e0e0] bg-white py-3 px-6 w-full rounded-md text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  Choose a File
                </label>
              </label>
            </div>

            <div className="flex justify-around">
              <Link to="/Event">
                <button className="hover:shadow-form rounded-md bg-[#F92330] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Cancel
                </button>
              </Link>
              <Link  to="/Event" >
                <button 
                  onClick={handleClick}
                  className="hover:shadow-form rounded-md bg-[#21CA46] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventInput;
