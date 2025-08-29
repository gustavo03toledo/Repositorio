import React from 'react';
import './../../styles/componets/timeline.scss';

const semestersData = [
    {
      cycle: "1º ciclo",
      subjects: [
        "Algoritmo e Lógica de Programação", "Desenvolvimento Web I", "Design Digital",
        "Engenharia de Software I", "Modelagem de Banco de Dados", "Sistemas Operacionais e Redes de Comp."
      ]
    },
    {
      cycle: "2º ciclo",
      subjects: [
        "Técnica de Programação I", "Desenvolvimento Web II", "Matemática para computação",
        "Engenharia de Software II", "Banco de Dados – Relacional", "Estrutura de Dados"
      ]
    },
    {
      cycle: "3º ciclo",
      subjects: [
        "Técnica de Programação II", "Desenvolvimento Web III", "Álgebra Linear",
        "Gestão Ágil de Projetos de Software", "Banco de Dados – Não relacional", "Interação Humano Computador", "Inglês I"
      ]
    },
    {
      cycle: "4º ciclo",
      subjects: [
        "Integração e entrega Contínua", "Laboratório de Desenvolvimento Web", "Internet das Coisas e Aplicações",
        "Programação para Dispositivos Móveis I", "Estatística Aplicada", "Experiência do Usuário", "Inglês II"
      ]
    },
    {
      cycle: "5º ciclo",
      subjects: [
        "Computação em Nuvem I", "Aprendizagem de Máquina", "Laboratório de Desenvolvimento Móvel",
        "Programação para Dispositivos Móveis II", "Segurança no Des. de Aplicações", "Fundamentos da Redação técnica", "Inglês III"
      ]
    },
    {
      cycle: "6º ciclo",
      subjects: [
        "Computação em Nuvem II", "Processamento de Linguagem Natural", "Laboratório de Des. Multiplataforma",
        "Mineração de Dados", "Qualidade e Testes de Software", "Ética Profissional e Patente", "Inglês IV"
      ]
    }
  ];
  
const COMPLETED_SEMESTERS = 5;

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {semestersData.map((semester, index) => {
          const isCompleted = index < COMPLETED_SEMESTERS;
          return (
            <div key={index} className={`timeline-item ${isCompleted ? 'completed' : ''}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title text-gradient">{semester.cycle}</h3>
                <ul className="timeline-subjects">
                  {semester.subjects.map((subject, subIndex) => (
                    <li key={subIndex}>{subject}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
