// eslint-disable-next-line no-unused-vars
import React from 'react';
import { learn, involve, social, intouch } from '../constant';

function FooterBox() {
  return (
    <div className="bg-black flex-row h-[70vh] items-center justify-center">
      <div className="flex justify-center ">
        <div>
          <p className="text-2xl ml-[-60px] font-bold mt-[80px]">
            Get Ecosystem Updates to Your Inbox
          </p>
        </div>
        <div className="ml-[250px] mt-[80px] mb-[70px]">
          <input
            className="h-[40px] w-[300px] rounded-[6px]"
            placeholder="e.g. Hello@Helium.com"
          />
          <button className="bg-blue-700 btn text-white h-[40px] ml-[10px] w-[150px] rounded-[6px] items-center">
            Join Mailing List
          </button>
        </div>
      </div>
      <hr className="w-[1220px] ml-[230px] opacity-40" />
      <div className="flex justify-center justify-around m-[60px] ">
        <div className="ml-[60px]">
          <p className="font-bold mr-[75px]">LEARN</p>
          <ul>
            {learn.map((link) => (
              <li key={link.id}>
                <a className="text-2x1 flex txt-hove opacity-40" href={`#${link.id}`}>
                  {link.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold mr-10">GET INVOLVED</p>
          <ul>
            {involve.map((link) => (
              <li key={link.id}>
                <a className="text-2x1 flex txt-hove opacity-40" href={`#${link.id}`}>
                  {link.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-[]">
          <p className="font-bold mr-3">SOCIAL</p>
          <ul>
            {social.map((link) => (
              <li key={link.id}>
                <a className="text-2x1 flex txt-hove opacity-40" href={`#${link.id}`}>
                  {link.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" mr-[80px]">
          <p className="font-bold ml-[]">GET IN TOUCH</p>
          <ul>
            {intouch.map((link) => (
              <li key={link.id}>
                <a className="text-2x1 txt-hove flex opacity-40" href={`#${link.id}`}>
                  {link.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-[1220px] ml-[230px] opacity-40" />
      <div className="flex justify-center  mt-[45px] mr-[1000px]">
        <img
          className="h-[60px]"
          src="https://www.helium.com/static/images/logo-horizontalwhite.svg"
          alt="foot-logo"
        />
      </div>
    </div>
  );
}

export default FooterBox;
