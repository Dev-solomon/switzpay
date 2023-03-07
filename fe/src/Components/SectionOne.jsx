import pic from '../assets/firstpic.png';

function SectionOne(){
  return (
    <div className="flex flex-col lg:mb-10">
      <h1 className="text-2xl font-bold text-center my-6 px-4 md:text-5xl md:px-8 md:my-12 lg:px-32 lg:text-6xl lg:mt-24 lg:mb-16">
        Achieve Business & Financial{" "}
        <span className="text-regal-blue">Success</span> through our CPA
        Marketing platform
      </h1>
      <p className="text-sm text-center mb-6 px-4 md:text-xl md:px-8 md:mb-12 lg:text-2xl lg:px-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <button className="bg-regal-blue text-white mx-auto py-2 px-3 text-sm rounded-md gap-2 mb-3 md:text-xl md:py-4 md:px-6 md:mb-6 lg:mb-8">
        Get Started
      </button>
      <img src={pic} alt="picture" className="px-4 mb-6 md:px-8 lg:px-16" />
    </div>
  );
}
export default SectionOne;