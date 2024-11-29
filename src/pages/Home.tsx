import React from 'react';
import Carousel from '../components/carousel.tsx';
import BoutonLogIn from '../components/boutonLogIn.tsx';
import BoutonSignIn from '../components/boutonSignIn.tsx';


function Home() {

    return(
        <div className='textStyle d-flex flex-column   justify-content-center align-items-center p-4 '>

            <div className='textStyle d-flex flex-rows justify-content-center align-items-center p-5 '>

                    <BoutonLogIn/>
                    <Carousel/>
                    <BoutonSignIn/>
        
            </div>
            <div className='d-flex w-25 justify-content-center align-items-center font-family: "Space Grotesk", serif;'>
                <img className='w-25 img-fluid' src={'./images/icone.png'}/><h1 className='text-white'>UNKtheODDS</h1>
            </div>
        </div>
    )
}

export default Home;