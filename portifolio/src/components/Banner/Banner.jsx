import React from 'react'
import foto from '../../assets/img/foto-perfil.jpg';


function Banner() {
  return (
    <>
        <section className='banner'>
            <h2 className='banner--texto'>Seja bem vindo ,<br /> eu sou <b className='text-gradient'>Gustavo Toledo</b></h2>

            <div className='banner--div '>
                <img src={foto} />

            </div>
            
            

        </section>
    </>
  )
}

export default Banner