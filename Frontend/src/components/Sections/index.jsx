import SingleCard from "../card";
import React from "react";

const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] text-black border border-pink-500 ">
        <div className="container border border-pink-500 mx-20 ">
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