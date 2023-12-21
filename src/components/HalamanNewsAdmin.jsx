// eslint-disable-next-line no-unused-vars
import React from 'react'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import Img2 from '../Asset/beranda/image-beranda.png'
import Swal from 'sweetalert2'
import News1 from '../Asset/informasiNews/news/slides1/image-news1.png'
import News2 from '../Asset/informasiNews/news/slides1/image-news2.png'
import News3 from '../Asset/informasiNews/news/slides1/image-news3.png'
import News4 from '../Asset/informasiNews/news/slides1/image-news4.png'
import News5 from '../Asset/informasiNews/news/slides1/image-news5.png'
import News6 from '../Asset/informasiNews/news/slides1/image-news6.png'
import News7 from '../Asset/informasiNews/news/slides1/image-news7.png'
import News8 from '../Asset/informasiNews/news/slides1/image-news8.png'
import News9 from '../Asset/informasiNews/news/slides1/image-news9.png'
import News10 from '../Asset/informasiNews/news/slides1/image-news10.png'
import News11 from '../Asset/informasiNews/news/slides1/image-news11.png'
import News12 from '../Asset/informasiNews/news/slides1/image-news12.png'



const HalamanNews = () => {
    const handleClick = () =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      }
  return (
    <>
    <Heading />
 <section >
        <p className='bg-[#3398DB] z-30 relative text-white justify-center font-medium sm:font-bold sm:text-3xl text-lg flex py-2 sm:py-5 w-[50%] sm:rounded-xl rounded-md mx-auto sm:-mt-10 -mt-6 shadow-lg'>
            NEWS
        </p>
        <div className=' w-full bg-[url(/src/Asset/beranda/news/bg-news.png)] bg-cover mx-auto sm:-mt-9 -mt-5 py-12 px-4 sm:px-12 '>

            <div className='max-w-[1280px] mx-auto mb-20'>
                {/* batas */}
                <div className='flex flex-col sm:flex-row justify-between mx-auto my-5 '>
                    <button className='py-2 px-9 sm:px-5 bg-white w-fit mx-auto sm:mx-0'>
                        <Link to='/uploadadminnews' >add content +</Link></button>
                    <span className='mx-auto sm:mx-0' >
                    </span>
                </div>
                {/* batas card 1 */}
                <div className='flex flex-wrap h-full w-full '>
                    {/* card */}
                        <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                            <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='https://tekno.tempo.co/read/1768154/gubernur-khofifah-indar-parawansa-perangi-sampah-plastik-sebut-kebakaran-gunung-arjuno-ulah-manusia'>
                            <img src={News1} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Gubernur Khofifah Indar Parawansa Perangi Sampah Plastik, Sebut Kebakaran    Gunung Arjuno Ulah Manusia </p>
                             </div>
                             <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                            </div>
                        </div> 
                        <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                            <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='https://www.msn.com/id-id/berita/nasional/kurangi-sampah-plastik-pemkot-tangsel-minta-pelaku-usaha-tidak-lagi-gunakan-plastik-sekali-pakai/ar-AA1f7ZFb'>
                            <img src={News2} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p>   Reduce Plastic Waste, Tangsel City Government Asks Businesses to Stop Using Single-Use Plastics.</p>
                             </div>
                             <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                            </div>
                        </div> 
                        <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                            <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='https://nasional.tempo.co/read/1761411/kkp-gelar-gernas-bulan-cinta-laut-kumpulkan-38-ton-sampah-di-dumai'>
                                <img src={News3} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p>  KKP Holds Love the Sea Month Gernas, Collects 3.8 Tons of Waste in Dumai.</p>
                             </div>
                             <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                            </div>
                        </div> 
                     
                
                   {/* pisah dari default ini data yang di tampilkan setelah input */}
                <div className='flex flex-wrap h-full w-full'>
                    {/* card yang diisi otomatis ketika input data */}
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='/'>
                                <img src={News4} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                            <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                        </div>
                    </div> 
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='/'>
                                <img src={News5} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                            <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                        </div>
                    </div> 
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='/'>
                                <img src={News6} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                            <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                        </div>
                    </div> 
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='/'>
                                <img src={News7} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                            <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                        </div>
                    </div> 
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='/'>
                                <img src={News8} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                            <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                        </div>
                    </div> 
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='/'>
                                <img src={News9} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                            <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                        </div>
                    </div> 
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='/'>
                                <img src={News10} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                            <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                        </div>
                    </div> 
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='/'>
                                <img src={News11} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                            <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                        </div>
                    </div> 
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                            <Link to='/'>
                                <img src={News12} alt="news" className=' h-40 w-full object-cover object-center '/>
                            </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                            <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md' >
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md' onClick={handleClick} >delete</button>
                            </div>
                        </div>
                    </div> 
                    {/* card */}
                </div>
                    {/* card */}
                </div>
            </div>
        </div>
 </section>
 <section>

    {/* batas card 2 Latest NEWS */}
    <p className='bg-[#3398DB] z-30 relative text-white justify-center font-medium sm:font-bold sm:text-3xl text-lg flex py-2 sm:py-5 w-[50%] sm:rounded-xl rounded-md mx-auto sm:-mt-10 -mt-6 shadow-lg'>
    LASTEST NEWS
    </p>
     <div className=" mx-auto sm:-mt-9 -mt-5 py-20 px-4 sm:px-12 max-w-[1280px] flex">
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                        <Link to='/'>
                            <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                        </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md'>
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md'>delete</button>
                        </div>
                        </div>
                    </div>  
                    <div className='px-10 py-5 md:p-5  lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                        <Link to='/'>
                            <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                        </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md'>
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md'>delete</button>
                        </div>
                        </div>
                    </div>  
                    <div className='px-10 py-5 md:p-5 lg:w-1/3 md:w-1/2 sm:w-full w-full' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                        <Link to='/'>
                            <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                        </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        <div className='flex px-5 py-2 gap-2'>  
                            <Link to='/editeadminnews' className='py-2 px-5 bg-white w-1/2 text-center rounded-md'>
                                edite
                            </Link>
                            <button className='py-1 px-5 bg-white w-1/2 rounded-md'>delete</button>
                        </div>
                        </div>
                    </div>  
                    
    </div>
 </section>

    </>
  )
}

export default HalamanNews