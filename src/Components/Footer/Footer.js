import React from 'react'
import './../../Components/CSS/Footer.css';
const Footer = () => {
  return (
  <div className="container">
<footer>
    <div className='upfooter'>
    <div className='location'>
        <div>NIP 8992786490</div>
        <div>KRS 0000608120</div>
        <div>REGON 363987723</div>
        </div>
        <div className='someinfo'>
            <div className='pointer icn'></div>
            <div className='big'>JarlTeam</div>
            <div className='small'>Netherland</div>
            <div className='small'>Einhoven</div>
            <div className='small'>5612 AZ</div>
        </div>
        <div className='pages'>
        <div className='pages-menu'>
        <a href="/" class="links">
                    Home
		    	</a>
                <a href="/register" class="links">
               Register
			    </a>
                <a href="/services" class="links">
                Services
		    	</a>
               <a href="/login" class="links">
               Login
			    </a>
                <a href="/about" class="links">
               About
			    </a>
        </div>
        </div>
    </div>

    <div className='footerlist'>
        <div className='center'>
             <h4 className='title'>JarlTeam 2022 © All right reserved</h4>
            <div className='fuck'>
                 <a href="/" class="links">
                    TOS
		    	</a>
               <a href="/" class="links">
               Privacy Policy
			    </a>
            </div>
        </div>
        <div className='social'>
            <a href="/home" class="icons instagram"/>
            <a href="/home" class="icons facebook"/>
            <a href="/home" class="icons telegram"/>
            <a href="/home" class="icons linkedin"/>
            
        </div>
        <div className='letsfckschool'>
                 <h2 className='title2'>
                 +48 666 666 666
		    	</h2>
                <div class="title2">
                    JarlTeam@protonmail.com
		    	</div>
            </div>
        
    </div>
</footer>
    
  </div>
  )
}
export default Footer;