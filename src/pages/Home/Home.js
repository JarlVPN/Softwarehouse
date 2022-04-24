import React from 'react'
import './App.css';
import './chuj.svg'
import './Animation.css'
import './../../index.css'
import video from "./../../images/video.mp4";
import { render } from "react-dom"




const Home = () => {
  return (
    
<div className="App">
            <video autoPlay loop muted id='video'>
                <source src={video} type='video/mp4'/>
            </video>
        
      <header className="Nav">

        
    <div className='yes text-focus-in'>
    <div className="hero-text">
                <h1></h1>
                <h1><span className="blue">Software </span> House</h1>
                <p>Guarantee of execution of the order within <span className="blue1">30 Days, </span> otherwise money back.</p>
            </div>
      </div>
    <a href="roxy.pl"><div className="text2 buttonguton "><p className='center'>Get Started</p></div></a>

      

    <div className='text-focus-in text element1  '>
    <h2>#TITLE</h2>
    <h3 className='text'>Web & Mobile Software House</h3>
    <p className='p'>Implement solutions with impact. Digitize all aspects of your business and gain the technological advantage cooperating with commerce transformation experts.</p>

    <div className='text-focus-in text'>
    <div className='features img'>Napierdalanie Responsywnych stron całymi dniami</div>
    <div className='features img'>Tworzenie błędów które pozniej naprawiamy</div>
    <div className='features img'>Robienie Exploitów w kodzie</div>
    </div>


    </div>

    <div className='pis App text-focus-in'>
      <div className='noclass'></div>
    <div className='element2'><h2>Jebane responsywne strony</h2>
    <h3 className='text'>Ecommerce</h3>
    <p className='p'>We build online stores that are limited only by your imagination. We optimize them in terms of marketing, because each store must be able to sell. We use batch methods, and if you use these methods, we write the basics of the modules as needed. 
      </p></div>

    <div className='text-focus-in text'>

      
    </div>

      
    </div>

      </header>
    </div>
  )
}
export default Home;