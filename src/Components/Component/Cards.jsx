import React from 'react'
import img1 from "../assets/rec1.png"
import img2 from "../assets/rec2.png"
import img3 from "../assets/rec3.png"
export default function Cards() {
  return (
    <div className=' mt-[6rem] '>
        <div className="flex  items-center justify-between mx-[14rem]">
            <div className=" ">
                <p className=' font-["Poppins", sans-serif;] text-[1.4rem] font-semibold text-[#F85E9F]'>Top Destination</p>
                <h1 className='text-[1.9rem] font-bold  '>Explore top destination</h1>
            </div>

            <div className=" flex space-x-[2rem]">
            <div className=' bg-[#FFFFFF] border-2 border-gray-100 py-5 px-6 rounded-[50%]'>  <i class="fa-solid fa-arrow-left"></i></div>
            <div className=' bg-[#5D50C6] py-5 px-6 rounded-[50%]'><i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
        <div className=" flex justify-center items-center space-x-[2rem] mt-[4rem]">
          <div className=" w-[300px] rounded-[1rem] h-[440px] bg-white  shadow-lg">
          <img src={img3}alt="" />

            <div className="mt-[1rem] space-y-3">
             
               <div className='flex justify-between px-[1rem]'>
                 <h1 className='text-[1rem]  font-bold'>Paradise Beach, <br /> Bantayan Island</h1>
                 <h1 className=' font-bold text-[#F85E9F]'>$550.16</h1>
               </div>
                 <p className='text-gray-400 pl-4' >Roma,Italy</p>
                 <p className='pl-4 font-bold text-orange-600'>5.0 <i class="fa-solid fa-star"></i></p>
               </div>
          </div>
          <div className=" w-[300px] rounded-[1rem] h-[440px] bg-white shadow-lg">
          <img src={img1}alt="" />

        

             <div className="mt-[1rem] space-y-3">
 
               <div className='flex justify-between px-[1rem]'>
                  <h1 className='text-[1rem]  font-bold'>Ocean with full <br />of Colors</h1>
                  <h1 className=' font-bold text-[#F85E9F]'>$900.6</h1>
              </div>
               <p className='text-gray-400 pl-4' >Maldives</p>
               <p className='pl-4 font-bold text-orange-600'>4.8 <i class="fa-solid fa-star"></i></p>
           </div>
          </div>
          <div className=" w-[300px] rounded-[1rem] h-[440px] bg-white  shadow-lg">
          <img src={img2}alt="" />
        
      <div className="mt-[1rem] space-y-3">
 
         <div className='flex justify-between px-[1rem]'>
              <h1 className='text-[1rem]  font-bold'>Mountain View,<br /> Above the cloud</h1>
              <h1 className=' font-bold text-[#F85E9F]'>$150.99</h1>
        </div>
     <p className='text-gray-400 pl-4' >United Arab Emeries</p>
     <p className='pl-4 font-bold text-orange-600'>4.3<i class="fa-solid fa-star"></i></p>
   </div>
          </div>
        </div>
    </div>
  )
}
