import { Button } from "@material-tailwind/react";
import React from "react";

function FormEdukasi({ btn, h1, content1, content2 }) {
  return (
    <div>
      <div className="p-2 w-full sm:p-2 md:p-10 lg:p-10 sm:w-full md:w-3/5 lg:w-3/5 m-auto relative ">
        <Button
          color="green"
          className="absolute top-0 left-0 ml-2 sm:ml-2 md:ml-12 lg:ml-12 my-4"
        >
          {btn ? btn : "Update"}
        </Button>
        <div className=" bg-black w-full h-full m-auto text-white px-14 py-14 mt-16 sm:mt-16 md:mt-10 lg:mt-10">
          <p className="mb-2">{h1 ? h1 : "Update"} Image</p>
          <div className="border-dashed border-2 border-sky-500 py-20 grid justify-center text-xs ">
            <p className="mb-1">Select Image Here</p>
            <p className="mb-1">File Supported :.jpg,.png,jpeg</p>
            <Button>Confirm</Button>
          </div>
          <h2 className="mt-2">{content1 ? content1 : "Update"} Tittle</h2>
          <input
            type="text"
            className="w-full bg-white"
            style={{ color: "black", height: "33px" }}
          />
          <h2 className="mt-2">
            {content2 ? content2 : "Update"} Main Content
          </h2>
          <input
            type="text"
            className="w-full bg-white"
            style={{ color: "black", height: "33px" }}
          />
          <div className="mt-3 sm:block md:flex lg:flex justify-between ">
            <Button
              color="red"
              className="w-full mt-2 sm:w-full md:w-4/12 lg:w-4/12 h-12 mb-2"
            >
              Reset
            </Button>
            <Button
              color="green"
              className="w-full sm:w-full md:w-4/12 lg:w-4/12 h-12 mb-2"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormEdukasi;
