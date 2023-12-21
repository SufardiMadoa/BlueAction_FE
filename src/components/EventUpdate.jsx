
import React from "react";
import Heading from './Heading'
import { Link } from 'react-router-dom';
export default function EventUpdate() {
  return (
    <>
   
    
    <div class="flex items-center justify-center p-12 bgForm bg-blend-color-dodge bg-fixed bg-center bg-cover">
    
      <div class="mx-auto w-full max-w-[650px] bg-white px-10 py-5 rounded-lg ">
      <h1 className=" text-center mb-10 text-3xl text-black font-bold">
          UPDATE
        </h1>
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="fName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Theme
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="theme"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="mb-5 pl-3">
              <label
                for="date"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          {/* city */}
          <div class="w-full px-0 sm:w-1/2">
            <div class="mb-5 pr-3">
              <label
                for="fName"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Session
              </label>
              <select class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Sci-fi">Ofline</option>
                <option value="Drama">Online</option>
              </select>
            </div>
          </div>

          {/* time */}
          <div class="w-full px-0 sm:w-1/2 border border-[#e0e0e0] ">
            <div class="mb-5 px-2">
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="time"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time Start
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      class="w-30 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div class="w-full px-0 sm:w-1/2">
                  <div class="mb-5 pl-3">
                    <label
                      for="time"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time End
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      class="w-30 rounded-md border border-[#e0e0e0] bg-white py-3  px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <label
                  for="fName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Location"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <label
            for="fName"
            class="mb-3 mt-5 block text-base font-medium text-[#07074D]"
          >
            Upload File
          </label>
          <label
            for="dropzone-file"
            class="my-3 cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>

            <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">
              Event File
            </h2>

            <p class="mt-2 text-gray-500 tracking-wide">
              Upload or drag & drop your file SVG, PNG, JPG, or GIF.
            </p>

            <input id="dropzone-file" type="file" class="hidden" />
          </label>

          <div class="mb-5">
            <label
              for="guest"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Description
            </label>
            <div class="mt-2">
              <textarea
                id="about"
                name="about"
                rows="3"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
          </div>

          <div class="mb-5">
            
            <div class="flex items-center space-x-6"></div>
          </div>

          <div className="flex justify-around">
          <Link to="/Event" >
            <button class="hover:shadow-form rounded-md bg-[#F92330] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Cancel
            </button>
          </Link>
            <button class="hover:shadow-form rounded-md bg-[#21CA46] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
