import React, { useState, useContext } from "react";
import { BillForm } from "../bill/BillForm";
import { BillContext } from "../../context/Context";
import "./Header.css";


export function Header() {
  const [mostrarForm, setMostrarForm] = useState(false);
  const { conta, handleChange, handleSubmit } = useContext(BillContext);

  const toggleFormConta = () => {
    setMostrarForm(!mostrarForm);
  };

  return (
    <div className="header">
      <button onClick={toggleFormConta}>Add Conta</button>
      {mostrarForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <BillForm
              conta={conta}
              onChange={handleChange}
              onSubmit={(e) => {
                handleSubmit(e);
                setMostrarForm(false);
              }}
            />
            <button onClick={toggleFormConta}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}