import SingleCard from "../card";
import React from "react";

const Later = () => {
  return (
    <>
    <div classNameName="relative flex min-h-screen flex-col justify-center overfow-hidden  py-2 sm:py-12">
  <div className="bg-white max-w-7xl mx-auto w-full">
  
      <div className="bg-custom-g col-span-4">
        <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Carta para a autora</h2>
        <div className="grid gap-6 mb-6 grid-cols-2">
        
      
        </div>
        <div className="grid gap-6 mb-6 grid-cols-2">
          
         <div className="flex flex-col items-center">
  <input className="py-4 w-full max-w-sm bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Titulo" />
</div>

        </div>
        <div className="mb-6">
          <textarea className="w-full  bg-white  rounded-2xl placeholder:text-xs px-6 py-4" placeholder="Carta" name="" id="" rows="20"></textarea>
        </div>
        <div className="flex justify-center">
          <button className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all"></button>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Later;