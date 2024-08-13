import SingleCard from "../card";
import React from "react";

const Card = () => {
  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">

        <div class="bg-white max-w-7xl mx-auto w-full">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
           <SingleCard image={"https://i.postimg.cc/VvxCBjfp/OIG2.jpg"} Button={"Criar"} CardDescription={"Dê o primeiro passo e comece a criar. O futuro está esperando pelas suas ideias.."} CardTitle={"Crie uma cartar"} titleHref={"/#"} btnHref={"/#"}/>
           <SingleCard image={"https://i.postimg.cc/R04Y9Yrs/OIG2.jpg"} Button={"Criar"} CardDescription={"Comece a preencher seu quadro dos sonhos com suas maiores aspirações. Que cada imagem e palavra te guiem rumo ao seu futuro desejado.."} CardTitle={"Quadro dos sonhos"} titleHref={"/#"} btnHref={"/#"}/>
           <SingleCard image={"https://i.postimg.cc/mkkDnV2h/OIG1.jpg"} Button={"Criar"} CardDescription={"Inicie sua cápsula . Encha-a com memórias e sonhos que um dia serão um presente precioso para o seu futuro eu"} CardTitle={"Cápsula "} titleHref={"/#"} btnHref={"/#"}/>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;