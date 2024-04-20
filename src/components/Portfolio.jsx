import React from 'react'
import facebookImage from '../assets/portfolio/facebook.png'
import ecommerceImage from '../assets/portfolio/ecommerce.png'
import foodImage from '../assets/portfolio/food.png'
import glassesImage from '../assets/portfolio/glasses.png'
import productImage from '../assets/portfolio/product.png'
import netflix from '../assets/portfolio/netflix.png'
import gymImage from '../assets/portfolio/gym.png'
import hotalImage from '../assets/portfolio/hotal.png'


const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            Image: facebookImage,
            name:'Social-Media Application',
        },
        {
            id: 2,
            Image: ecommerceImage,
            name:'E-commerce Application',
        },
        {
            id: 3,
            Image: foodImage,
            name:'Food Application',
        },
        {
            id: 4,
            Image: glassesImage,
            name:'Glasses Application',
        },
        {
            id: 5,
            Image: productImage,
            name:'Product-List Application',
        },
        {
            id: 6,
            Image: netflix,
            name:'Netflix-Clone Application',
        },
        {
            id: 7,
            Image: gymImage,
            name:'Fitness-Club Application',
        },
        {
            id: 8,
            Image: hotalImage,
            name:'Hotal-Booking Application',
        }
    ]


  return (
    <div name='portfolio' className='my-28 '>
    <div className=' mb-16 px-7 '>
        <span className='text-5xl font-bold text-blue-500 mb-2'>Port<span className='text-red-600'>folio</span></span>
        <p className='text-sm mt-6  text-gray-200'>Check out some of my work right here </p>
      </div>
    <div className='  flex flex-wrap gap-6  place-items-center  mx-auto px-12 justify-center' >
      
      {
        portfolio.map((item) => (
            <div key={item.id} className=' border w-[300px]  rounded-md overflow-hidden shadow-xl  '>
            <img className=' hover:scale-105 overflow-hidden  w-[300px] h-[200px] ' src={item.Image} alt="" />
            <div className='flex justify-between px-2 text-white mt-8 mb-6 '>
          <p className='font-bold '>{item.name}</p>
          <a className='font-bold bg-blue-600 px-1 rounded-full hover:text-black' href='#' >Code</a>
          </div>
          </div>
        ))
      }
     
      
    </div>
    </div>
  )
}

export default Portfolio
