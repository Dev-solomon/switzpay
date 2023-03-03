import pic from '../assets/star.png';
import picture from '../assets/quote.png';
function SectionSeven (){
  return (
    <div className="px-4 my-6 md:px-8 md:mt-10 lg:px-16">
      <h3 className="text-lg font-medium md:text-2xl lg:text-[28px]">
        Reviews from Our Customers
      </h3>
      <div className="mt-3 flex flex-col md:flex-row md:justify-between">
        <img
          src={pic}
          alt="star"
          className="md:w-[373px] md:h-[300px] md:mt-10 md:pr-2 lg:w-auto lg:h-auto"
        />
        <div className="flex flex-col py-3 lg:flex-row lg:mt-36">
          <div className="bg-sky-blue py-2 px-1 rounded-sm md:w-[400px] md:rounded lg:w-[350px] lg:h-[200px] lg:rounded-md lg:mr-6">
            <img src={picture} alt="quotation" />
            <p className="pt-4 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
            </p>
            <h4 className="font-medium pt-2 md:text-lg lg:text-xl">
              Amad Diallo
            </h4>
          </div>
          <div className="bg-sky-blue py-2 px-1 mt-3 rounded-sm md:w-[400px] md:rounded md:mt-10 lg:w-[350px] lg:h-[200px] lg:mt-0 lg:rounded-md">
            <img src={picture} alt="quotation" />
            <p className="pt-4 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
            </p>
            <h4 className="font-medium pt-2 md:text-lg lg:text-xl">
              Amad Diallo
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSeven;