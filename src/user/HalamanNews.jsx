// eslint-disable-next-line no-unused-vars
import React from 'react'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import Img2 from '../Asset/beranda/image-beranda.png'


const HalamanNews = () => {
  return (
    <>
    <Heading />
 <section >
    <Link to>
        <p className='bg-[#3398DB] z-30 relative text-white justify-center font-medium sm:font-bold sm:text-3xl text-lg flex py-2 sm:py-5 w-[50%] sm:rounded-xl rounded-md mx-auto sm:-mt-10 -mt-6 shadow-lg'>
            NEWS
        </p>
        </Link>
        <div className=' w-full bg-[url(/src/Asset/beranda/news/bg-news.png)] bg-cover mx-auto sm:-mt-9 -mt-5 py-12 px-4 sm:px-12 '>

            <div className='max-w-[1280px] mx-auto my-20 '>

                <div className='flex flex-col h-full w-full overflow-x-scroll '>
                    {/* card */}
                    <div className='flex'>

                    <div className='px-10 py-5 md:p-5 w-80' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                    <Link to='/News/NewsAdmin'>
                        <img src={Img2} alt="news" className=' h-40 w-80 object-cover object-center '/>
                    </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                    </div> 

                    <div className='px-10 py-5 md:p-5 w-80' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                    <Link to='/'>
                        <img src={Img2} alt="news" className=' h-40 w-80 object-cover object-center '/>
                    </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                    </div>  
                    
                    <div className='px-10 py-5 md:p-5 w-80' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                    <Link to='/'>
                        <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                    </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                    </div>  

                    <div className='px-10 py-5 md:p-5 w-80' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                    <Link to='/'>
                        <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                    </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                     </div>  
                    </div>
                    {/* card */}
                    {/* card */}
                    <div className='flex'>

                    <div className='px-10 py-5 md:p-5 w-80' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                    <Link to='/'>
                        <img src={Img2} alt="news" className=' h-40 w-80 object-cover object-center '/>
                    </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                    </div>  
                    <div className='px-10 py-5 md:p-5 w-80' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                    <Link to='/'>
                        <img src={Img2} alt="news" className=' h-40 w-80 object-cover object-center '/>
                    </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                    </div>  
                    
                    <div className='px-10 py-5 md:p-5 w-80' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                    <Link to='/'>
                        <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                    </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                    </div>  

                    <div className='px-10 py-5 md:p-5 w-80' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                    <Link to='/'>
                        <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                    </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                     </div>  
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
                    <div className='px-10 py-5 md:p-5 w-1/3' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                        <Link to='/'>
                            <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                        </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                    </div>  
                    <div className='px-10 py-5 md:p-5  w-1/3' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                        <Link to='/'>
                            <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                        </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                    </div>  
                    <div className='px-10 py-5 md:p-5  w-1/3' >
                        <div className='bg-[#06253a] pb-5 rounded-lg '>
                        <Link to='/'>
                            <img src={Img2} alt="news" className=' h-40 w-full object-cover object-center '/>
                        </Link>
                            <div className=' text-white p-5  overflow-hidden h-24 w-full' >
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea numquam? Totam eligendi consequuntur ut vel voluptatum nemo, voluptas mollitia officia error ab, distinctio sint neque, eveniet incidunt reiciendis unde maiores soluta. Exercitationem soluta vitae sunt temporibus modi! In voluptates doloribus fugiat reiciendis nam sunt et consectetur dignissimos perspiciatis asperiores. Sapiente, iure doloribus quo in vel repellat odit explicabo molestiae excepturi blanditiis, labore repellendus quaerat quibusdam, placeat impedit harum! Corrupti maxime sequi fugit! Molestiae ullam dignissimos, iste dolorem fuga accusamus? Maxime, quis. Ipsum cumque omnis voluptatum veniam neque quae similique iste, aut maxime culpa aliquid reiciendis impedit asperiores natus eveniet.</p>
                            </div>
                        
                        </div>
                    </div>  
                    
    </div>
 </section>

    </>
  )
}

export default HalamanNews