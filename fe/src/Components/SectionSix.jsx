import offer from '../assets/Offers Page Desktop.png';
import Heading from './Heading';
function SectionSix(){
  return (
    <div className="px-4 md:px-8 lg:px-16 lg:mt-16">
      <Heading heading="Why Switzpay?" />
      <div className="flex flex-col mt-4 lg:flex-row lg:justify-between">
        <p className="text-sm md:text-lg lg:text-xl lg:w-[608px] lg:mr-4">
          Switzpay gives access to task that requires minimal effort, is not
          overly burdensome, and has the potential to generate significant
          revenue for users within a single month. The simplicity and efficiency
          of the task, combined with the potential for high revenue, makes it an
          attractive opportunity for those looking to earn money in a relatively
          short amount of time.
        </p>
        <div className="my-4 flex justify-center md:mt-6 lg:mt-[-65px]">
          <img
            src={offer}
            alt="offer-page"
            className="md:w-[703px] lg:w-[503px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionSix;