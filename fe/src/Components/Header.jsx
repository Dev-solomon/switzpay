import logo from '../assets/logo.png'
import { RiMenuFill, RiCloseFill } from "react-icons/ri"
import { useState } from 'react'

function Header (){
  const [menuActive, setMenuActive] = useState(false)
  return (
    <header className="flex justify-between lg:border-b border-grey-500">
      <img
        src={logo}
        alt="logo"
        className=" pl-4 py-8 w-[30%] md:w-auto h-[100%] md:pl-8 lg:pl-16"
      />
      <button
        className={`text-3xl pt-3 pr-4 md:pr-8 md:pt-2 lg:pr-16 lg:hidden ${
          menuActive ? "hidden" : "block"
        }`}
        onClick={() => setMenuActive(true)}
      >
        <RiMenuFill />
      </button>
      <nav
        className={`${
          menuActive ? "block" : "hidden"
        } h-64 absolute rounded-md right-4 top-10 lg:relative lg:right-0 lg:top-0 bg-regal-blue w-48 lg:flex lg:bg-white lg:w-auto lg:h-5`}
      >
        <button
          className=" text-2xl block absolute top-4 right-[18%] bg-white rounded-sm lg:hidden"
          onClick={() => setMenuActive(false)}
        >
          <RiCloseFill />
        </button>
        <ul className=" pt-16  pl-0 lg:flex lg:pt-8 lg:pl-0 lg:pr-16">
          <li className="bg-white w-20 mx-auto text-center py-1 rounded-sm text-sm mb-2 lg:pr-6 lg:py-3 lg:text-left lg:text-base lg:mb-0">
            <a href="/">Home</a>
          </li>
          <li className="bg-white w-20 mx-auto lg:w-[80%] text-center py-1  rounded-sm text-sm mb-2 lg:px-2 lg:py-3 lg:text-left lg:text-base lg:mb-0">
            <a href="/" className="lg:w-20 lg:block">
              About Us
            </a>
          </li>
          <li className="bg-white w-20 mx-auto py-1 mb-2 rounded-sm text-sm lg:w-[80%] text-center lg:px-2 lg:py-3 lg:text-left lg:text-base lg:mb-0">
            <a href="/">Contact</a>
          </li>
          <li className="bg-white w-20 mx-auto py-1 mb-2 rounded-sm text-sm lg:w-[80%] text-center lg:pl-10 lg:pr-4 lg:py-1 lg:text-left lg:text-base lg:mb-0">
            <button className=" lg:border lg:border-regal-blue lg:rounded-md">
              <a
                href="/"
                className=" lg:block lg:py-2 lg:px-4 lg:text-regal-blue"
              >
                Login
              </a>
            </button>
          </li>
          <li className="bg-white w-20 mx-auto py-1 mb-2 rounded-sm text-sm lg:w-[80%] text-center lg:py-1 lg:text-left lg:text-base lg:mb-0">
            <button className=" lg:bg-regal-blue lg:rounded-md">
              <a href="/" className=" lg:block lg:py-2 lg:px-4 lg:text-white">
                Signup
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;