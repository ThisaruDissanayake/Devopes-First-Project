import React from "react";
import "./Footer.css";
import fb from "../assets/fbimg.png";
import twitter from "../assets/twitterimg.png";
import linkedin from "../assets/linkedinimg.png";
import insta from "../assets/instaimg.png";


const Footer =()=>{
  return (
   <div className='footer'>
<div className="sb_footer_section__padding">
    <div className="sb_footer-links">
        <div className="sb_footer-links_div">
           <h4>For Business</h4>
           <a href="/employee">
            <p>Employee</p>
           </a>

           <a href="/healthplan">
            <p>Health Plan</p>
           </a>

           <a href="/individual">
            <p>Individual</p>
           </a>

        </div>
        <div className="sb_footer-links_div">
        <h4>Resources</h4>
           <a href="/resource">
            <p>Resource Center</p>
           </a>

           <a href="/resource">
            <p>Testimonialsc</p>
           </a>

           <a href="/resource">
            <p>STV</p>
           </a>
        </div>

        <div className="sb_footer-links_div">
        <h4>Partners</h4>
           <a href="/employer">
            <p>Swing Tech</p>
           </a>
        </div>

        <div className="sb_footer-links_div">
        <h4>Company</h4>
           <a href="/about">
            <p>About</p>
           </a>

           <a href="/press">
            <p>Press</p>
           </a>

           <a href="/career">
            <p>Career</p>
            </a>
            <a href="/contact">
            <p>Contact</p>
           </a>

        </div>

        <div className="sb_footer-links_div">
        <h4>Comming Soon On</h4>
           <div className="Socialmedia">
            <p><img src={fb} alt=""/></p>
            <p><img src={twitter} alt=""/></p>
            <p><img src={linkedin} alt=""/></p>
            <p><img src={insta} alt=""/></p>
           </div>
        </div>
    </div>
<hr></hr>
<div className="sb_footer-below-links">
    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
    <a href="/privacy"><div><p>Privacy</p></div></a>
    <a href="/security"><div><p>Security</p></div></a>
    <a href="/cookies"><div><p>Cookie Declaration</p></div></a>
</div>

</div>
   </div>
  )
}
export default Footer;