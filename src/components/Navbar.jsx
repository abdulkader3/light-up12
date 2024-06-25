import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="container flex  justify-center">
        <div className=" w-full flex justify-between items-center pt-[40px] flex-wrap pl-[80px] ">
          <div className="">
            <img src="photos/logo.jpg" alt="logo" />
          </div>
          <ul className='flex gap-[30px]  pr-[250px] flex-wrap '>
            <li> <NavLink to='/' className={({ isActive }) => isActive ? "px-[24px] font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white transition-all bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white bg-white  py-[10px] rounded-[10px] text-[16px] "  } > Home </NavLink> </li>
            <li> <NavLink to='/About' className={({ isActive }) => isActive ? "px-[24px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all  py-[10px] rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white text-[16px]" : " px-[24px] transition-all font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white py-[10px] hover:text-white rounded-[10px]  "  } > About </NavLink> </li>
            <li> <NavLink to='/Resume' className={({ isActive }) => isActive ? "px-[24px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white  py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white hover:text-white  py-[10px] rounded-[10px] "  } > Resume </NavLink> </li>
            <li> <NavLink to='/Works' className={({ isActive }) => isActive ? "px-[24px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white hover:text-white  py-[10px] rounded-[10px]  "  } > Works </NavLink> </li>
            <li> <NavLink to='/Blogs' className={({ isActive }) => isActive ? "px-[24px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white hover:text-white py-[10px] rounded-[10px]  "  } > Blogs</NavLink> </li>
            <li> <NavLink to='/Contact' className={({ isActive }) => isActive ? "px-[24px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all  hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all hover:text-white font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  bg-white  py-[10px] rounded-[10px] "  } > Contact </NavLink> </li>
          </ul>
        </div>
      </div>
    </nav>
      
    </>
  )
}

export default Navbar
