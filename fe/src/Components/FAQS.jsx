import { useState } from "react";
function FAQS({faq}) {
   const [isOpen, setIsOpen] = useState(false);

   function handleClick() {
     setIsOpen(!isOpen);
   }
  return (
    <div className="bg-white mb-1 py-5 px-4 md:px-8 md:py-9">
      <div className=" md:flex">
        <p className="text-2xl font-bold text-regal-blue md:text-[28px] md:mr-8 lg:text-[32px]">
          {faq.id}
        </p>
        <div className="flex justify-between md:justify-between">
          <h4 className="font-medium w-[75%] md:text-lg lg:text-xl">
            {faq.question}
          </h4>
          <button
            onClick={handleClick}
            className="cursor-pointer md:ml-[23rem] lg:ml-[35rem]"
          >
            {isOpen ? (
              <span className="rounded-full py-1 px-[0.45rem] bg-regal-blue text-xs text-white md:text-sm md:py-2 md:px-3">
                x
              </span>
            ) : (
              <span className="rounded-full py-1 px-[0.45rem] bg-sky-blue text-xs text-regal-blue font-bold md:text-base md:py-2 md:px-3">
                +
              </span>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <p className="text-sm pt-3 md:pl-16 text-gray-600 md:text-base md:w-[80%] lg:text-lg lg:pt-6 lg:w-auto">
          {faq.answer}
        </p>
      )}
    </div>
  );
}

export default FAQS