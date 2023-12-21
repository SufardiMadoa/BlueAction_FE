import { Link } from 'react-router-dom';
import Heading from './Heading'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
export default function EventContent() {
  const handleClick = () => {
    Swal.fire({
      border:"solid",
      position: "top",
      icon: "success",
      title: "Kamu telah terdaftar",
      showConfirmButton: false,
      timer: 2500,
    });
  };
  return (
    <>
    <div className="flex bg-white w-full h-60 flex-col justify-end">
        <div className="flex mb-24">
          <p className="mx-9">
            <p className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-300 drop-shadow-lg px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white cursor-pointer">
            
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
              event
              </p>
          
          </p>
          <p>
          <Link to='/Event/EventContent/EventDocumentation'
              className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-100  px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
            
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
              Documentation
              </Link>
          </p>
        </div>
        
      </div>
      <div className="flex justify-center  flex-wrap flex-row h-full w-full bg-white ">
        <div className="flex justify-center items-center md:w-full xl:w-9/12 bg-white md:mx-auto  flex-col ">
          <div className="w-4/5 bg-white md:shrink-0">
            <img
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className=" h-64 w-full object-cover "
            />
          </div>
          <div className="w-4/5  bg-white">
            <h1 className="text-black-200 text-2xl">Pemahaman Mendalam tentang Polusi: Membuka Mata untuk Aksi Lingkungan</h1>
            <p className="text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              mollitia ex pedita pariatur! Illo nemo aliquam perspiciatis sed
              excepturi voluptate possimus doloremque, molestiae minima unde
              numquam ipsa quaerat modi, officia sapiente eum alias fugit?
              Aliquam laudantium ad deserunt quam voluptatibus cumque suscipit
              error, cupiditate, explicabo, quasi vero! Velit consequuntur
              porro, omnis saepe dicta, veritatis illo nemo at debitis, tenetur
              a! Necessitatibus eveniet ab ipsum adipisci perspiciatis dicta
              quod corporis? Ullam at repellendus nulla et aperiam aliquam
              similique, beatae totam! Debitis voluptate cupiditate facilis
              reprehenderit itaque commodi corrupti sit omnis at libero hic iure
              voluptatibus, consectetur sequi ducimus magnam vitae, laborum
              blanditiis.
            </p>
          </div>
          <div className=" w-4/5 my-5">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">Session</th>
                    {/* <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Date</th> */}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        
                        <div>
                          <p className="font-semibold text-black">10:00 - 11:00</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">pembukaan kegiatan</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                       
                        <div>
                          <p className="font-semibold text-black">11:00 - 12:00</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-md font-semibold border">kegiatan kerja bakti bersama</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        
                        <div>
                          <p className="font-semibold  text-black">12:00 - 13:00</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-md font-semibold border">penutupan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* flex justify-center items-center md:w-full xl:w-9/12 bg-white md:mx-auto  flex-col */}
        
          <div className="flex rounded-xl  w-9/12  xl:w-72 h-1/4 bg-white flex-col py-4 pr-10 pl-2">
            <h2>Participation</h2>
            <div className="flex">
              <button  onClick={handleClick} className="hover:shadow-form rounded bg-[#21CA46] py-1 px-2 w-full text-center text-base font-semibold text-white outline-none">
                Join
              </button>
            </div>
            <div className="flex flex-col">
              <p>
                Implementation <br /> Schedule
              </p>{" "}
              <br />
              <p>
                Start : <b> 24 Oct 2023</b> 15:00
              </p>
              <p>
                End : <b>24 Oct 2023</b> 17:00
              </p>
            </div>
            <div className="flex">
              <p>Location</p>
            </div>
            <div className="flex">
              <div className="flex">
                <p className="mr-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                </p>
              </div>
              <div className="flex flex-col">
                <p>Parangtritis, Yogyakarta</p>
                <p>ONLINE</p>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}
