import React from "react";
import { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  // Função para tratar o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Dados coletados
    const formData = {
      name,
      email,
      phone,
      date,
      cep,
      street,
      number,
      district,
      city,
    };

    // Salvar os dados no Local Storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Redirecionamento para a página "/info"
    navigate("/info");
  };

  return (
    //Html formulário
    <div id="cad-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Nome Completo"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="detalhes">
          <label>
            <input
              type="tel"
              name="phone"
              placeholder="Digite seu telefone"
              pattern="\d{10,11}"
              title="Digite um número de telefone com DDD, com 10 dígitos para fixos ou 11 dígitos para celulares."
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            <span>Nascimento:</span>
            <input
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <div>
            <label>
              <span>Endereço:</span>
            </label>
            <input
              type="number"
              name="cep"
              placeholder="CEP"
              pattern="\d*"
              title="Por favor, insira apenas números."
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div id="endereco">
            <label>
              <input
                type="text"
                name="street"
                placeholder="Logradouro"
                onChange={(e) => setStreet(e.target.value)}
              />
            </label>
            <label>
              <input
                type="number"
                name="number"
                placeholder="N° da Residência"
                pattern="\d*"
                title="Por favor, insira apenas números."
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <label>
              <input
                type="text"
                name="district"
                placeholder="Bairro"
                onChange={(e) => setDistrict(e.target.value)}
              />
            </label>
            <label>
              <input
                type="text"
                name="city"
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button type="submit">Concluir</button>
      </form>
    </div>
  );
};

export default Form;
