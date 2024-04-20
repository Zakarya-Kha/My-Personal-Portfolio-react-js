import React from 'react'
import HeroImage from '../assets/portfolio/heroImage.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home'  >
    
      <div  className='flex flex-wrap md:flex-row justify-center items-center md:gap-6 gap-8 mx-auto  pt-52  md:h-screen'>
      <div className='  space-y-1 '>
            <img className='h-[350px] rounded-full w-[350px] hover:scale-105 transition-all duration-300 ' src={HeroImage} alt="my profile" />
        </div>

        <div className='text-white  md:w-1/2 w-full px-4 md:space-y-3 mt-8  '>
          <p>Hi, I am </p><h1 className='text-5xl  font-bold'>Zakarya khan</h1>
            <span className='text-3xl font-bold text-blue-600 pt-9'>I'm a  Frontend <span className='text-red-600'>React <br/>Developer </span ></span>
            <p className='text-sm mb-9'>I'm a super enthusiastic Computer Science graduate, eager to land
                a frontend internship. When it comes to HTML, CSS, JavaScript,
                and React.js, I'm all in—I love creating magic with these languages.
                I have a real talent for using tools like Tailwind CSS and Bootstrap
                to craft websites that not only look amazing but also function
                seamlessly on any device. I'm really excited about the idea of
                diving into interesting projects, soaking up knowledge, and getting
                some hands-on experience in a real-world setting.</p>
              <button>  <Link to='portfolio' smooth duration={500} className='flex group items-center rounded-md px-1 mt-3   hover:bg-blue-700  bg-blue-600'>Portfolio <span className='ml-1 group-hover:rotate-90 duration-300 mt-1'><MdOutlineKeyboardArrowRight size={25}/></span></Link></button>

        </div>
       
      </div>
    </div>
  )
}

export default Home
