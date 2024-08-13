import React from 'react'
import Header from '../../components/header'
import Example from '../../components/sectioninicial'
import Later from '../../components/latter'
import Footer from '../../components/footer'


const Home= () => {
  return (
  <> 
   <Header name={"Imagens"} name1={"Sobre"} name2={"Contatos"}/>
   
   <Example />
   <Later/>
   <Footer/>
   </>
  )
}

export default Home