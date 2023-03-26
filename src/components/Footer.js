import Logo from '../icons_assets/Logo .svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} 
from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    const socials = [
        {title:'Facebook', icon: faFacebook, url:'https://www.facebook.com', target: '_blank'},

        {title:'Instagram', icon: faInstagram, url:'https://www.Instagram.com', target: '_blank'},
       
        {title:'Whatsapp', icon: faWhatsapp, url:'https://www.Whatsapp.com', target: '_blank'}
    ]

    const NavList = [
        {title:'Home', url:'/', id:1},
        {title:'About', url:'about', id:2},
        {title:'Menu', url:'menu', id:3},
        {title:'Reservations', url:'reservation', id:4},
        {title:'OrderOnline', url:'order-online', id:5},
        {title:'Login', url:'login', id:6},
        // {title:'Help', url:'help', id:6},
    ]

    return ( 
            <>           
        <footer className='footer-section'>            
             <div className="footer-container">
                 <img src={Logo} alt='Little Lemon Logio'/>
                           
            <div className="footer-doormat">
                <h3>Doormat <br/> Navigation</h3>                    
                    {NavList.map((nav)=>(
                        <p key={nav.id}>
                            <a href={nav.url}>{nav.title}</a>   
                        </p>                         
                        ))}             
             </div>  

            <div className="footer-contact">
                <h3>Contact</h3>                   
                     {NavList.map((nav)=>( 
                        <li key={nav.title}>                          
                            <a  href={nav.url}>{nav.title}</a>
                         </li> 
                        ))}         
            </div>            
            
            <div className="footer-social">
                <h3>Social Media Links</h3>
                    {socials.map((social)=>(
                        <li key={social.url}>
                            <a href={social.url} target={social.target}>{social.title} <FontAwesomeIcon icon={social.icon} size='lg'/></a>
                        </li> 
                    ))}                       
            </div>
            </div>
        </footer>
            </> 
    );
}
 
export default Footer;