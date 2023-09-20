// eslint-disable-next-line no-unused-vars
import React from 'react';

function Owner() {
  return (
    <div className='bg-black h-[100vh]'>
        <div className='h-[50%] overflow-hidden' >
            <img className=' justify-center ml-[650px] mt-[60px] mb-10 h-[80px]' src='https://www.helium.com/static/images/new/uselogos/white/lonestar.svg' alt='lonestar' />
            <p className='font-bold text-[27px] text-white'>With Helium, we can easily deploy a network of gateways to provide <br /> coverage around a ranch or area of interest instead of waiting months or <br /> years for a cellular tower to be built, which ultimately may never <br /> happen.”</p>
        </div>

        <div>
            <div>
              <h1 className='text-white font-bold justify-flexstart text-6xl'>Latest News</h1>
            </div>
            <div className='flex items-center justify-center overflow-hidden'>
                <div className="box-bg-1 w-[250px] h-[180px] box m-5 justify-center rounded-[15px]">
                    <span className='mb-[-20px]'>Network Scalability</span>
                    <p className='font-bold text-[18px] text-white'>Helium Network boosts speed and reliability with upgrade to Solana Blockchain</p>
                </div>
                <div className="box-bg-2 w-[250px] h-[180px] box m-5 rounded-[15px]" >
                    <span>Mobile Carrier</span>
                    <p className='font-bold text-[18px] text-white'>Nova Labs and T-Mobile Collaborate on Cryptocarrier, Helium Mobile</p>
                </div>
                <div className="box-bg-3 w-[250px] h-[180px] m-5 box rounded-[15px]">
                    <span>Coverage Integration</span>
                    <p className='font-bold text-[18px] text-white'>Helium Connects <br /> Senet Customers in <br /> NYC</p>
                </div>
                <div className="box-bg-4 w-[250px] h-[180px] m-5 box rounded-[15px] justify-center">
                    <span className='mt-5'>Roaming Partner</span>
                    <p className='font-bold text-[18px] text-white'>Actility and Helium Announce Roaming Integration</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Owner