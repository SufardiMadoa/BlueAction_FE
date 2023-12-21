import { Link } from 'react-router-dom';
// import Event from "./ContentEvent.jsx";

export default function eventDocumentation() {
  return (
    <>
      <div className="flex bg-[url('/patern2.png')] w-full h-72 flex-col justify-end">
        <div className="flex mb-24">
          <p className="mx-9">
          <Link to='/Event/EventContent' class="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-100  px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
            
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
              event
            </Link>
          </p>
          <p>
            <a
              href="#"
              class="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-300 drop-shadow-lg px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
              Documentation
            </a>
          </p>
        </div>
        {/* <div className="flex justify-end mb-2 mr-7">
          <button class="hover:shadow-form rounded-md bg-[#21CA46] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Add image
          </button>
        </div> */}
      </div>

      <div className="p-5 md:p-10 bg-white border border-top-1">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          <img
            src="https://images.unsplash.com/photo-1558583055-d7ac00b1adca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="https://unsplash.com/@meric"
            className="g"
          />
          <img
            src="https://images.unsplash.com/photo-1520571209517-971582130d30?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1602262442764-c14f8db98045?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1526951521990-620dc14c214b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1610141160723-d2d346e73766?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1621408422423-4392b2711f69?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1619540034640-0d41b5e0f6fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1686496008342-bac8adcfd16c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1628171577082-2c1db571c9c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1577362393115-31cbf395120c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1682668373702-10e0eb560e44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1681731061718-46364a2cf0b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1539692267500-f384fb119654?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGNsZWFyJTIwdHJhc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
