import { Button } from "@material-tailwind/react";
import React from "react";

function Alert() {
  return (
    <div>
      <div className="w-96 p-10 relative  bg-white">
        <p className="text-center">Do you want delete a post?</p>
        <div className="flex justify-center mt-4">
          <Button color="red" className="me-5">
            Yes
          </Button>
          <Button color="green">No</Button>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute top-0 right-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}

export default Alert;
