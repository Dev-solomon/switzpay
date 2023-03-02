import pic from '../assets/calculator.png';
function BlueCard(){
  return (
    <div className=" bg-light-blue mt-4 flex flex-col items-center py-4 rounded-[4px] md:w-[397px] md:h-[298px] md:mx-auto lg:w-[397px] lg:h-[298px]">
      <div className="w-20 h-20 bg-dark-blue rounded-full flex items-center px-4 md:w-[100px] md:h-[100px] md:px-6">
        <img src={pic} alt="picture" />
      </div>
      <h4 className="text-base font-medium mt-4 md:text-xl lg:text-[22px]">Predetermined costs</h4>
      <p className='mt-4 px-6 text-center text-sm md:text-base lg:text-lg'>
        Pay for specific actions, such as a sale or lead, rather than paying for
        impressions or clicks.
      </p>
    </div>
  );
}

export default BlueCard;