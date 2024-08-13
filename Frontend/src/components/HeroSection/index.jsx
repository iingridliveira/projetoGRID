import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const HeroSection = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)`,
      }}
    >
      <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen flex justify-center">
        <div className="grid grid-cols-2 gap-4 items-center z-10">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
              A smile <br className="hidden sm:block lg:hidden" /> is an inexpensive way to change your looks
            </h2>
            <p className="mt-4 text-gray-300">Goals are just dreams with deadline</p>
            <div className="flex flex-row items-center space-x-3 mt-5">
              <a
                href="https://www.behance.net/ajeeshmon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-600 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <svg className="w-4 fill-gray-100" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.072 9.301s1.892-.147 1.892-2.459c0-2.315-1.548-3.441-3.51-3.441H0v12.926h6.454s3.941.129 3.941-3.816c-.001-.001.171-3.21-2.323-3.21zM2.844 5.697h3.61s.878 0 .878 1.344c0 1.346-.516 1.541-1.102 1.541H2.844V5.697zm3.427 8.332H2.844v-3.455h3.61s1.308-.018 1.308 1.775c0 1.512-.977 1.669-1.491 1.68zm9.378-7.341c-4.771 0-4.767 4.967-4.767 4.967s-.326 4.941 4.767 4.941c0 0 4.243.254 4.243-3.437H17.71s.072 1.391-1.988 1.391c0 0-2.184.152-2.184-2.25h6.423c.001-.001.709-5.612-4.312-5.612zm1.941 3.886h-4.074s.266-1.992 2.182-1.992 1.892 1.992 1.892 1.992zm.507-6.414H12.98v1.594h5.117V4.16z" />
                </svg>
              </a>
              <a
                href="https://codepen.io/uidesignhub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-gray-900 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <svg className="h-5 fill-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 15.047a.846.846 0 0 1-.008.112l-.006.037-.016.072c-.003.015-.008.028-.013.042l-.022.063-.02.042c-.008.02-.018.038-.028.057l-.025.04a.769.769 0 0 1-.108.135l-.035.034a.812.812 0 0 1-.049.04l-.038.03c-.005.003-.01.008-.015.01l-9.14 6.095a.858.858 0 0 1-.954 0l-9.14-6.094-.014-.01a.807.807 0 0 1-.088-.071c-.012-.01-.023-.022-.034-.034-.015-.015-.03-.03-.043-.046a.707.707 0 0 1-.066-.09 1.038 1.038 0 0 1-.054-.096l-.019-.042a.868.868 0 0 1-.022-.063c-.005-.014-.01-.027-.013-.042-.007-.023-.01-.048-.015-.072l-.007-.037A.847.847 0 0 1 2 15.047V8.953c0-.038.003-.075.008-.112l.007-.037c.004-.024.008-.049.015-.072a.774.774 0 0 1 .145-.295.978.978 0 0 1 .029-.038l.043-.046.034-.034a.834.834 0 0 1 .088-.07c.005-.003.009-.008.014-.01l9.14-6.095a.86.86 0 0 1 .954 0l9.14 6.094c.005.003.01.008.015.01l.038.03a.839.839 0 0 1 .05.041l.034.034a.735.735 0 0 1 .108.136l.025.04.029.056.019.042.022.063c.005.014.01.027.013.042.007.023.011.048.016.072l.006.037a.834.834 0 0 1 .008.112v6.094ZM3.719 10.562v2.876L5.869 12l-2.15-1.438Zm7.422-2.088V4.465l-6.734 4.49 3.008 2.011 3.726-2.492Zm8.452.48L12.86 4.465v4.009l3.726 2.492 3.007-2.012ZM4.407 15.046l6.734 4.489v-4.009l-3.726-2.492-3.008 2.012Zm8.453.48v4.009l6.733-4.49-3.007-2.01-3.726 2.491ZM12 9.966 8.96 12 12 14.033 15.04 12 12 9.967Zm8.281 3.472v-2.876L18.131 12l2.15 1.438Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/ajeemon?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-400 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <img
                  className="w-3"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cueGxpbmsub3JnLzIwMDAveGxpbmsiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTE1LjUgMTRhOC44IDIuOCAwIDAgMCAxLTEuMi0yLjQgMS42IDIuNiAwIDAgMCAyLjUgMy42aDEuN2EwLjUgMCAwIDAgMS43LTEuOCAxLjUgMS41IDAgMCAwIDEuMSAwIDAgMCAxLjcgMS44aDEuM2E0LjkgNC45IDAgMCAxLS4yLTFjLTEuNyAxLjktMy41IDMuNS0zLjUgMy4zYzAtMS4xLTEuMS0yLjUtMi41LTMuNUw4LjcgMTIgNTEuOCA4LjUgMTIuNSA2LjEgMCAwIDAgMy4xIDEuN2MwIDEuNiwgMS44LDEuNiwyLjQsMS44YTQuMiA0LjIgMCAwIDAgMS4xLTMuOCwxLjc4IDAgMCAwIDAgMS4wMjM3IDAgMCAwIDAuOTIgMi42QzAuOCA4LjUgMTMuOSAwLjkgMTMuNSA4Ljk2IDcuNTUgOC44IDIuOCAyLjggMS43IDAgMCAwIDAgMS41LTMuMkExLjcgMS43IDAgMCAwIDE0LjUgMTcuOXoiLz48L3N2Zz4="
                  alt="Twitter Logo"
                />
              </a>
            </div>
          </div>
          <div className="mx-0 max-w-xl flex rounded-2xl bg-custom-g">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide>
                      <blockquote class="text-left">
            <div class="">
               <div class="relative">
              <img
                src="https://scontent.fccj2-2.fna.fbcdn.net/v/t31.18172-8/11262421_868445743194927_5746052500134236265_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=84hLHR-HqyMAX9c9k1y&_nc_ht=scontent.fccj2-2.fna&oh=00_AT_lIRJ3LcWYTagkUdWdrG_eb-iwHbQS_pPNAv7JDcg2Eg&oe=634DB7A3"
                alt="aji"
                class="object-cover w-full mx-auto rounded-t-2xl h-60"
              />
              <div class="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
             </div>
            </div>

            <div class="relative m-5 p-5">
              <svg class="absolute left-0 w-6  fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/></svg>
             
              <svg class="absolute right-0 w-6 fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg>
            <div class="text-sm mt-5 mx-5">
                <p class="font-medium text-white">Ajimon</p>
                <p class="mt-1 text-gray-300">CEO Of Marketing </p>
              </div>
            </div>
            
              
          </blockquote>
              </SwiperSlide>
              {/* Adicione mais SwiperSlides conforme necessário */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
