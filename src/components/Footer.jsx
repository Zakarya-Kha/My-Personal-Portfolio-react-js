import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
    const Links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
       
        {
            id: 4,
            link: "contact",
        },
        
    ]


  return (
    <div className='flex justify-between shadow-xl p-4 text-xl items-center'>
      <div>
        <span className=' text-blue-600'>@2024 Zakarya Khan <span className='text-red-600'>All Rights Reserved</span> </span>
      </div>
      <ul>
        <li>
        {
            Links.map(({ id, link }) => (
              <a
                key={id}
                className="px-4 cursor-pointer hover:text-blue-600 capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </a>
            ))
  
        }
        </li>
      </ul>
      <div>

      </div>
    </div>
  )
}

export default Footer

  
