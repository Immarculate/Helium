// eslint-disable-next-line no-unused-vars
import React from 'react';
import { price } from '../Constant';

function Pricing() {
  return (
    <div className="h-[180px] w-full flex backdrop-blur-xl backdrop-saturate-50 items-center bg-zinc-800 ">
      <div className="flex ml-[300px]">
        <div className="flex mt-[-35px] ml-[-20px] items-center ">
          <span className='text-1xl opacity-40 font-bold'>NETWORK AT A GLANCE</span>
        </div>

        <div>
          <ul className="flex m-10">
            {price.map((link) => (
              <li className="m-10" key={price}>
                <span className='text-1xl opacity-40 font-bold'>{link.title}</span>
                <br />
                <span className='text-3xl  text-white font-bold'>{link.content}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex mt-[-10px] ml-[-20px] items-center ">
          <button className="bg-blue-600 text-1xl font-bold h-[50px] btn w-[250px] rounded-[10px]">View Network Coverage</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
