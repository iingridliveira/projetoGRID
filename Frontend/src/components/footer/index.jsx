import React from 'react'

export const Footer = () => {
  return (
   
    <footer class="relative bg-custom-g pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-custom-gd">"Vamos manter contato! !</h4>
        <h5 class="text-lg mt-0 mb-2 text-custom-gd">
          Encontre-me em qualquer uma dessas plataformas; respondemos em 1-2 dias úteis.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-dribbble"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-custom-gd text-sm font-semibold mb-2">Links Úteis</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-custom-gd hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Sobre mim</a>
              </li>
              <li>
                <a class="text-custom-gd hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">CV</a>
              </li>
              <li>
                <a class="text-custom-gd hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>

            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-custom-gd text-sm font-semibold mb-2">Other Resources</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-custom-gd hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a class="text-custom-gd hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a class="text-custom-gd hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a class="text-custom-gd hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"></hr>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-custom-gd font-semibold py-1">
          Copyright © <span id="get-current-year">2021</span>
          <a href="https://www.creative-tim.com/product/notus-js" class="text-custom-gd hover:text-gray-800" target="_blank"> Notus JS by </a>
          <a href="https://www.creative-tim.com?ref=njs-profile" class="text-custom-gd hover:text-blueGray-800">Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}
export default Footer;