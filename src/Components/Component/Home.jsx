 import React,{useEffect} from 'react'

import Bag from '../assets/portfolio.png'
import map from '../assets/layer.png'
import rec1 from '../assets/Rectangle 2.png'
import rec2 from '../assets/Rectangle 1.png'
import rec3 from '../assets/Rectangle 3.png'
import group from'../assets/Group.png'  
import group1 from'../assets/Groupone.png' 
 import group2 from'../assets/Grouptwo.png' 
 import group3 from'../assets/Groupthree.png' 
import group4 from'../assets/Groupfour.png' 
import frameone from '../assets/Frameone.png'
import frame2 from '../assets/Frametwo.png'
import frame3 from '../assets/Framethree.png'

import Header from './Header'

export default function Home() {
  
  // useEffect(()=>{
  //   document.body.style.backgroundColor='#E8E8E8'
  // })
  return (
    <div className=' '>
   
   <Header/>
      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row mt-[7rem] sm:mx-[5rem] md:mx-[5rem] lg:relative md:relative ">
         {/* Section Left */}
      
        <div className="lg:w-[30%] lg:space-y-8 md:space-y-8 md:mt-[37rem] mt-[20rem] lg:mt-0 md:w-[87vw] md:mx-auto">
        <div className=" md:mx-auto border-2 border-gray-100  shadow-xl flex space-x-3 items-center bg-white rounded-[1rem]  md:py-1 py-2 px-1 w-[53%] lg:w-[70%] mx-auto lg:mx-0 my-10 lg:my-0  ">
          <h1 className='text-[#F9558F]  font-semibold md:py-4 md:ml-[3rem] md:text-[1.8rem] lg:text-[1rem]'>Explore The World!</h1>
          <img className=' w-[35px]' src={Bag} alt="" />
        </div>
          <h1 className=' lg:text-[4rem] text-[3rem] md:text-[3.7rem] text-center lg:text-left md:text-center font-bold'>Travel  <span className='text-[#F9558F]'>top destination</span>of the world</h1>
          <p className=' text-center lg:text-left py-4 sm:py-0 md:text-center'>We always make our customer happy by providing as many choices as possible</p>
          
          <div className=" flex flex-col lg:flex-row md:flex-row space-y-10 lg:space-y-0 md:space-y-0 lg:space-x-5 md:space-x-5 md:ml-[10rem] md:mt-6 lg:ml-0">
          <button className=' bg-blue-600 lg:py-2 py-4 px-7 text-white rounded-[2rem] lg:px-4 lg:text-[1rem] text-2xl  '>Get Started</button>
          <button className=' drop-shadow-lg sm:py-3 py-4 px-7 rounded-[3rem] bg-gray-100  '><i class="fa-solid fa-play bg-blue-500 px-3 text-center py-2 rounded-[50%] text-white"></i>           Watch Demo</button>
          </div>
     
        </div>
         {/* Section Left */}
         
          {/* Section Right*/}
          <div className="lg:ml-[10rem] md:ml-[3rem] md:mx-auto">

            <div className=" lg:w-[100%] flex justify-center ">
               <img className='' src={map} alt="" />
            </div>
            <div className=" lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-row-2 lg:mx-[3rem]
             lg:absolute md:absolute md:top-[3rem] lg:top-[-1.5rem] lg:items-center  grid grid-cols-2 grid-rows-1 grid-row-2 
             absolute top-[11rem]  items-center mx-[3.4rem] md:mx-0  ">
              <img className=' lg:w-[230px] md:w-[230px] w-[150px]' src={rec2} alt="" />
              <img className=' lg:w-[230px] md:w-[230px] w-[150px] relative lg:top-[10rem] md:top-[10rem] top-[6rem] ml-[2rem]' src={rec3} alt="" />
              <img className=' lg:w-[230px] md:w-[230px] w-[150px]' src={rec1} alt="" />
            </div>
            <div className='  relative lg:static md:static'>
        <img className='w-[90px] lg:w-[115px] sm:w-[110px]   lg:absolute lg:top-[16rem] lg:right-[33rem] absolute top-[2rem] md:absolute md:top-[20rem] md:right-[34rem]    ' src={frameone} alt="" />
        <img className=' w-[110px] lg:w-[140px] md:w-[140px]  lg:absolute lg:top-[32rem] lg:right-[7rem] md:top-[36rem] md:right-[7rem]   absolute  top-[13rem] right-[2rem]' src={frame2} alt="" />
        <img className=' w-[110px] lg:w-[230px] md:w-[230px] md:absolute md:top-[28rem] md:left-[30rem]  lg:absolute  lg:top-[22rem] lg:left-[62rem] absolute right-[-2rem] bottom-[-13rem]' src={frame3} alt="" />
      </div>
          </div>




      </div>
      <div className=" flex sm:mt-[11rem] sm:justify-center sm:items-center sm:space-x-[7.8rem] 
      space-y-[3rem] sm:space-y-0 sm:flex-row flex-col mx-[6rem] sm:mx-0 mt-[4rem]   ">
        <img src={group} alt="" />
        <img src={group1} alt="" />
        <img src={group2} alt="" />
        <img src={group3} alt="" />
        <img src={group4} alt="" />
      </div>
      
    </div>
  )
}
