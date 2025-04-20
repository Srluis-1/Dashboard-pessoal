import React, { useState } from "react";
import { BillForm } from "../bill/BillForm";

export function Header() {
  const [mostrarForm, setMostrarForm] = useState(false);
   const [conta, setConta] = useState({
          tipo: "",
          valor: 0,
          vencimento: "",
      })
      
      const [contas, setContas] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConta({
        ...conta, [name]: value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()

    if (!conta.tipo || !conta.valor || !conta.vencimento) {
        alert("Preencha todos os campos")
        return
    }
    const novasContas = [...contas, { ...conta, id: Date.now(), status: "pendente" }]
    setContas(novasContas)
    localStorage.setItem("contas", JSON.stringify(novasContas))
    setConta({
        tipo: "",
        valor: "",
        vencimento: "",
    })
}

  
  const toggleFormConta = () => {
    setMostrarForm(!mostrarForm);
  };

 
  const handleMostrarForm = () => {
    setMostrarForm(false);
  };

  return (
    <div>
      <div>
        <button onClick={toggleFormConta}>Add Conta</button>
      </div>

      <div>
        {mostrarForm && (
          <div>
             <BillForm conta={conta} onChange={handleChange} onSubmit={handleSubmit} />
            <button onClick={handleMostrarForm}>Cancelar</button>
          </div>
        )}
      </div>
    </div>
  );
}