import React from 'react';
import fotoPerfil from '../assets/img/foto-perfil.jpg';
import Stack from '../components/Stack/Stack';
import '../styles/pages/sobre.scss';
import Timeline from '../components/Timeline/Timeline';

const Sobre = () => {
  return (
    <main className="sobre-container">
      {/* Seção de Introdução com Storytelling */}
      <section className="sobre">
        <div className="sobre__foto">
          <img src={fotoPerfil} alt="Foto de Gustavo Toledo" />
        </div>
        <div className="sobre__descricao">
          <h1 className="sobre__titulo text-gradient">De Processos a Código: Minha Jornada na Tecnologia</h1>
          <p className="sobre__texto">
            Sempre fui movido pela curiosidade de entender como as coisas funcionam. Essa paixão por processos, organização e clareza me guiou em uma transição de carreira decisiva para a área de tecnologia. Hoje, como estudante de Desenvolvimento de Software Multiplataforma na FATEC, encontrei no código a ferramenta ideal para transformar ideias em soluções práticas.
          </p>
          <p className="sobre__texto">
            Meu foco é o desenvolvimento Full Stack. Mergulho em tecnologias como React para criar interfaces intuitivas e em Node.js para construir a lógica robusta por trás das aplicações. Com uma base sólida em algoritmos e banco de dados, estou preparado para colaborar em equipes dinâmicas e aprender com profissionais experientes.
          </p>
        </div>
      </section>

      {/* Seção "O que eu faço" */}
      <section className="o-que-faco">
        <h2 className="section-titulo text-gradient">O que eu faço</h2>
        <ul className="o-que-faco__lista">
          <li>Desenvolvimento Front-End com <strong>JavaScript, HTML5, CSS3 e React</strong>.</li>
          <li>Desenvolvimento Back-End utilizando <strong>Node.js e Express</strong>.</li>
          <li>Modelagem e gerenciamento de Banco de Dados <strong>PostgreSQL e MongoDB</strong>.</li>
          <li>Criação de <strong>APIs REST</strong> e arquitetura de sistemas com base em <strong>MVC</strong>.</li>
          <li>Gestão de projetos com <strong>Metodologias Ágeis (Scrum, Kanban)</strong> e versionamento com <strong>Git/GitHub</strong>.</li>
        </ul>
      </section>

      {/* Seção Formação */}
      <section className="formacao">
          <h2 className="section-titulo text-gradient">Formação</h2>
          <p className="formacao__texto">
              <strong>Desenvolvimento de Software Multiplataforma</strong>
              <br />
              FATEC - Cotia | Previsão de formatura: Julho/2026
          </p>
      </section>
      <Timeline />

      {/* Seção de Habilidades/Stack */}
      <Stack className="stack--small" />

      {/* Seção Call to Action */}
      <section className="call-to-action">
        <h2 className="section-titulo text-gradient">Vamos construir algo incrível juntos?</h2>
        <p className="call-to-action__texto">
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou acredita que meu perfil se encaixa na sua equipe, vamos nos conectar!
        </p>
        <a href="mailto:guhh03odelot@gmail.com" className="call-to-action__botao">Entre em Contato</a>
      </section>

    </main>
  );
};

export default Sobre;
