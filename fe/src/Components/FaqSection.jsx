//  import { useState } from "react";
 import faqs from "../data/faq";
 import FAQS from "./FAQS";
 function FaqSection(){
 
 return (
   <div>
     <h3 className=" px-4 font-medium pb-1 md:px-8 md:text-2xl md:pb-3 lg:px-16 lg:text-[28px]">Frequently Asked Questions</h3>
     <div className="bg-sky-blue p-4 md:px-8 py-10 lg:px-16">
       {faqs.map((faq, index) => (
         <FAQS key={index} faq={faq} />
       ))}
     </div>
   </div>
 );
 }
 export default FaqSection;