import React from 'react'
import{Routes,Route, Link} from'react-router-dom'
// import Home from './Home'
import Logo from'../assets/logo.png'
import Discover from '../Pages/Discover'
import Specialdeals from '../Pages/Specialdeals'

export default function Header() {
  return (
    <>
    <div className=' relative flex  items-center  justify-between lg:mx-[5rem] mx-[1.5rem] mt-[1rem] md:mx-[1rem] lg:mt-[2rem]  '>
          
             <i class="fa-solid fa-bars  bg-blue-500 w-10 my-0 fa-2x text-white px-2 py-1 rounded-[0.7rem] absolute right-0  lg:invisible md:visible md:absolute md:left-0"></i>
             
        <div className=' flex  items-center sm:space-x-4  space-x-2 md:absolute md:right-[20rem] lg:absolute lg:left-0'>
           <img src={Logo} alt="" />
            <h1 className=' sm:text-[1.4rem] sm:font-semibold  '>Travel Log</h1>
        </div>
        <div className=' md:flex lg:flex lg:absolute lg:left-[24rem] space-x-6 justify-center hidden md:invisible lg:visible'>
            <Link className='font-bold' to='/'>Home</Link>
            <Link className=' text-gray-400' to='/discover'>Discover</Link>
            <Link className=' text-gray-400' to='/specialdeal'>Special Deals</Link>
            <Link className=' text-gray-400' to='/contact'>Contact</Link>
        </div>
        <div className=' invisible lg:visible lg:space-x-3 md:visible md:space-x-3 md:absolute md:right-0 '>
    <button className=' font-semibold bg-white shadow-lg py-2 px-7 rounded-[2rem]  '>Login</button>
    <button className=' font-semibold bg-blue-600 py-2 px-7 text-white rounded-[2rem] '>SignUp</button>
    </div>
        {/* <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/discover' element={<Discover/>} />
            <Route path='/specialdeal' element={<Specialdeals/>} />
            <Route path='/contact' element={<Connect/>} />
        </Routes> */}
    </div>
    {/* <div className=' flex sm:space-x-6 sm:justify-center sm:invisible invisible flex-col  mx-[10rem]  relative top-10        '>
            <Link className='sm:font-bold' to='/'>Home</Link>
            <Link className=' text-gray-400' to='/discover'>Discover</Link>
            <Link className=' text-gray-400' to='/specialdeal'>Special Deals</Link>
            <Link className=' text-gray-400' to='/contact'>Contact</Link>
        </div> */}
   </>
  )
}
