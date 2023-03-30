import logo from '../assets/logo.png';
import {
  RiMenuFill,
  RiCloseFill,
  RiNotification2Line,
  RiArrowDownSLine,
} from "react-icons/ri";
import { useState } from "react";
import pic from '../assets/dash-pic.png';

function DashboardHeader() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className="px-4 flex justify-between py-6 m-0 w-screen md:px-8 lg:px-16">
      <img
        src={logo}
        alt="logo"
        className="w-[30%] h-[100%] md:w-auto lg:w-auto lg:mt-4"
      />

      <p className=" hidden md:block md:mt-3 md:text-sm lg:text-base lg:mt-5 lg:pl-80">
        Total Earnings:{" "}
        <span className="bg-light-green md:p-2 md:text-base md:mx-2 md:rounded-sm lg:text-lg">
          $48.2
        </span>
      </p>

      <button
        className={`${menuActive ? "hidden" : "block"} text-3xl lg:hidden`}
        onClick={() => setMenuActive(true)}
      >
        <RiMenuFill />
      </button>
      <nav
        className={`${
          menuActive ? "block" : "hidden"
        } flex flex-col bg-regal-blue h-72 rounded-md absolute right-7 lg:relative lg:block lg:bg-white lg:flex-row lg:h-auto`}
      >
        <button
          className="text-2xl mt-3 ml-36 lg:hidden"
          onClick={() => setMenuActive(false)}
        >
          <RiCloseFill className="bg-white rounded-sm" />
        </button>
        <ul className="flex flex-col-reverse m-4 lg:flex-row lg:mt-3 lg:mx-0">
          <li className="text-sm bg-white rounded-md mt-3 p-2 lg:hidden">
            <p>
              Total Earnings: <span className="font-bold">$48.2</span>
            </p>
          </li>
          <li className="text-sm bg-white rounded-md mt-3 p-2 lg:p-0 lg:text-xl lg:text-regal-blue lg:mr-10 ">
            <a href="/"> Dashboard </a>
          </li>
          <li className="text-sm bg-white rounded-md mt-4 p-2 lg:mt-3 lg:p-0 lg:text-xl lg:mr-10">
            <a href="/"> Offers </a>
          </li>
          <li>
            <button className="text-2xl hidden lg:block lg:mt-[-1.5rem] lg:mr-5 lg:pt-4">
              <span className="bg-red-700 text-white text-[0.5rem] rounded-full py-[3px] px-[5px] w-2 lg:mr-[-1.5rem] lg:mt-5">
                4
              </span>
              <RiNotification2Line className="lg:mt-[-1rem]" />
            </button>
          </li>
          <li>
            <span className="bg-red-700 text-white text-[0.5rem] rounded-full py-[3px] px-[6px] ml-6 translate-y-1 block w-[1.1rem] lg:hidden">
              4
            </span>
            <img src={pic} alt="profile picture" className="" />
          </li>
          <li className='lg:ml-1 mt-3'>
            <button className="hidden lg:block lg:text-xl">
              <RiArrowDownSLine />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DashboardHeader