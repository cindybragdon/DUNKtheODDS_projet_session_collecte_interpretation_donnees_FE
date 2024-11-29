import React from 'react';
import Carousel from '../components/carousel.tsx';
import BoutonLogIn from '../components/boutonLogIn.tsx';
import BoutonSignIn from '../components/boutonSignIn.tsx';


function Home() {

    return(
        <div className='d-flex justify-content-center align-items-center p-5 '>
            <div className='d-flex flex-rows justify-content-center align-items-center p-5 '>

                    <BoutonLogIn/>
                    <Carousel/>
                    <BoutonSignIn/>
        
            </div>
        </div>
    )
}

export default Home;