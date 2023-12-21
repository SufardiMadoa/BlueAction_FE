// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import Img1 from '../Asset/beranda/aboutSite/image1.png'
import Img2 from '../Asset/heading/bg-heading.jpg'

const Heading = () => {
    const heading = [
        {
            url: Img1
        },
        {
            url: Img2
        }
    ]

    // batas
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % heading.length) 
        }, 3000)
        return () => clearInterval(interval) 
    }, [index, heading.length])
  return ( 
    <div className='-z-10 w-full h-40 sm:h-[250px] xl:h-[400px] bg-black border-4 border-black relative '>
        <div 
        style={{backgroundImage: `url(${heading[index].url})`}} 
        className=' absolute inset-0 w-full h-full bg-cover transition-all duration-1000 bg-center blur-sm opacity-40 '>
        </div>
        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white'>
            <p className=' xl:text-5xl md:text-3xl text-md font-semibold text-center'>
            Getting <span className='text-[#FFE818]'>Started <br /> Loving </span>
             the Environment <br />
             <span className='text-[#FFE818]'>The Clean</span>
            </p>
        </div>
    </div>
  )
}

export default Heading