import BlueCard from "./BlueCard";
import YellowCard from "./YellowCard";
import RedCard from "./RedCard";
function SectionTwo(){
  return (
    <div className=" px-4 my-4 lg:px-16">
      <h3 className="text-lg font-medium text-center md:text-2xl lg:text-[28px] lg:text-left">
        Switzpay for Advertisers
      </h3>
      <div className="flex flex-col lg:flex-row">
        <BlueCard />
        <YellowCard />
        <RedCard />
      </div>
    </div>
  );
}

export default SectionTwo;