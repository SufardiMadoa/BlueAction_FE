import React, { useState } from 'react';
import Gambar1 from '../asset/login1.png';
import { NavLink, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const validateForm = () => {
    // ... (sama seperti yang Anda miliki sebelumnya)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle login success
        // ...
      } else {
        // Handle login failure
        // ...
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
      });
    }
  };



  
 

  return (
    <div className="flex flex-col justify-center items-center h-fit bg-[#fafafa] py-20 max-w-[1280px] mx-auto">
      <div className="w-[30%] sm:w-[15%] mx-auto">
        <img src={Gambar1} alt="login" className="z-10 block relative mx-auto w-full rounded-full" />
      </div>
      <form onSubmit={handleSubmit} className="z-0 relative mx-auto bg-[#06253a] text-white sm:w-[50%] w-[80%] rounded-[20px] px-10 pb-10 -mt-[50px] sm:-mt-[90px]">
        <h1 className="flex justify-center pt-[100px] mx-auto text-3xl pb-10 font-[600]">Log in</h1>

        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="username"
          className="block w-full flex-1 bg-white rounded-lg border-0 bg-transparent my-3 py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          className="block w-full flex-1 bg-white rounded-lg border-0 bg-transparent my-3 py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <p className="mt-4">
          Create account?{' '}
          <NavLink to="/register" className="font-bold">
            Register
          </NavLink>
        </p>
        <button className="bg-[#2171b7] w-full py-4 rounded-xl my-6">
          Log in
        </button>
        <div className="flex flex-col w-full">
          <p className="mx-auto">or sign up with</p>
          <button type="submit" className="mx-auto flex gap-2 bg-white text-black items-center py-2 px-6 my-3 rounded-md w-fit">
            <img src={Gambar1} width={30} alt="google" />
            <p>Login with Google</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;