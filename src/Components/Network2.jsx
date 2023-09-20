// eslint-disable-next-line no-unused-vars
import React from 'react'

function Network2() {
  return (
    <div className='h-[60vh] bg-white'>
       <p className='text-black opacity-70 text-2xl'>Hundreds of companies and thousands of developers are already building on <br /> The Peoples Network, the world largest LoRaWAN network and fastest <br /> growing cellular network.</p> <br />
       <p className='text-black opacity-70 text-2xl mt[60px]'>Thousands of existing solutions, sensors, devices and gateways can be easily <br /> configured to run on both the Helium cellular and global LoRaWAN networks.</p>
       <div className="flex mt-[30px] justify-center items-center ">
          <button className="bg-green-600 text-1xl font-bold h-[50px] btn w-[250px] rounded-[10px]">Use the Network </button>
        </div>
       <div className='flex justify-center  mt-[90px]'>
          <div className=" h-[200px] w-[350px]  mr-10 rounded-[10px] bg-slate-200">
            <p className='font-bold text-black mt-7'>AN OPEN ALTERNATIVE</p>
            <p className="text-black mt-3 opacity-70">The People Network is built on<br /> Open Source technology and <br /> governed by its worldwide <br />community with stewardship from <br /> the Helium Foundation.</p>
          </div>
          <div className=" h-[200px] w-[350px]  mr-10 rounded-[10px] bg-slate-200">
            <p className='font-bold text-black mt-7'>SCALABLE & AFFORDABLE</p>
            <p className="text-black mt-3 opacity-70">Say goodbye to expensive cell <br /> contracts. On Helium a sensor can  <br /> cost cents to run a year.</p>
          </div>
          <div className=" h-[200px] w-[350px]  mr-10 rounded-[10px] bg-slate-200">
            <p className='font-bold text-black mt-7'>LORAWAN-COMPATIBLE</p>
            <p className="text-black mt-3 opacity-70">Utilize thousands of existing sensors, chipsets and MCUs for streamlined development.</p>
          </div>
       </div>                               
    </div>
  )
}

export default Network2