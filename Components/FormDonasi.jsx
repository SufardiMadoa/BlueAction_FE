import React from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import { NavLink, Link } from 'react-router-dom'
function FormDonasi() {
  return (
    <div >
      <div className=" px-14 py-10 ">
        <Typography className="mb-4 font-semibold">Your Name</Typography>
        <div className="mb-4">
          <Input label="Name" size="lg" />
        </div>
        <Typography className="mb-4 font-semibold">Email</Typography>
        <div className="mb-4">
          <Input label="Email" size="lg" />
        </div>
        <Typography className="mb-4 font-semibold">Phone Number</Typography>
        <div className=" mb-4">
          <Input label="Phone Number" size="lg" />
        </div>
        <Typography className="mb-4 font-semibold">Donation Amount</Typography>
        <div>
          <Input label="Donation Amount" size="lg" />
        </div>
        <Link to="/Donation/Register/Form/bayar">
        <Button className="mt-5 bg-maincolor "> Confirmation </Button>
        </Link>
      </div>
     
    </div>
  );
}

export default FormDonasi;
