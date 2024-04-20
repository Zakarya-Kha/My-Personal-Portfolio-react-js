import React from 'react'

const About = () => {
  return (
    <div 
    name="about"
    className='md:max-w-screen-lg w-full mx-auto  flex flex-wrap flex-col justify-center gap-3    ' >
      <div className='text-white mb-16 flex justify-center md:justify-start  '>
        <span className='text-5xl font-bold mt-24  text-blue-600'>About <span className='text-red-600'>Us</span></span>
      </div>
      <div className='  text-gray-100 px-3'>
        <p>
        Hello! I'm Zakarya khan, a passionate frontend React developer with 1 year of experience in crafting beautiful and user-friendly web applications. I have a strong foundation in HTML, CSS, and JavaScript, and I specialize in building responsive and interactive user interfaces using React.js.
        </p>
        <br/>
        <h2 className='text-3xl text-blue-600'>My Journey</h2>
        <p className='mt-4'>
        My journey into the world of web development began 1 year ago when I discovered my love for creating websites and applications that make a difference. Since then, I've been on a continuous learning journey, honing my skills and staying updated with the latest trends and technologies in the ever-evolving field of frontend development.
        </p>

        <br/>
        <h2 className='text-3xl text-blue-600'>What I Do</h2>
        <p className='mt-4'>
        As a frontend developer, I specialize in turning ideas into reality by translating design mockups and wireframes into fully functional and visually appealing web applications. I have extensive experience in:

Developing custom React components and reusable UI elements to enhance user experience.
Integrating APIs and third-party libraries to add advanced functionalities to web applications.
Optimizing website performance and ensuring cross-browser compatibility for seamless user interaction.
Collaborating with designers and backend developers to bring projects to life and deliver high-quality products on time.
        </p>

        <br/>
        <h2 className='text-3xl text-blue-600'>My Goal</h2>
        <p className='mt-4'>
        MMy goal as a frontend React developer is to create exceptional digital experiences that leave a lasting impression on users. I am committed to delivering innovative solutions that meet the needs of clients and exceed expectations.
        </p>
      </div>
    </div>
  )
}

export default About
