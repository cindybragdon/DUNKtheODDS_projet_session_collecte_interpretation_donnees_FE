import React, { useEffect } from "react";
import SidebarComponent from "../components/sideBar";
import Footer from "../components/footer";

const Contact = () => {
    
    return (
        <div>

                    <SidebarComponent />
                  
        <div className='textStyle d-flex flex-column   justify-content-center align-items-center p-4'>
            
            <div className='d-flex w-25 justify-content-center align-items-center font-family: "Space Grotesk", serif; '>
            <img className='w-25 img-fluid' src={'./images/icone.png'} alt="k"/><h1 className='text-white'>UNKtheODDS</h1>
        </div>
        <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Votre nom:</label> <br></br>
          <input type="text" id="name" placeholder="Votre nom" /><br></br>
        </div>
        <div>
          <label htmlFor="email">Email:</label> <br></br>
          <input type="email" id="email" placeholder="Votre email" /> <br></br>
        </div>
        <div>
          <label htmlFor="message">Message:</label> <br></br>
          <textarea id="message" placeholder="Votre message"></textarea> <br></br>
        </div>
        <div>
          <button type="submit">Envoyer </button>
        </div>
      </form>
      <br></br><br></br><br></br><br></br><br></br>
    </div>
        </div> 
        <Footer/>
        </div> 
    )
}


export default Contact;
