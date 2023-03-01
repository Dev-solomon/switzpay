import BlueCardTwo from "./BlueCardTwo";
import YellowCardTwo from "./YellowCardTwo";
import RedCardTwo from "./RedCardTwo";
function SectionTwo(){
  return (
    <div className=" px-4 my-4 lg:px-16">
      <h3 className="text-lg font-medium text-center md:text-2xl">
        Switzpay for Advertisers
      </h3>
      <div className="flex flex-col lg:flex-row">
        <BlueCardTwo />
        <YellowCardTwo />
        <RedCardTwo />
      </div>
    </div>
  );
}

export default SectionTwo;