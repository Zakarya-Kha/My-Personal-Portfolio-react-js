import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdPersonalInjury } from "react-icons/md";

const SocialLinks = () => {
    const Links = [
        {
            id: 1,
            child: (
                <> linkedin <FaLinkedin />   </>
            ),
            href: "https://www.linkedin.com/in/zakarya-khan-4038162a5/"
            
        },
        {
            id: 2,
            child: (
                <>  Github. <FaGithub />   </>
            ),
            href: "https://github.com/zakarya-Kha"
        },
        {
            id: 3,
            child: (
                <> Resume <MdPersonalInjury />   </>
            ),
            href: "./ZakaryaKhanCv(1).pdf",
            download: true,
        }
    ]
  return (
    <div name='' className=' flex flex-col top-[35%] left-0 fixed z-10 '>
      <ul className='hidden md:block'>
        {
            Links.map((link) => (   
        <li key={link.id} className='ml-[-80px] hover:ml-[-4px] duration-300 '>
      <a className='flex items-center gap-5 text-xl  py-2   text-white  px-2 rounded-md' href={link.href} target="_blank" rel="noreferrer">
    {link.child}
      </a>
    </li>

            ))
        }
       
      </ul>
    </div>
  )
}

export default SocialLinks
