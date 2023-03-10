import redPic from "../assets/hierarchy.png";
import yellowPic from "../assets/status-up.png";
import bluePic from "../assets/calculator.png";
import BlueCard from "./BlueCard";
import YellowCard from "./YellowCard";
import RedCard from "./RedCard";
import HeadingOne from "./HeadingOne";
function SectionTwo() {
  return (
    <div className=" px-4 my-4 lg:px-16">
      <HeadingOne heading="Switzpay for Advertisers" />
      <div className="flex flex-col lg:flex-row">
        <BlueCard
          pic={bluePic}
          miniheading="Predetermined costs"
          paragraph="Pay for specific actions, such as a sale or lead, rather than paying for impressions or clicks."
        />
        <YellowCard
          pic={yellowPic}
          miniheading="Increased efficiency"
          paragraph="Focus on converting leads rather than acquiring them, making the advertising process more efficient."
        />
        <RedCard
          pic={redPic}
          miniheading="Flexibility"
          paragraph="Test multiple offers and campaigns with minimal risk, which helps to optimize marketing strategy for maximum returns."
        />
      </div>
    </div>
  );
}

export default SectionTwo;
