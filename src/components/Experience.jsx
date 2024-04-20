import React from 'react'
import cssImage from '../assets/portfolio/css.png'
import htmlImage from '../assets/portfolio/html.png'
import javascriptImage from '../assets/portfolio/javascript.png'
import reactImage from '../assets/portfolio/react.png'
import tailwindImage from '../assets/portfolio/tailwind.png'
import GithubImage from '../assets/portfolio/github.png'

const Experience = () => {
    const Skills = [
        {
            id: 1,
            skill: htmlImage,
            name: 'HTML',
            
        },
        {
            id:2,
            skill: cssImage,
            name: 'CSS',
        },
        {
            id : 3,
            skill: javascriptImage,
            name: 'Javascript',
        },
        {
            id: 4,
            skill: reactImage,
            name: 'React.js',
        },
        {
            id: 5,
            skill: tailwindImage,
            name: 'tailwindCss',
        },
        {
            id: 6,
            skill: GithubImage,
            name: "Github"
            
        }
    ]

  return (
    <div name='experience' className='my-28  md:h-screen w-full'>
    <div className='text-white mb-24 px-7  '>
        <span className='text-5xl text-blue-600 font-bold '>Exper<span className='text-red-600'>ience</span></span>
        <p className='text-sm text-gray-200 mt-4'>These are the technologies l've worked with</p>
      </div>
    <div className='  flex flex-wrap gap-6  place-items-center  mx-auto px-12 justify-center' >
      
      {
        Skills.map((item) => (
            <div key={item.id} className='  shadow-2xl border- w-[300px]  rounded-md overflow-hidden flex flex-col items-center justify-center   '>
            <img className=' hover:scale-105 overflow-hidden  w-[100px] h-[100px]  ' src={item.skill} alt="" />
            <div className='flex justify-between px-2 text-white mt-8 mb-6 '>
          <p className='font-bold text-xl '>{item.name}</p>
          </div>
          </div>
        ))
      }
     
      
    </div>
    </div>
  )
}

export default Experience
