// eslint-disable-next-line no-unused-vars
import React from 'react'

function Product() {
  return (
    <div className="h-[90vh]">
        <div className="flex">
            <div className="flex-1 mt-[100px]">
                <h1 className="font-bold text-[150px]">Mine.</h1>
                <span className='text-5xl ml-[35px] mt-5 font-bold opacity-40'>Build the Future of </span> <br />
                <span className='text-5xl ml-[-190px] font-bold opacity-40'>Wireless</span>
                <p className='text-[20px] ml-[135px] mt-5'>By deploying a Helium Hotspot in your home, office, or <br /> elsewhere in the wild, you can provide your town with <br />wireless network coverage for low power “internet of <br />things” or cellular devices and earn Helium tokens.</p>
                <div>
                    <button className="bg-blue-600 text-1xl font-bold h-[50px] mt-10 ml-[-110px] btn w-[250px] rounded-[10px]">Learn More.</button>
                </div>
            </div>
            <div className="flex-1">
                <img className="relative w-[750px] mt-[-95px]" src='https://www.helium.com/static/images/new/miner4.png' alt="product"/>
            </div>
        </div>
        <div className='flex justify-center  mt-[60px]'>
            <div className="items-center h-[150px] w-[350px] mr-10 rounded-[10px] bg-c">
                <h3 className='font-bold mt-5'>BYE BYE GPU MINING</h3>
                <span className='opacity-80 '>Mining Helium tokens with Hotspots <br /> is done via radio technology, not <br /> expensive or wasteful GPUs.</span>
            </div>
            <div className=" h-[150px] w-[350px]  mr-10 rounded-[10px] bg-c">
                <h3 className=' mt-5 font-bold'>BUILD NETWORKS</h3>
                <span className='opacity-80 '>Hotspots work together to form a<br /> new global wireless network and<br /> undertake Proof-of-Coverage.</span>
            </div>
            <div className="justify-center h-[150px] w-[350px] rounded-[10px] bg-c">
                <h3 className=' mt-5 font-bold'>CHOOSE YOUR HARDWARE</h3>
                <span className='opacity-80 m-3'>Hotspots are built by a variety of <br />vendors to suit your needs.</span>
            </div>
        </div>
    </div>
  )
}

export default Product