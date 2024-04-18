import React from "react";
import "./Card.css";

const Card = () => {
  // Busca dos dados
  const formData = JSON.parse(localStorage.getItem("formData")) || {};

  return (
    //Html do card
    <div className="card-container">
      <div className="usuario">
        <h2>Usuário</h2>
        <div>
          <p>{formData.name}</p>
          <p>
            {new Date(formData.date).toLocaleDateString("pt-BR", {
              timeZone: "UTC",
            })}
          </p>
        </div>
        <div>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
        </div>
      </div>
      <div className="endereco-container">
        <h4>Informações de endereço</h4>
        <div className="endereco">
          <div>
            <p>Logradouro:</p>
            <p>N° da Residência:</p>
            <p>Bairro:</p>
            <p>Cidade:</p>
            <p>CEP:</p>
          </div>
          <div>
            <p>{formData.street}</p>
            <p>{formData.number}</p>
            <p>{formData.district}</p>
            <p>{formData.city}</p>
            <p>{formData.cep}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
