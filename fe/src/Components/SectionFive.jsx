import svg from "../assets/Vector.png";
import Heading from "./Heading";
function SectionFive() {
  return (
    <div className="px-4 my-8 md:mt-16 md:px-8 lg:px-16">
      <Heading heading="How it works" />
      <div className="flex flex-col mt-4 lg:flex-row lg:justify-between">
        <p className="text-sm font-normal md:text-lg lg:text-xl lg:pt-2 lg:w-[608px]">
          Our platform provides a unique opportunity for workers to increase
          their earning potential by completing simple tasks that are made
          available to them after they register.
        </p>
        <div className="flex flex-col items-center mt-5 md:mt-10 md:flex-row md:justify-center lg:mt-[-45px]">
          <div className="text-center md:mx-6">
            <p className="w-[100px] h-[100px] bg-sky-blue text-base font-bold rounded-full pt-10 mb-3">
              1
            </p>
            <p>Signup</p>
          </div>
          <img src={svg} alt="image" className="my-3 md:rotate-[270deg]" />
          <div className="text-center md:ml-6 md:mr-3">
            <p className="w-[100px] h-[100px] bg-sky-blue text-base font-bold rounded-full pt-10 mb-3">
              2
            </p>
            <p>Work on Offers</p>
          </div>
          <img src={svg} alt="image" className="my-3 md:rotate-[270deg]" />
          <div className="text-center md:mx-6">
            <p className="w-[100px] h-[100px] bg-sky-blue text-base font-bold rounded-full pt-10 mb-3">
              3
            </p>
            <p>Get Paid</p>
          </div>
        </div>
      </div>
      <p className="text-xl font-medium mt-8 md:text-[28px] md:mt-10 md:w-[505px]">
        Do you want to earn money by doing online activities?
      </p>
      <button className="bg-regal-blue w-[104px] p-3 rounded-md mt-3 md:my-5 md:w-[180px] md:py-4 md:px-8">
        <a href="/" className="text-sm text-white md:text-xl">
          Be a Worker
        </a>
      </button>
    </div>
  );
}

export default SectionFive;
