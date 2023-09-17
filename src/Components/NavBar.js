import React,{useState,useEffect} from 'react';
import './NavBar.css';

export default function NavBar() {
  

      const [show,handleShow] = useState(false);

      useEffect(() => {
        window.addEventListener("scroll" ,() =>{
          if(window.scrollY > 100){
            handleShow(true);}
          else{
            handleShow(false);
          }
        });
        return() => {
          window.removeEventListener("scroll",handleShow)
        }
      }, []);

      return (
        <>
      
      <div className={`navbar ${show && "nav-black"} `}>
      
        <img className="nav-logo" 
         src="http://www.freepnglogos.com/uploads/netflix-logo-0.png" 
         alt="NETFLIX" />
        <img className="nav-avatar" 
         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
         alt="AVATAR" />

      </div>

      </>
  )
}
