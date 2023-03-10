import DashboradHeading from "./DashboradHeading"
import green from '../assets/dash-green.png'
import blue from '../assets/dash-blue.png'
import red from '../assets/dash-red.png'
import pic from '../assets/dash-bigpic.png'
function DashboardMain() {
  return (
    <div className="px-4 my-3 md:my-6 md:px-8 lg:px-16">
      <DashboradHeading heading="Dashboard" />
      <div className="flex flex-col mt-3 md:flex-row md:justify-between md:mt-6 md:mb-6">
        <img src={green} alt="pic" className="mb-3 md:mb-0 ml-1 md:w-[35%] lg:w-[30%]" />
        <img src={blue} alt="blue" className="mb-3 md:mb-0 ml-1 lg:w-[30%]" />
        <img src={red} alt="red" className="mb-3 md:mb-0 lg:w-[30%]" />
      </div>
      <img src={pic} alt="" />
    </div>
  );
}

export default DashboardMain