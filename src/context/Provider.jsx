import React, { useState, useEffect } from "react";
import { BillContext } from "./Context"; // Importa o BillContext do context.jsx

export function BillProvider({ children }) {
  const [conta, setConta] = useState({
    tipo: "",
    valor: "",
    vencimento: "",
  });

  const [contas, setContas] = useState([]);
  const [filtroTipo, setFiltroTipo] = useState("");

  useEffect(() => {
    const contasSalvas = localStorage.getItem("contas");
    if (contasSalvas) {
      setContas(JSON.parse(contasSalvas));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConta({
      ...conta,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!conta.tipo || !conta.valor || !conta.vencimento) {
      alert("Preencha todos os campos");
      return;
    }

    const novasContas = [...contas, { ...conta, id: Date.now(), status: "pendente" }];
    setContas(novasContas);
    localStorage.setItem("contas", JSON.stringify(novasContas));
    setConta({
      tipo: "",
      valor: "",
      vencimento: "",
    });
  };

  const handleUpdate = (updatedConta) => {
    const novasContas = contas.map((c) => (c.id === updatedConta.id ? updatedConta : c));
    setContas(novasContas);
    localStorage.setItem("contas", JSON.stringify(novasContas));
  };

  const handleDelete = (contaDelete) => {
    const novasContas = contas.filter((c) => c.id !== contaDelete.id);
    setContas(novasContas);
    localStorage.setItem("contas", JSON.stringify(novasContas));
  };

  return (
    <BillContext.Provider
      value={{
        conta,
        contas,
        filtroTipo,
        setFiltroTipo,
        handleChange,
        handleSubmit,
        handleUpdate,
        handleDelete,
      }}
    >
      {children}
    </BillContext.Provider>
  );
}