import { Button } from "./button";
import { IoMdCloudDownload } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import hero from '@/public/images/hello.png'
import Image from "next/image";


const Hero = () => {
  return (
    <div className='flex h-96 justify-center items-center my-20 w-full lg:w-11/12 lg:mb-40'>
      <div className='left-content w-full lg:w-1/2'>
        <h1 className='text-4xl lg:text-6xl font-bold'>
          Marketing website done with Astro
        </h1>
        <p className='mt-8 text-gray-600'>
          Astroship is a starter template for startups, marketing websites &
          landing pages. Built with Astro.build and TailwindCSS. You can quickly
          create any website with this starter.{' '}
        </p>
        <div className='btn-container mt-10 gap-3 flex flex-col lg:flex-row'>
          <Button>
            <IoMdCloudDownload />
            <span className='text-md'>Download for free</span>
          </Button>
          <Button className='bg-white hover:bg-white  text-black'>
            <FaGithub />
            <span className='text-md'>Github Repo</span>
          </Button>
        </div>
      </div>
      <div className='right-content hidden lg:inline-block'>
       <Image 
       src={hero}
       alt="hero-img"
       
       />
      </div>
    </div>
  );
}
export default Hero