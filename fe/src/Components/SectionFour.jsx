import bluePic from "../assets/hierarchy.png";
import yellowPic from "../assets/wallet-add.png";
import redPic from "../assets/element-4.png";
import BlueCard from "./BlueCard";
import YellowCard from "./YellowCard";
import RedCard from "./RedCard";
import HeadingOne from "./HeadingOne";
function SectionFour() {
  return (
    <div className=" px-4 my-4 lg:px-16">
      <HeadingOne heading="Switzpay for Workers" />
      <div className="flex flex-col lg:flex-row">
        <BlueCard
          pic={bluePic}
          miniheading="Flexibility"
          paragraph="Work from anywhere, as long as you have an internet connection, which
        provides a great deal of flexibility and freedom."
        />
        <YellowCard
          pic={yellowPic}
          miniheading="High Earning Potential"
          paragraph="Higher commission than other affiliate marketing programs, which
        provides you with a significant income stream."
        />
        <RedCard
          pic={redPic}
          miniheading="Variety of Offers"
          paragraph="Wide range of offers, which allows you to find products and services
        that align with your interests and passions."
        />
      </div>
    </div>
  );
}

export default SectionFour;
