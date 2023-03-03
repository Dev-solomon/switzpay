import svg from '../assets/Vector.png';
function SectionThird(){
return (
  <div className="px-4 my-8 md:mt-16 md:px-8 lg:px-16">
    <h3 className="text-lg font-medium md:text-2xl lg:text-[28px]">
      How it works
    </h3>
    <div className="flex flex-col mt-4 lg:flex-row lg:justify-between">
      <p className="text-sm font-normal md:text-lg lg:text-xl lg:pt-2 lg:w-[608px]">
        Advertisers willing to test, carry out surveys and get users more closer
        to their products simply send a message via the chat box or fill the
        contact form and receive a response within 48hrs.
      </p>
      <div className="flex flex-col items-center mt-5 md:mt-10 md:flex-row md:justify-center lg:mt-[-45px]">
        <div className="text-center md:mx-6">
          <p className="w-[100px] h-[100px] bg-sky-blue text-base font-bold rounded-full pt-10 mb-3">
            1
          </p>
          <p>Signup</p>
        </div>
        <img src={svg} alt="image" className="my-3 md:rotate-[270deg]" />
        <div className="text-center md:mx-6">
          <p className="w-[100px] h-[100px] bg-sky-blue text-base font-bold rounded-full pt-10 mb-3">
            2
          </p>
          <p>Post Offers</p>
        </div>
        <img src={svg} alt="image" className="my-3 md:rotate-[270deg]" />
        <div className="text-center md:mx-6">
          <p className="w-[100px] h-[100px] bg-sky-blue text-base font-bold rounded-full pt-10 mb-3">
            3
          </p>
          <p>Get Results</p>
        </div>
      </div>
    </div>
    <p className="text-xl font-medium mt-8 md:text-[28px] md:mt-10 md:w-[505px]">
      Do you want clients, subscribers or customers?
    </p>
    <button className="bg-regal-blue w-[134px] p-3 rounded-md my-3 md:my-5 md:w-[223px] md:py-4 md:px-8">
      <a href="/" className="text-sm text-white md:text-xl">
        Be an Advertiser
      </a>
    </button>
  </div>
);
}

export default SectionThird;