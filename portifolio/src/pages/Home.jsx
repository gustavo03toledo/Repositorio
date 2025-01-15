import React from 'react';

import Banner from '../components/Banner/Banner';
import Stack from '../components/Stack/Stack';
import Projetos from '../components/Projetos/projetos';



function Home () {
    return(
        <div className='container-home'>
           <Banner />
           <Stack />
           <Projetos />
        </div>
    )
}


export default Home;