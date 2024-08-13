import SingleCard from "../card";
import React from "react";

const Card = () => {
  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">

        <div class="bg-white max-w-7xl mx-auto w-full">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
           <SingleCard image={"https://i.ibb.co/r2zns1m/image-01.jpg"} Button={"View Details"} CardDescription={"Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."} CardTitle={"aaaaaaaaa"} titleHref={"/#"} btnHref={"/#"}/>
           <SingleCard image={"https://i.ibb.co/r2zns1m/image-01.jpg"} Button={"View Details"} CardDescription={"Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."} CardTitle={"aaaaaaaaa"} titleHref={"/#"} btnHref={"/#"}/>
           <SingleCard image={"https://i.ibb.co/r2zns1m/image-01.jpg"} Button={"View Details"} CardDescription={"Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."} CardTitle={"aaaaaaaaa"} titleHref={"/#"} btnHref={"/#"}/>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;