import pic from '../assets/info.png';
function InfoSection() {
  return (
    <div className="px-4 bg-deep-blue p-2 flex flex-col items-center">
      <div className='flex'>
        <p className='md:mt-1'>
          <img src={pic} alt="info-pic" />
        </p>
        <p className='text-white text-sm text-center ml-3 mb-2 md:text-lg'>
          Info!
        </p>
      </div>

      <p className="text-sm text-white text-center md:text-lg md:w-[60%]">
        In the age of technology, there is constant access to vast amounts of
        information.
      </p>
    </div>
  );
}

export default InfoSection