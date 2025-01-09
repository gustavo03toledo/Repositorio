import React from 'react';

import Banner from '../components/Banner/Banner';
import Stack from '../components/Stack/Stack';
import Projetos from '../components/Projetos/projetos';



function Home () {
    return(
        <>
           <Banner />
           <Stack />
           <Projetos />
        </>
    )
}


export default Home;