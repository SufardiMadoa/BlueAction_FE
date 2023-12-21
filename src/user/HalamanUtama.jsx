// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Img1 from '../Asset/beranda/aboutSite/image1.png'
import Img2 from '../Asset/beranda/image-beranda.png'
import News1 from '../Asset/beranda/news/image-news1.png'
import News2 from '../Asset/beranda/news/image-news2.png'
import News3 from '../Asset/beranda/news/image-news3.png'
import Edu1 from '../Asset/beranda/infoEdu/image-infoEdu1.png'
import Edu2 from '../Asset/beranda/infoEdu/image-infoEdu2.png'
import Edu3 from '../Asset/beranda/infoEdu/image-infoEdu3.png'
import Do1 from '../Asset/beranda/forumDonation/image-forumDonation1.png'
import Do2 from '../Asset/beranda/forumDonation/image-forumDonation2.png'
import Do3 from '../Asset/beranda/forumDonation/image-forumDonation3.png'
import Big from '../Asset/beranda/documentation/big-image-documentation.png'
import Doc1 from '../Asset/beranda/documentation/image-documentation1.png'
import Doc2 from '../Asset/beranda/documentation/image-documentation2.png'
import Doc3 from '../Asset/beranda/documentation/image-documentation3.png'
import Support from '../Asset/beranda/supportBy.png'




