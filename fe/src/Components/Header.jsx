import logo from '../assets/logo.png'
import { RiMenuFill, RiCloseFill } from "react-icons/ri"
import { useState } from 'react'

function Header (){
  const [menuActive, setMenuActive] = useState(false)
  return (
    <nav className="flex justify-between lg:border-b border-grey-500">
      <img
        src={logo}
        alt="logo"
        className={`${
          menuActive ? "hidden" : "block"
        } pl-4 py-8 w-42 h-[100%] md:pl-8 lg:pl-16`}
      />
      <button
        className={`text-3xl pt-3 pr-4 md:pr-8 lg:pr-16 lg:hidden ${
          menuActive ? "hidden" : "block"
        }`}
        onClick={() => setMenuActive(true)}
      >
        <RiMenuFill />
      </button>
      <div
        className={`${
          menuActive ? "block" : "hidden"
        } h-screen bg-regal-blue w-full lg:flex lg:bg-white lg:w-auto lg:h-5`}
      >
        <button
          className="text-3xl block absolute top-12 right-[18%] bg-white rounded-sm lg:hidden"
          onClick={() => setMenuActive(false)}
        >
          <RiCloseFill />
        </button>
        <ul className="pt-40 pl-24 lg:flex lg:pt-8 lg:pl-0 lg:pr-16">
          <li className="bg-white sm:w-[80%] md:w-[80%] text-center py-2 rounded-md text-lg mb-4 lg:pr-6 lg:py-3 lg:text-left lg:text-base lg:mb-0">
            <a href="/">Home</a>
          </li>
          <li className="bg-white sm:w-[80%] md:w-[80%] text-center py-2 rounded-md text-lg mb-4 lg:px-2 lg:py-3 lg:text-left lg:text-base lg:mb-0">
            <a href="/" className='w-20 block'>About Us</a>
          </li>
          <li className="bg-white sm:w-[80%] md:w-[80%] text-center py-2 rounded-md text-lg mb-4 lg:px-2 lg:py-3 lg:text-left lg:text-base lg:mb-0">
            <a href="/">Contact</a>
          </li>
          <li className="bg-white sm:w-[80%] md:w-[80%] text-center py-2 rounded-md text-lg mb-4 lg:pl-10 lg:pr-4 lg:py-1 lg:text-left lg:text-base lg:mb-0">
            <button className=" lg:border lg:border-regal-blue lg:rounded-md">
              <a
                href="/"
                className=" lg:block lg:py-2 lg:px-4 lg:text-regal-blue"
              >
                Login
              </a>
            </button>
          </li>
          <li className="bg-white sm:w-[80%] md:w-[80%] text-center py-2 rounded-md text-lg mb-4 lg:py-1 lg:text-left lg:text-base lg:mb-0">
            <button className=" lg:bg-regal-blue lg:rounded-md">
              <a href="/" className="lg:block lg:py-2 lg:px-4 lg:text-white">
                Signup
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Header;