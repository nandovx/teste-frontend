import React, { useState } from 'react';
import './Form.css';
import nitronewsIcon from '../../Utils/Icon/nitronews.svg';
import axios from 'axios';
import loadingGif from '../../Utils/gifs/output-onlinegiftools.gif'; // Import the loading GIF

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);  // State to manage loading indicator

  const unavailableEmails = ['teste@exemplo.com', 'joao@exemplo.com', 'maria@acme.net'];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(String(password));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset success message when the form is submitted
    setSuccessMessage('');

    let isValid = true;
    const newErrors = {};

    // Nome Validation
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório.';
      isValid = false;
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório.';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido.';
      isValid = false;
    } else if (unavailableEmails.includes(formData.email)) {
      newErrors.email = 'Este email já está cadastrado.';
      isValid = false;
    }

    // Senha Validation
    if (!formData.senha) {
      newErrors.senha = 'Senha é obrigatória.';
      isValid = false;
    } else if (!validatePassword(formData.senha)) {
      newErrors.senha = 'A senha deve ter no mínimo 8 caracteres, incluindo 1 letra maiúscula, 1 letra minúscula e 1 número.';
      isValid = false;
    }

    // Confirmação de Senha Validation
    if (!formData.confirmacaoSenha) {
      newErrors.confirmacaoSenha = 'Confirmação de senha é obrigatória.';
      isValid = false;
    } else if (formData.confirmacaoSenha !== formData.senha) {
      newErrors.confirmacaoSenha = 'As senhas não coincidem.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setLoading(true);  // Show loading indicator
      try {
        const response = await axios.post('http://localhost:8080', formData, {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'ECA1AB4CE8583613A2C759B445E98'
          }
        });
        const result = response.data;
        setSuccessMessage('Cadastro realizado com sucesso!');
        console.log(result);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);  // Hide loading indicator
      }
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <div className="container">
      <img src={nitronewsIcon} alt="NitroNews" />
      <h1>Comece agora</h1>
      <p>Se cadastre rapidamente e comece hoje mesmo!</p>
      <form id="registrationForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            required
            value={formData.nome}
            onChange={handleInputChange}
          />
          <span className="error-message">{errors.nome}</span>
        </div>
        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error-message">{errors.email}</span>
        </div>
        <div className="input-group">
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            required
            value={formData.senha}
            onChange={handleInputChange}
          />
          <span className="error-message">{errors.senha}</span>
        </div>
        <div className="input-group">
          <input
            type="password"
            id="confirmacaoSenha"
            name="confirmacaoSenha"
            placeholder="Confirme sua senha"
            required
            value={formData.confirmacaoSenha}
            onChange={handleInputChange}
          />
          <span className="error-message">{errors.confirmacaoSenha}</span>
        </div>
        <button type="submit" className={loading ? 'button-loading' : ''} disabled={loading}>
          {loading ? <img src={loadingGif} alt="Carregando..." className="loading-gif" /> : 'CADASTRAR'}
        </button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Form;
