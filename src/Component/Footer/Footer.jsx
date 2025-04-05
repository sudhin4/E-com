import '../Footer/Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";





function Footer(){
    return(
        <>
        <div className='whole_footer'>
        <div className="heading">
            <h1 className="LogonameHeading">E-com</h1>
        </div>
        <div className="paragraph_footer">
            <h2 className='shopwithcon'>Buy and Sell with confidence</h2>
            <p className='sidecontent'>📦Quality product, 💳Secure payment and 🚚Fast shipping.</p>
        </div>
        <div className='Links_for_any'>
            <div className="Quickslinks">
                <h2 className="quick_links">Quick Links</h2>
                <div className='linksdivv'>
                   <li className='link contact'>Contact Us</li>
                    <li className='link about'>About Us</li> 
                </div>
                
            </div>
            <div className="socialMediaLinks">
                <h2 className='externallinks'>Externals Links</h2>
                <div className='sociallinkdivv'>
                    <a href="https://www.linkedin.com/in/suthin-k-s-876402281/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><li className='socialmedia linkedin'><FaLinkedin className='iconss'/></li></a>
                    <a href="https://github.com/sudhin4"><li className='socialmedia github'><FaGithub className='iconss'/></li></a>
                    <a href="mailto:sudhinnaveen38@gmail.com" className='socialmedia Mail'><SiGmail className='iconss'/></a>
                    <li className='socialmedia instagram'><FaInstagram className='iconss'/></li>
                </div>
                
            </div>
        </div>

        <p className='copyright'>2025 @Copyrights all claimed</p>
        

        </div>
        
        </>
    );
}
export default Footer;