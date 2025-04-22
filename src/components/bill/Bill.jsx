import React,{useContext} from "react";
import { BillContext } from "../../context/Context"
import { BillItem } from "./BillItem";
import "./Bill.css"

export function Bill() {

  const { contas, filtroTipo, setFiltroTipo, handleUpdate, handleDelete } = useContext(BillContext);

  const totalContas = contas.length;
  const totalValor = contas
    .reduce((total, conta) => total + parseFloat(conta.valor || 0), 0)
    .toFixed(2);
  const contasAtrasadas = contas.filter(
    (conta) => new Date(conta.vencimento) < new Date()
  ).length;
  const contasFiltradas = filtroTipo
    ? contas.filter((conta) => conta.tipo === filtroTipo)
    : contas;

  const contasProximas = contas.filter((c) => {
    const vencimento = new Date(c.vencimento);
    const diffDias = (vencimento - new Date()) / (1000 * 60 * 60 * 24);
    return diffDias <= 3 && diffDias > 0;
  });

  return (
    <div className="bill-container">
      <h1>Contas</h1>

      {contasProximas.length > 0 && (
        <div className="alert">
          <p>Atenção: {contasProximas.length} conta(s) vencendo em breve!</p>
        </div>
      )}

      <div className="filtro">
        <label>
          Filtrar por Tipo:
          <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="internet">Internet</option>
            <option value="carro">Carro</option>
            <option value="intcelu">Intecelu</option>
            <option value="farmacia">Farmácia</option>
            <option value="academia">Academia</option>
            <option value="cartao">Cartão</option>
            <option value="moto">Moto</option>
          </select>
        </label>
      </div>

      <div className="resumo">
        <h2>Resumo</h2>
        <p>Total de Contas: {totalContas}</p>
        <p>Valor Total: R${totalValor}</p>
        <p>Contas Atrasadas: {contasAtrasadas}</p>
      </div>

      <div className="contas-lista">
        <h2>Lista de contas</h2>
        {contasFiltradas.map((conta) => (
          <BillItem
            key={conta.id}
            conta={conta}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
