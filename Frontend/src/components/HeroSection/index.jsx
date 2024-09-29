import React from 'react';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
      style={{
        backgroundImage: `url(https://i.postimg.cc/V6DjhV4y/Design-sem-nome-1.png)`,
      }}
    >
      <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen flex justify-center">
        <div className="grid grid-cols-2 gap-4 items-center z-10">
          <div className="max-w-lg text-center sm:text-left">
            <h1 className="text-9xl font-bold text-gray-100 tracking-tight">
              GRID <br className="hidden sm:blois an inexpensive way to change your looksck lg:hidden" /> 
            </h1>
            <p className="mt-4 text-gray-300">Palavras hoje, lembranças para o futuro.</p>
            <div className="flex flex-row items-center space-x-3 mt-5">
           <Link to={`/login`}>  <button  className=" bg-custom-y text-custom-gd rounded-lg hover:bg-custom-teal p-2 rounded-md hover:bg-custom-teal focus:outline-none focus:bg-custom-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Registre-se</button>
</Link>
            </div>
          </div>
          <div className="mx-0 max-w-xl rounded-2xl  bg-custom-g ">
               
             
                      <blockquote class="text-left">
            <div class="">
               <div class="relative">
              <img
                src="https://i.postimg.cc/W1STdRNq/tl-1.webp"
                alt="aji"
                class="object-cover w-full mx-auto rounded-t-2xl h-60"
              />
              <div class="rounded-t-2xl absolute bg-gradient-to-t from-custom-gd  opacity-75 inset-0 z-0"></div>
             </div>
            </div>

            <div class="relative m-5 p-5">
              <svg class="absolute left-0 w-6  fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/></svg>
             
              <svg class="absolute right-0 w-6 fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg>
            <div class="text-sm mt-5 mx-5">
                <p class="font-medium text-custom-gd">John Schaar</p>
                <p class="mt-1 text-custom-gd">O futuro não é um lugar para onde estamos indo, mas um lugar que estamos criando. Os caminhos para ele não são encontrados, mas feitos." </p>
                
              </div>
            </div>
            
              
          </blockquote>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
