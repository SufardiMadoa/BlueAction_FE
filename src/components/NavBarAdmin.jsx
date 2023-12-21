// NavBar.jsx
// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState } from 'react';
import LogoBA from '../asset/logoBlueAction.png';
import { FiAlignJustify, FiX, FiChevronDown } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const onScroll = (value) => {
  const element = document.getElementById(value);
  element.scrollIntoView();
};

// eslint-disable-next-line react/prop-types
const NavBar = ( {isLoggedIn, setLoggedIn} ) => {
  const [toggle, setToggle] = useState(false);

  const handleClickk = () => {
    setTimeout(() => {
      onScroll(1);
    }, 200);
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleClickNav = () => {
    setToggle(false);
  };

  const handleLogout = async () => {
    console.log('Logging out...');
    
    try {
      const response = await axios.post('http://localhost:7000/api/logout');
      console.log(response.data);
      setLoggedIn(false);
      Swal.fire({
        icon: 'success',
        title: 'Logout Successful!',
        text: 'You have been logged out successfully.',
      });
    } catch (error) {
      console.error('Error during logout:', error);
      console.error('Server error message:', error.response.data);
    }
  };

  console.log('IsLoggedIn:', isLoggedIn);

  return (
    <div className="text-white text-xl">
      <div className="py-4 sm:py-9 px-6 sm:px-16 bg-[#06253a] sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-between items-center">
          <span>
            <img src={LogoBA} width={50} alt="Logo" />
          </span>
          <span onClick={handleClick}>
            {toggle ? (
              <FiX size={30} className="items-center sm:hidden cursor-pointer" />
            ) : (
              <FiAlignJustify size={30} className="items-center sm:hidden cursor-pointer" />
            )}
          </span>
        </div>
        <ul
          className={
            toggle
              ? 'bg-[#06253a] sm:flex items-center z-[30] sm:z-auto sm:static absolute w-full sm:w-auto left-0 pl-4 p-4 sm:pb-0 sm:pl-0 sm:p-0 sm:opacity-100 '
              : 'items-center z-[-1] sm:z-auto sm:static absolute w-full sm:w-auto left-0 pl-4 p-4 sm:pb-0 sm:pl-0 sm:p-0 sm:opacity-100 hidden sm:flex'
          }
        >
          <li onClick={handleClickNav} className="mx-4 my-3 sm:my-0">
            <NavLink to="/admin">Home</NavLink>
          </li>
          <li onClick={handleClickNav} className="mx-4 my-3 sm:my-0">
            <Link to="/admin" onClick={handleClickk}>
              About us
            </Link>
          </li>
          <li onClick={handleClickNav} className="mx-4 my-3 sm:my-0">
            <NavLink to="/Donation">Donation</NavLink>
          </li>
          <li className="mx-4 my-3 sm:my-0">
            <Menu as="div" className="sm:relative sm:inline-block text-left">
              <Menu.Button className="inline-flex items-center">
                Information
                <FiChevronDown className="w-5 mx-1 text-gray-400" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="sm:absolute sm:z-10 sm:left z-10 right-0 sm:mt-11 w-full sm:w-52 sm:origin-top-right rounded-b-md bg-[#06253a] focus:outline-none">
                  <Menu.Item onClick={handleClickNav}>
                    {({ active }) => (
                      <NavLink
                        to="/newsadmin"
                        className={classNames(
                          active ? 'text-white' : 'text-white',
                          'block px-5 py-3 text-xl border-b-[1px] border-[#575757]'
                        )}
                      >
                        News
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item onClick={handleClickNav}>
                    {({ active }) => (
                      <NavLink
                        to="/Education"
                        className={classNames(
                          active ? 'text-white' : 'text-white',
                          'block px-5 py-3 text-xl border-b-[1px] border-[#575757]'
                        )}
                      >
                        Education
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item onClick={handleClickNav}>
                    {({ active }) => (
                      <NavLink
                        to="/event"
                        className={classNames(
                          active ? 'text-white' : 'text-white',
                          'block px-5 py-3 text-xl '
                        )}
                      >
                        Event
                      </NavLink>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="my-5">
            {!isLoggedIn ? (
              <NavLink
                to="/login"
                onClick={handleClickNav}
                className="text-white mx-4 px-10 py-2 bg-[#EE7A10] rounded-lg hover:bg-slate-700"
              >
                Login
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="text-white mx-4 px-10 py-2 bg-[#ff4040] rounded-lg hover:bg-slate-700"
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;