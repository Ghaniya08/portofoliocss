import React from 'react'
import Image from 'next/image'
import image from "../../public/imgg.jpg"
import "./Hero.css"
const Hero = () => {
  return (
    <div className=' mainHero' id='home'>
      <div className=' texthero '>
        <h1 >Hi , I am Ghaniya< br/>  Web Developer</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis inventore vel ipsa totam tempora, cumque voluptatem sequi perferendis, in voluptas sapiente animi, provident magnam cum quae omnis perspiciatis numquam.</p>
        <button><a href="https://pk.linkedin.com/in/ghaniya-khan-138919308">Contact Me</a></button>
      </div>
      <div className="pic">
  <Image src={image} alt="my Img" className="custom-image" />
</div>
    </div>
  )
}

export default Hero
