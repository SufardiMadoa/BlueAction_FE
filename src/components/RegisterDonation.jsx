// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Gambar1 from '../asset/login1.png'
import { NavLink, Link } from 'react-router-dom'

const RegisterDonation = () => {
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

  return (
    <div className='flex flex-col justify-center item-center h-fit bg-[#fafafa] py-20'>
        <div className='w-[30%] sm:w-[15%] mx-auto'> 
            <img src={Gambar1} alt="login" className=' z-10 block relative mx-auto w-full  rounded-full' />
        </div>
        <div className='z-0 relative mx-auto bg-[#06253a] text-white  sm:w-[50%] w-[80%] rounded-[20px] px-10 pb-10 -mt-[50px] sm:-mt-[90px]'>
            <h1 className='flex justify-center pt-[100px] mx-auto text-3xl pb-10 font-[600]'>Registration</h1>
           {/* batas  */}
        <form onSubmit={handleSubmit}>
        {/* username */}
        <label >Username:</label>
        <input 
          className="block w-full flex-1 my-3 bg-white rounded-lg  border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {/* Full Name */}
        <label>Full Name:</label>
        <input 
          className="block w-full flex-1 my-3 bg-white rounded-lg  border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="text"
          id="fullName"
          name="fullName"
          placeholder="full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        {/* Email Address */}
        <label >Email Address: </label>
        <input 
          className="block w-full flex-1 my-3 bg-white rounded-lg  border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <label >Password:</label>
        <input 
          className="block w-full flex-1 my-3 bg-white rounded-lg  border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Confirm Password */}
        <label>Confirm Password:</label>
        <input 
          className="block w-full flex-1 my-3 bg-white rounded-lg  border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
            <p className='mt-4'>Do you have account ? <NavLink to="/login" className='font-bold'> Log in </NavLink> </p>
            <Link to="/Donation/Register/Form" ><button type='submit' className='bg-orange-600 w-full py-4 rounded-xl my-6'>Register</button></Link>
        </form>
        </div>
    </div>
  )
}

export default RegisterDonation