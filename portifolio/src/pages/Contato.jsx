import React, { useState } from 'react';
import '../styles/pages/contato.scss';

function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    // Mock API call
    setTimeout(() => {
      if (!formData.name || !formData.email || !formData.message) {
        setStatus({ loading: false, success: false, error: 'Por favor, preencha todos os campos.' });
        return;
      }
      // Simple email regex for validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setStatus({ loading: false, success: false, error: 'Por favor, insira um e-mail válido.' });
        return;
      }

      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', message: '' });

      // Clear success toast after a few seconds
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    }, 1500);
  };

  return (
    <div className="contato-container">
      <h2 className="section-titulo text-gradient">Entre em Contato</h2>
      <p className="contato-texto">Preencha o formulário abaixo e retornarei o mais breve possível.</p>

      <form onSubmit={handleSubmit} className="contato-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu.email@exemplo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Como posso te ajudar?"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="contato-botao" disabled={status.loading}>
          {status.loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>

      {/* Toast Notifications */}
      {status.error && <div className="toast toast--error">{status.error}</div>}
      {status.success && <div className="toast toast--success">Mensagem enviada com sucesso!</div>}
    </div>
  );
}

export default Contato;
