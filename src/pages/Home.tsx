import React from 'react';
import Carousel from '../components/carousel.tsx';
import BoutonLogIn from '../components/boutonLogIn.tsx';
import BoutonSignIn from '../components/boutonSignIn.tsx';


function Home() {

    return(
        <div className='d-flex flex-rows justify-content-center mt-50'>

                <BoutonLogIn/>
                <Carousel/>
                <BoutonSignIn/>
       
        </div>
    )
}

export default Home;