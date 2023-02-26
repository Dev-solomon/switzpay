import logo from '../assets/logo.png'
import { RiMenuFill, RiCloseFill } from "react-icons/ri"
import { useState } from 'react'

function Header (){
  const [menuActive, setMenuActive] = useState(false)
  return (
    <nav className="flex space-between justify-between px-10 py-4">
      <img src={logo} alt="logo"  className={`${menuActive ? "hidden" : "block"} w-40 h-[100%]`}/>
      <button
        className={`text-3xl pt-2 lg:hidden ${menuActive ? "hidden" : "block"}`}
        onClick={() => setMenuActive(true)}
      >
        <RiMenuFill />
      </button>
      <div className={`${menuActive ? "block" : "hidden"} lg:flex`}>
        <button
          className="text-3xl block lg:hidden pl-60"
          onClick={() => setMenuActive(false)}
        >
          <RiCloseFill />
        </button>
        <ul className=" lg:flex">
          <li className="p-4">
            <a href="/">Home</a>
          </li>
          <li className="p-4">
            <a href="/">About us</a>
          </li>
          <li className="p-4">
            <a href="/">Contact</a>
          </li>
          <li>
            <button className="block p-4">
              <a href="/" className="block">
                Login
              </a>
            </button>
          </li>
          <li>
            <button className="block p-4">
              <a href="/" className="block">
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