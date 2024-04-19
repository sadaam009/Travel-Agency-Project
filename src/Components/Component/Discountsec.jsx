import React from 'react'
import discountimg from "../assets/disimg.png"
import frame from "../assets/Frame.png"
export default function Discountsec() {
  return (
    <div className='mt-[8rem] relative'>
        <div className=" flex justify-between">
            <div className="">
                <img className='w-[50vw] h-[100vh]' src={discountimg} alt="" />
            </div>
            <div className="w-[45%] mx-[4rem]  space-y-3">
                <p className='text-[1.2rem] font-semibold text-[#F85E9F]'>TRAVEL POINT</p>
                <h1 className='text-[2.3rem] font-bold'>We helping you find <br /> your dream location</h1>
                <p className='w-[48%]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                    of classical Latin literature from .</p>
                 <div className=" absolute bottom-[31rem] right-[11rem]">
                 <img src={frame} alt="" />
                 </div>
                    {/* price card section */}
                    <div className=" grid grid-cols-2 grid-rows-4 gap-8 pt-[5rem] ">
                        <div className=" w-[205px] h-[151px] shadow-sm border-2 border-e-gray-300
                         bg-white rounded-[1rem] text-center pt-[2rem] space-y-3">
                            <h1 className=' font-bold text-[2rem] text-orange-500'>1000+</h1>
                            <p className='1.5rem font-semibold'>Holiday Package</p>
                        </div>
                        <div className="w-[205px] h-[151px] shadow-sm border-2 border-e-gray-300 bg-white 
                        rounded-[1rem] text-center pt-[2rem] space-y-3">
                        <h1 className=' font-bold text-[2rem] text-orange-500'>150</h1>
                            <p className='1.5rem font-semibold'>Luxury Hotel</p>
                        </div>
                        <div className="w-[205px] h-[151px] shadow-sm border-2 border-e-gray-300 bg-white rounded-[1rem] 
                        text-center pt-[2rem] space-y-3">
                        <h1 className=' font-bold text-[2rem] text-orange-500'>10</h1>
                            <p className='1.5rem font-semibold'>Premium Airlines</p>
                        </div>
                        <div className="w-[205px] h-[151px] shadow-sm border-2 border-e-gray-300 bg-white
                         rounded-[1rem] text-center pt-[2rem] space-y-3">
                                <h1 className=' font-bold text-[2rem] text-orange-500'>10k+</h1>
                            <p className='1.5rem font-semibold'>Happy Customer</p>
                         </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
