import pic from "../assets/element-4.png";

function RedCardTwo() {
  return (
    <div className=" bg-light-red mt-4 flex flex-col items-center py-4 rounded-[4px] md:w-[397px] md:h-[298px] md:mx-auto lg:w-[397px] lg:h-[298px]">
      <div className="w-20 h-20 bg-dark-red rounded-full flex items-center px-4 md:w-[100px] md:h-[100px] md:px-6">
        <img src={pic} alt="picture" />
      </div>
      <h4 className="text-base font-medium mt-4 md:text-xl lg:text-[22px]">
        Variety of Offers
      </h4>
      <p className="mt-4 px-6 text-center text-sm md:text-base lg:text-lg">
        Wide range of offers, which allows you to find products and services
        that align with your interests and passions.
      </p>
    </div>
  );
}

export default RedCardTwo;
