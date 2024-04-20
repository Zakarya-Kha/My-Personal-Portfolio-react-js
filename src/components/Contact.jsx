import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='flex flex-col gap-8 justify-center items-center h-screen'>
      <div className='w-[400px] '>
        <span className='text-4xl font-bold  text-blue-600 mb-2'>Contact <span className='text-red-600'>Me</span> </span>
        <p className='text-white mt-6'>
          Feel free to contact me at any time!
        </p>
      </div>

      <div className='w-[400px]'>
        <form action="https://getform.io/f/paygqyza" method="POST" className='flex flex-col justify-center  '>
          <input type="text" name='name' placeholder="Enter Your Name" className='text-white rounded-md p-2 bg-transparent border-2 focus:outline-none' />
          <input type="Email" name='email' placeholder=" Enter Your Email" className='text-white rounded-md p-2 bg-transparent border-2 focus:outline-none my-4' />
          <textarea 
          name='message'
            className='text-white bg-transparent border-2 rounded-md focus:outline-none p-2'
            placeholder="Enter Your Message" rows={5}
          ></textarea>
          <div className='flex justify-center items-center '>
          <button className='text-xl bg-blue-600  text-white mt-5 p-2 rounded-lg hover:scale-110 duration-300 ' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
