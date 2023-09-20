// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { navLinks } from '../Constant';
// eslint-disable-next-line no-unused-vars
import { close, menu } from '../assets';

function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [toggle, setToggle] = useState(null);

  const setNavToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
    } else {
      setToggle(id);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between backdrop-blur-xl backdrop-saturate-50 bg-black/30 ">
        <div className="m-3">
          <img
            src="https://www.helium.com/static/images/logosymbol.svg"
            alt="logo"
          />
        </div>
        <div className="flex flex-2 m-auto xs:hidden">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <>
                <li key={link.id} onClick={() => setNavToggle(link.id)}>
                  <a className="text-2x1 flex" href={`#${link.id}`}>
                    {link.title}{' '}
                    <img className="mt-2" src={link.icon} alt="icon" />
                  </a>
                </li>
                <div className={`${toggle === link.id ? 'block' : 'hidden'} absolute bg-black-gradient  center  mt-[180px] min-w-[400px] rounded-xl sidebar`}>
                  {navLinks
                    .find((navLink) => navLink.id === link.id)
                    .links.map((link) => (
                      <>
                        <li className='center m-5' key={link.id} onClick={() => setNavToggle(link.id)}>
                          <span className="text-2x1 items-center font-bold justify-center flex" href={`#${link.id}`}>
                            {link.title}{' '}
                          </span>
                          <span> {link.content} </span>
                        </li>
                      </>
                    ))}
                </div>
              </>
            ))}
          </ul>
          <h3 className="text-2x1 items-center font-bold ml-[100px]">
            Who Uses Helium?.
          </h3>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
