// eslint-disable-next-line no-unused-vars
import React from 'react'

function Body() {
  return (
    <div className='flex h-[83vh] '>
        <div className='flex-1 mt-[200px]  '>
            
               <button className=' bg-red-600 text-white h-[40px] ml-[180px] w-[600px] rounded-[10px] items-center mb-5'>
                 <span className="font-bold mt-2">Helium is now on Solana!</span> {' '} <span>The Helium Network has completed its migration.</span>
               </button><br />
              <div>
                <h1 className='font-bold text-6xl ml-[60px]'>People-Powered</h1>
                <h1 className='font-bold text-6xl ml-[-125px]'> Networks.</h1>
              </div>
              <div className='mt-[15px] ml-[-30px] justify-center items-start'>
                <span className='font-bold text-3xl opacity-40'>Start a Wireless Revolution</span>
                <p className='text-[20px] ml-[230px] justify-center mt-5 items-start w-[500px]'>The Helium Network represents a paradigm shift for </p>
                <p className='text-[20px] ml-[162px] justify-center mt-1 items-start w-[500px]'>decentralized wireless infrastructure.</p>
              </div>
             <div className='ml-[-210px]'>
                <button className='mt-9 bg-blue-600 btn text-white h-[55px] w-[100px] rounded-[10px]'><h3 className='font-bold'>Mine</h3></button>
                <button className='mt-9 ml-3 bg-green-600 btn text-white h-[55px] w-[100px] rounded-[10px]'><h3 className='font-bold'>Use</h3></button>
             </div>
        </div>
        <div className='flex-1 xs:'>
            <div className='absolute'>
                <img className='mt-[30px] ml-[90px] h-[700px]' src='https://www.helium.com/static/images/new/base.png' alt="body-img"/>
            </div>
            <div>
               <img className='relative h-[300px] mt-[225px] ml-[320px]' src='https://www.helium.com/static/images/new/topmain.png' alt='img'/>
            </div>
            <div>
               <img className='mt-[-200px] ml-[150px] h-[400px] relative  skew-x-[-55deg] skew-y-[20deg] hidden' src='https://www.helium.com/static/images/new/linesnon.svg' alt='loading'/>
            </div>
            <div>
               <img className='relative h-[285px] mt-[-280px] ml-[200px] ' src='https://www.helium.com/static/images/new/marker1.svg' alt='location'/> 
            </div>
        </div>
    </div>
  )
}

export default Body