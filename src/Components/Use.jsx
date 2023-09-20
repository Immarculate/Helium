// eslint-disable-next-line no-unused-vars
import React from 'react';
import Network from './Network';

function Use() {
  return (
    <div >
        <div className="absolute">
            <img className='border-transparent h-[90vh]' src="https://www.helium.com/static/images/new/useheader.jpg" alt="use.img" />
        </div>
        <div className="absolute">
          <h1 className='font-bold text-[150px] text-black text-6xl mt-[550px] mx-[70vh]'>Use.</h1>
          <p className='text-black text-[50px] font-bold mt-3 opacity-40'>Massive, Decentralized </p>
          <p className='text-black text-[50px] font-bold mt-[-15px] opacity-40'>Connectivity</p>
        </div>
        <Network />
    </div>
  )
}

export default Use