const HalamanUtama = () => {
    const onScroll = (value) => {
        const element = document.getElementById(value);
        element.scrollIntoView();
     }
  return (
    <>
    <div className='bg-no-repeat bg-[url(/src/Asset/beranda/Group82.png)] bg-cover px-6 sm:px-12'>
        <div className='max-w-[1280px] flex md:flex-row flex-col items-center mx-auto basis-1/3 py-28 '>
        <div className='w-full text-black'>
        <p className='sm:text-6xl py-4 font-bold text-5xl ' >
            <span className='text-white'>Getting</span> Started <br />  
            Loving<span className='text-white'> the Environment </span><br /> 
            The Clean 
        </p>
        <p className='text-xl text-white font-semibold'> Register is our part in reducing plastic waste </p>
        <div className='flex gap-4 py-5'>
            <button className='bg-white rounded-md py-2 px-6 text-black' > <NavLink to="/register" > register </NavLink></button>
            <button className='bg-white rounded-md py-2 px-6 text-black'> <Link onClick={() => onScroll(1)} to='/' > About us </Link>  </button>
        </div>
        </div>
        <div className='sm:p-0 p-20  '> <img src={Img2} alt="" /> </div>
        </div>
    </div>


    {/* batas */}
    <div id={1} className='px-6 sm:px-12 max-w-[1280px] mx-auto scroll-m-0 ' >
        <div className='items-center flex flex-col-reverse sm:flex-row'>
            <div> <img src={Img1} className='sm:p-16 w-auto p-12' alt="beranda" /> </div>
            <div className='text-right basis-1/2 text-[#004B7C]'> 
            <p className='sm:text-6xl text-3xl font-bold sm:pt-0 pt-10'>
            ABOUT SITE
            </p>
            <p className='sm:text-xl text-lg'>Blue Action is a company that provides information regarding the impact of plastic waste on the environment. Providing areas with the most plastic waste and providing Trash Pick Up services to reduce plastic waste and recycle it into more useful items for the community.</p>
            </div>
        </div>

    </div>
    {/* batas News */}
    <div className='bg-no-repeat bg-[url(/src/Asset/beranda/news/bg-news.png)] bg-cover px-6 sm:px-12 py-10 text-xl' >
        <div className='max-w-[1280px] mx-auto py-10'>
            <div className='px-5'>
                <div className='text-[#004B7C]'>
                    <h1 className='text-6xl font-bold' > NEWS</h1>
                    <p>The latest news being displayed provides fresh and relevant information on recent events, issues, or incidents surrounding plastic waste, enabling readers to stay updated on various related topics.</p>
                </div>
                <div className='text-end pt-10 pb-2 '>
                    <button className='bg-[#004B7C] py-2 px-12 rounded-md text-white'>
                      <NavLink to='/user/news'> see more </NavLink>
                    </button>
                </div>
            </div>
            <div className='flex md:flex-row flex-col h-fit '>
                <div className='px-10 py-5 md:p-5 w-full '>
                    <div className='bg-[#06253a] pb-5 rounded-lg'>
                        <img src={News1} alt="news" className=' h-56 w-full object-cover object-center '/>
                        <div className=' text-white p-5  overflow-hidden h-40 w-full' >
                            <p> Governor Khofifah Indar Parawansa fights plastic waste, calls Mount Arjuno fire man-made</p>
                        </div>
                    </div>
                    <button 
                    className='bg-slate-50 w-full rounded-lg py-2 my-5 shadow-sm shadow-black'>
                    <NavLink > view </NavLink>
                    </button>
                </div>  
                <div className='px-10 py-5 md:p-5 w-full'>
                    <div className='bg-[#06253a] pb-5 rounded-lg shadow-md'>
                        <img src={News2} alt="news" className=' h-56 w-full object-cover object-center '/>
                        <div className=' text-white p-5 overflow-hidden h-40' >
                            <p > Reduce Plastic Waste, Tangsel City Government Asks Businesses to Stop Using Single-Use Plastics</p>
                        </div>
                    </div>
                    <button 
                    className='bg-slate-50 w-full rounded-lg py-2 my-5 shadow-sm shadow-black'>
                    <NavLink > view </NavLink>
                    </button>
                </div>  
                <div className='px-10 py-5 md:p-5 w-full'>
                    <div className='bg-[#06253a] pb-5 rounded-lg shadow-md'>
                        <img src={News3} alt="news" className=' h-56 w-full object-cover object-center '/>
                        <div className=' text-white p-5 overflow-hidden h-40' >
                            <p> KKP Holds Love the Sea Month Gernas, Collects 3.8 Tons of Waste in Dumai</p>
                        </div>
                    </div>
                    <button 
                    className='bg-slate-50 w-full rounded-lg py-2 my-5 shadow-sm shadow-black'>
                    <NavLink > view </NavLink>
                    </button>
                </div>    
            </div>
        </div>
    </div>
     {/* batas Edu*/}
     <div className='bg-no-repeat bg-[url(/src/Asset/beranda/infoEdu/bg-infoEdu.png)] bg-cover px-6 sm:px-12 py-10 text-xl' >
        <div className='max-w-[1280px] mx-auto py-10'>
            <div className='px-5'>
                <div className='text-end text-white'>
                    <h1 className='text-6xl font-bold'>INFORMATION EDUCATION</h1>
                    <p>Information and education about plastic waste are crucial in preserving the environment and promoting environmental awareness among the public. Through proper education, people can understand how important it is to act responsibly towards plastic waste, reduce pollution, and protect the sustainability of our planet for future generations.</p>
                </div>
                <div className='text-start pt-10 pb-2'>
                    <button className='bg-white py-2 px-12 rounded-md'>
                      <NavLink to='/education'> see more </NavLink>
                    </button>
                </div>
            </div>
            <Link to='/education'>
            <div className='flex md:flex-row flex-col h-fit '>
                <div className='px-10 py-5 md:p-5 w-full '>
                    <div className='bg-[#fafafa] rounded-lg'>
                        <img src={Edu1} alt="news" className=' h-56 w-full object-cover object-center '/>
                        <div className=' text-black p-5 overflow-hidden h-40' >
                            <p>Environmental education teaches plastic waste management to encourage recycling and reduce the use of single-use plastics.</p>
                        </div>
                    </div>
                 
                </div>  
                <div className='px-10 py-5 md:p-5 w-full'>
                    <div className='bg-[#fafafa] rounded-lg'>
                        <img src={Edu2} alt="news" className=' h-56 w-full object-cover object-center '/>
                        <div className=' text-black p-5 overflow-hidden h-40' >
                            <p > It brings awareness to the negative impacts of plastic waste, including water and soil pollution and threats to ecosystems and wildlife.</p>
                        </div>
                    </div>
                 
                </div>  
                <div className='px-10 py-5 md:p-5 w-full'>
                    <div className='bg-[#fafafa] rounded-lg'>
                        <img src={Edu3} alt="news" className=' h-56 w-full object-cover object-center '/>
                        <div className=' text-black p-5 overflow-hidden h-40' >
                            <p> Understanding the risks of disposing of plastic waste by incineration brings to mind the harmful air pollution that can be detrimental to human health and motivates the search for safer alternatives.</p>
                        </div>
                    </div>
                 
                </div>    
            </div>
            </Link>
        </div>
    </div>
    {/* batas donation */}
    <div className='bg-no-repeat bg-[url(/src/Asset/beranda/forumDonation/bg-forumDonation.png)] bg-cover px-6 sm:px-12 py-10 text-xl' >
        <div className='max-w-[1280px] mx-auto py-10'>
    
            <div className='px-5'>
                <div className='text-start text-white'>
                    <h1 className='text-6xl font-bold'>FORUM DONATION</h1>
                    <p>Donate now to support our mission in tackling plastic waste! Your generous donation will enable us to implement effective initiatives, raise awareness, and create sustainable solutions to address the plastic pollution crisis. Together, we can make a significant impact on our environment and create a cleaner, healthier planet for all.</p>
                </div>
                <div className='text-end pt-10 pb-2'>
                    <button className='bg-orange-500 py-2 px-12 rounded-md text-white'>
                      <NavLink to='/donation'> see more </NavLink>
                    </button>
                </div>
            </div>

            <NavLink to='/donation'>
            <div className='flex md:flex-row flex-col h-fit '>
                <div className='px-10 py-20 md:p-5 w-full '>
                    <div className='bg-[#fafafa] rounded-lg overflow-hidden '>
                        <img src={Do1} alt="news" className=' h-56 w-full object-cover object-center '/>
                        <div className=' text-black p-5 overflow-hidden h-20 font-bold ' >
                            <p> Free Indonesia from Plastic Waste</p>
                        </div>
                        <div className=' text-black p-5 overflow-hidden h-20 flex justify-between ' >
                            <p> Collected </p>
                            <p> Rp 5.000.000,50 </p>
                        </div>
                    </div>
                </div>  
                <div className='px-10 py-20 md:p-5 w-full '>
                    <div className='bg-[#fafafa] rounded-lg overflow-hidden '>
                        <img src={Do2} alt="news" className=' h-56 w-full object-cover object-center '/>
                        <div className=' text-black p-5 overflow-hidden h-20 font-bold ' >
                            <p> Free Indonesia from Plastic Waste</p>
                        </div>
                        <div className=' text-black p-5 overflow-hidden h-20 flex justify-between ' >
                            <p> Collected </p>
                            <p> Rp 5.000.000,50 </p>
                        </div>
                    </div>
                </div>  
                <div className='px-10 py-20 md:p-5 w-full '>
                    <div className='bg-[#fafafa] rounded-lg overflow-hidden '>
                        <img src={Do3} alt="news" className=' h-56 w-full object-cover object-center '/>
                        <div className=' text-black p-5 overflow-hidden h-20 font-bold ' >
                            <p> Plastic Action: One Step for a Better Environment</p>
                        </div>
                        <div className=' text-black p-5 overflow-hidden h-20 flex justify-between ' >
                            <p> Collected </p>
                            <p> Rp 5.000.000,50 </p>
                        </div>
                    </div>
                </div>  
                    
            </div>
            </NavLink>
        </div>
       
        {/* batas documt & event */}
        <div className='flex md:flex-row flex-col max-w-[1280px] mx-auto px-5' >
         
            <div className='text-start text-white  py-10'>
                    <h1 className='md:text-5xl text-3xl font-bold'>Event</h1>
                    <p className='text-lg'>An environmental event aimed at addressing plastic waste issues can include recycling workshops, beach clean-ups, and panel discussions on innovative solutions to reduce plastic waste in everyday life.</p>
                    <div>
                        <img src={Big}  className='w-full p-5' alt="" />
                    </div>
                    <button className='bg-white text-black py-2 px-10 mx-2 my-5 rounded-lg hover:bg-slate-300'>
                        <NavLink to='/event'> see more </NavLink>
                    </button>
            </div>
           
            {/* pisah */}
         
            <div className='md:text-end text-white  py-10'>
                    <h1 className='md:text-5xl text-3xl font-bold'>Documentation</h1>
                    <p className='text-lg'>The documentation on plastic waste can focus on gathering data related to the volume of plastic waste, its environmental impact, and the efforts made in its management</p>
                    <div className='flex flex-row w-full overflow-hidden '>
                        <div className='w-1/2 h-1/2'>
                         <div className='p-2  overflow-hidden'>
                            <img src={Doc1}  className='w-full h-full'  alt="" />
                         </div>
                         <div className='p-2 overflow-hidden'>
                         <img src={Doc2}  className='w-full h-full' alt="" />
                         </div>
                        </div>
                        <div className='w-full p-2 overflow-hidden' >
                        <img src={Doc3} className='w-full h-full' alt="" />
                        </div>
                    </div>
                    <button className='bg-white text-black py-2 px-10 mx-2 my-5 rounded-lg hover:bg-slate-300'>
                        <NavLink to='/documentation'> see more </NavLink>
                    </button>
                </div>
           
        </div>
    </div>
    {/* batas  */}
    <div className='flex flex-col max-w-[1280px] mx-auto my-10 ' >
        <p className='text-xl py-3 mx-auto'>Support by</p>
        <img src={Support}className='w-[60%] mx-auto' alt="" />
    </div>

   
    </>
  )
}

export default HalamanUtama