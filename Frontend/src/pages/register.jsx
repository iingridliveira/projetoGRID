import React from 'react'
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import blogFetch from '../API/config';
const Register = () => {


const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");


  const onSubmit = async (values) => {
    console.log("Values: ", values);
    setError("");
 

    try {
      const response = await blogFetch.post("/_User", values);
    
     alert(response.data.message) 
    
    } catch (err) {
      if (err instanceof AxiosError) {
        let errResponse = JSON.parse(err.response.request.responseText);


      if (errResponse.errors && errResponse.errors.length > 0) {
   
        errResponse.errors.forEach(error => {
   
        let mensagemDeErro = error.msg;
        // @ts-ignore
        setError( <Message value2={mensagemDeErro}/>) ;
       
       ;})}
     } else if (err instanceof Error) {
          setError(err.message);
      }
       console.log("Error: ", err);
     
    }
  }
  return (
  
<div className="relative flex min-h-screen flex-col justify-center overflow-hidden  py-6 sm:py-12">


 
  <div className=" max-w-7xl mx-auto w-full-full bg-custom-g-100 lg:w-1/2 flex items-center justify-center bg-custom-g  rounded-md ">
    <div className="max-w-md w-full p-6 ">
      <h1 className="text-3xl font-semibold mb-6 text-black text-center">REGISTRAR-SE</h1>
      <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Junte-se à nossa comunidade e tenha acesso grátis a cartas para o futuro!</h1>
      <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
         
        </div>
        <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
        
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600 text-center">
       
      </div>
     <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        
          <input type="hidden" name="remember" defaultValue="true" />
          <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                  {...register('username')}
                  id="username"
                  name="username"
                  type="text"
                  required
                   placeholder="usuario123"
                  className=" bg-white mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              />
            </div>
          <div className="">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className=" bg-white mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              placeholder="usuario@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              {...register("password")}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className=" bg-white mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              placeholder="Password"
            />
          </div>
         
          <div>
            <button className="w-full  py-2 bg-custom-y text-custom-gd rounded-lg hover:bg-custom-teal p-2 rounded-md hover:bg-custom-teal focus:outline-none focus:bg-custom-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>

          </div>
        </form>
        {error && <p className="error">{error}</p>}
    
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Já tem uma conta? <a href="#" className="text-black hover:underline">Longin aquip</a>
        </p>
      </div>
    </div>
  </div>
</div>
 
  )
}
export default Register;