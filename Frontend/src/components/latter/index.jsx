

import blogFetch from '../../API/config';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import React from "react";

const Later = () => {
  const { register, handleSubmit} = useForm();
  const [latter, setLatter] = useState(null);
const onSubmit = async (values) => {
  console.log("Values: ", values);
 
    try {
        const responselatter = await blogFetch.post("/letter/creatletter", values);
    
          console.log(responselatter)
          
    } catch (error) {
      alert('Erro ao criar o produto. Por favor, tente novamente.');
    }
  }
  return (
    <>
    <div classNameName="relative flex min-h-screen flex-col justify-center overfow-hidden  py-2 sm:py-12">
   <form onSubmit={handleSubmit(onSubmit)}>
  <div className="bg-white max-w-7xl mx-auto w-full">
  
      <div className="bg-custom-g col-span-4">
        <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Carta para a autora</h2>
        <div className="grid gap-6 mb-6 grid-cols-2">
        
      
        </div>
        <div className="grid gap-6 mb-6 grid-cols-2">
          
         <div className="flex flex-col items-center">

   <input 
      className='py-4 w-full max-w-sm bg-white rounded-full px-6 placeholder:text-xs'
      type="text" 
      id="title" 
      {...register('title', { required: true })} 
    />
</div>

        </div>
        <div className="mb-6">
         
          <textarea
  className="w-full bg-white rounded-2xl placeholder:text-xs px-6 py-4"
  id="text"
  rows="20"
  {...register('text', { required: true })}
/>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all">Enviar</button>
        </div>
      </div>
    </div>
    </form>
  </div>
    </>
  );
};

export default Later;