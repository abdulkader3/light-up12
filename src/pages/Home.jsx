import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <div className=" gap-[30px] w-full flex-col h-[657px] flex justify-center items-center ">
      <div className="  w-[300px] h-[300px] rounded-full overflow-hidden justify-center">
      <img className='  ' src="photos/new.JPG" alt="ME" />
      </div>
      <div className=" text-center ">
        <h1 className=' text-[25px] font-bold font-mono ' > Abdul Kader Shanto </h1>
        <h2 className=' text-[#787777] '> Web Designe/Developer </h2>
      </div>
    </div>
    
    </>
  )
}

export default Home
