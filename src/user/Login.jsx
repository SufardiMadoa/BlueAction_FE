// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import Gambar1 from '../asset/login1.png'
import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import { faGoogle } from "@fortawesome/free-solid-svg-icons";


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000', {'method': 'GET'});
    const user = await res.json();
    if(username == user[0].username && password == user[0].password){
      if(user[0].role == 0)
      {
      alert("username dan password benar. Berhasil Login!!");
      window.location.href = "/home"; // pindah halaman tapi reload
    }
    else if(user[0].role == 1){
      alert("username dan password benar. Berhasil Login!! dihallaman admin");
      window.location.href = "/admin";
    }
      // router push (untuk pindah halaman tanpa reload)
    }else {
      alert("username dan password salah. coba lagi!!");
    }
}
  return (
    <div className='flex flex-col justify-center item-center h-fit bg-[#fafafa] py-20 max-w-[1280px] mx-auto'>
        <div className='w-[30%] sm:w-[15%] mx-auto'> 
        <img src={Gambar1} alt="login" className=' z-10 block relative mx-auto w-full  rounded-full' />
        </div>
        <form onSubmit={handleSubmit} className='z-0 relative mx-auto bg-[#06253a] text-white  sm:w-[50%] w-[80%] rounded-[20px] px-10 pb-10 -mt-[50px] sm:-mt-[90px]'>
            <h1 className='flex justify-center pt-[100px] mx-auto text-3xl pb-10 font-[600]'>Log in</h1>
        
        <label>username</label>
            <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block w-full flex-1 bg-white rounded-lg  border-0 bg-transparent my-3 py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
        
        <label>password</label>
            <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    className="block w-full flex-1 bg-white rounded-lg  border-0 bg-transparent my-3 py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
 
            <p className='mt-4'>create account ? <NavLink to='/register' className='font-bold'> Register </NavLink> </p>
            <button type='submit' className='bg-sky-500 w-full py-4 rounded-xl my-6'>log in</button>
            <div className='flex flex-col w-full'>
                <p className='mx-auto'>or sign up with </p>
                <button className='mx-auto flex gap-2 bg-white text-black items-center py-2 px-6 my-3 rounded-md w-fit'>
                
                <img src={Gambar1} width={30} alt="google" />
                <p>login with google</p>
                </button>
               
            </div>
        </form>
       
    </div>
  )
}

export default Login