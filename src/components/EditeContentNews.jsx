// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'


const EditeContentNews = () => {
  return (
    <div className='flex flex-col justify-center item-center h-fit bg-[#fafafa] py-20 max-w-[1280px] mx-auto'>
    <div className='bg-[#FD972A] py-[20px] sm:px-[100px] px-10 text-black w-fit rounded-xl text-3xl font-semibold my-10 mx-auto'>
        EDITE
    </div>
    <form className='mx-auto bg-[#06253a] text-white  sm:w-[80%] w-[80%] rounded-[20px] p-10 '>
        
    
    <label>Title</label>
        <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block w-full flex-1 bg-white rounded-lg  border-0 bg-transparent my-3 py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="username"
              />

    <div>
        <label>Description</label>
            <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    className="block w-full flex-1 bg-white rounded-lg  border-0 bg-transparent my-3 py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="password"
                />
    </div>

    <div>
          <label>
            Upload Image
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white px-6 py-10">
            <div className="text-center">
             
              <div className="mt-4 flex text-sm leading-6 text-gray-200">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span className='px-5'>Upload a file</span>
                  <input 
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-200">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center my-5 gap-3'>
            <Link to='/news'>
            <button type="button" className="rounded-md px-7 py-2 text-xl font-semibold text-white bg-[#F92330]">
                Cancel
            </button>
            </Link>
            <button
                type="submit"
                className="rounded-md px-7 py-2 text-xl font-semibold text-white bg-[#21CA46]"
              >
                Save
            </button>
          </div>

    
    </form>
   
</div>
  )
}

export default EditeContentNews