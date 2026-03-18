import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Projetos from '../components/Projetos/Projetos';

function ProjetosPage() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2500,
            delay: 400,
            reset: true
        });

        sr.reveal('.project-cards', { delay: 400, origin: 'left' });
    }, []);

    return(
        <div style={{ paddingTop: '50px', minHeight: '80vh' }}>
           <Projetos />
        </div>
    )
}

export default ProjetosPage;
