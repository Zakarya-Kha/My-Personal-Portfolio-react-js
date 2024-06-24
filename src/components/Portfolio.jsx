import React from "react";
import facebookImage from "../assets/portfolio/facebook.png";
import ecommerceImage from "../assets/portfolio/ecommerce.png";
import foodImage from "../assets/portfolio/food.png";
import glassesImage from "../assets/portfolio/glasses.png";
import productImage from "../assets/portfolio/product.png";
import netflix from "../assets/portfolio/netflix.png";
import gymImage from "../assets/portfolio/gym.png";
import hotalImage from "../assets/portfolio/hotal.png";
import youtubeImage from "../assets/portfolio/youtube.png.jpg";
import ezitechImage from "../assets/portfolio/ezitech.png.jpg";
import codeMateImage from "../assets/portfolio/codeMateSulotin.png.jpg";
import TimeBoxItSolutions from '../assets/portfolio/TimeBoxItSolutions.png.jpg';

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      Image: codeMateImage,
      name: "codeMate-Solutions",
      https: "https://codemate-solution.netlify.app/",
    },
    {
      id: 2,
      Image: TimeBoxItSolutions,
      name: "TimeBoxItSolutions",
      https: "https://timeboxitsolution.netlify.app/",
    },

    {
      id: 3,
      Image: facebookImage,
      name: "Social-Media Application",
      https: "https://lovely-tiramisu-9b5c55.netlify.app/",
    },
    {
      id: 4,
      Image: ecommerceImage,
      name: "E-commerce Application",
      https: "https://mellow-biscochitos-027143.netlify.app/",
    },
    {
      id: 5,
      Image: foodImage,
      name: "Food Application",
      https: "https://golden-sunshine-3522f9.netlify.app/",
    },
    {
      id: 6,
      Image: glassesImage,
      name: "Glasses Application",
      https: "https://mellow-sable-05b20c.netlify.app/",
    },
    // {
    //   id: 5,
    //   Image: productImage,
    //   name: "Product-List Application",
    // },
    // {
    //   id: 6,
    //   Image: netflix,
    //   name: "Netflix-Clone Application",
    // },
    {
      id: 7,
      Image: gymImage,
      name: "Fitness-Club Application",
      https: "https://imaginative-concha-3ee515.netlify.app/",
    },
    {
      id: 8,
      Image: hotalImage,
      name: "Hotal-Booking Application",
      https: "https://magical-pixie-fe71af.netlify.app/",
    },
    {
      id: 9,
      Image: youtubeImage,
      name: "Youtube-Clone",
      https: "https://zakiyoutube.netlify.app/",
    },
    {
      id: 10,
      Image: ezitechImage,
      name: "Ezitech",
      https: "https://incredible-begonia-835a3b.netlify.app/",
    },
  ];

  return (
    <div name="portfolio" className="my-28 ">
      <div className=" mb-16 px-7 ">
        <span className="text-5xl font-bold text-blue-500 mb-2">
          Port<span className="text-red-600">folio</span>
        </span>
        <p className="text-sm mt-6  text-gray-200">
          Check out some of my work right here{" "}
        </p>
      </div>
      <div className="  flex flex-wrap gap-6  place-items-center  mx-auto px-12 justify-center">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className=" border w-[300px]  rounded-md overflow-hidden shadow-xl  "
          >
            <img
              className=" hover:scale-105 overflow-hidden  w-[300px] h-[200px] "
              src={item.Image}
              alt=""
            />
            <div className="flex justify-between px-2 text-white mt-8 mb-6 ">
              <p className="font-bold ">{item.name}</p>
              <a
                className="font-bold bg-blue-600 px-1 rounded-full hover:text-black"
                href={item.https}
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
