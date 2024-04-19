import React from 'react'
import bokingimg from "../assets/booking.png"
import destinationimg from "../assets/destination.png"
import cloudyimg from "../assets/cloudy.png"
export default function Service() {
  return (
    <div className='mt-[9rem] flex justify-between mx-[5rem] items-center'>
        <div className=''>
            <p className=' text-3xl text-[#F85E9F]'>Services</p>
            <h1 className='text-[2rem] font-bold'>Our top value  categories for you</h1>
        </div>
        <div className="flex  justify-between items-center space-x-[3rem] ">
            <div className=" w-[265px] h-[350px] bg-white shadow-xl  rounded-[1rem] border-2 border-gray-300">
                <div className=" text-center my-[4rem] space-y-7 mx-10">
                    <img className=' mx-auto' src={bokingimg} alt="" />
                    <h1 className='text-[1.5rem]  font-semibold'>Best Tour Guide</h1>
                    <p>Square, was moving across the sand in their direction.</p>
                </div>
            </div>
            <div className=" w-[265px] h-[350px] bg-white shadow-xl  rounded-[1rem] border-2 border-gray-300">
            <div className=" text-center my-[4rem] space-y-7 mx-10">
                    <img className=' mx-auto' src={destinationimg} alt="" />
                    <h1 className='text-[1.5rem]  font-semibold'>Weather Forecast</h1>
                    <p>What looked like a small patch of purple grass, above five feet.</p>
                </div>
            </div>
            <div className=" w-[265px] h-[350px] bg-white shadow-xl rounded-[1rem] border-2 border-gray-300 ">
            <div className=" text-center my-[4rem] space-y-7 mx-10">
                    <img className=' mx-auto' src={cloudyimg} alt="" />
                    <h1 className='text-[1.5rem]  font-semibold'>Best Tour Guide</h1>
                    <p>What looked like a small patch of purple grass, above five feet.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
