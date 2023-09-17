import React from 'react';
import './Footer.css';

function footer() {
  return (
    <div>
        <div className="footer">
            <div className="container">
              <div className='row'>
                <div className="footer-col">
                  
                <ul>
                    <li><a href="#">about us</a></li>  
                    <li><a href="#">our services</a></li>      
                    <li><a href="#">privacy policy</a></li>      
                    <li><a href="#">affiliate program</a></li>      
                </ul>
            </div>
            <div className="footer-col">
                 
                <ul>
                    <li> <a href="#">FAQ</a></li>   
                    <li> <a href="#">Investment Relations</a></li>      
                    <li> <a href="#">ways to watch</a></li>      
                    <li> <a href="#">Privacy</a></li>      
                          
                </ul>
            </div>
            <div className="footer-col">
                  
                <ul>
                    <li> <a href="#">Account</a></li>      
                    <li> <a href="#">Corporate Information</a></li>      
                    <li> <a href="#">Help Center</a></li>      
                    <li> <a href="#">Media Center</a></li>     
                </ul>
            </div>
            <div className="footer-col">
                <ul>
                    <li> <a href="#">Jobs</a></li>      
                    <li> <a href="#">Terms of Use</a></li>      
                    <li> <a href="#">Cookie Preferences</a></li>      
                    <li> <a href="#">Contact Us</a></li>     
                </ul>
                
            </div>
          </div>
        </div>           
      </div>      
    </div>
  )
}

export default footer