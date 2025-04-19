import React from "react";

export function BillForm({ conta = { tipo: "", valor: "", vencimento: "" }, onChange, onSubmit }) {
  return (
    <div className="bill-form">
      <h2>Adicionar Conta</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="tipo">
          Tipo de Conta:
          <select id="tipo" name="tipo" value={conta.tipo || ""} onChange={onChange}>
            <option value="">Selecione o tipo</option>
            <option value="internet">Internet</option>
            <option value="carro">Carro</option>
            <option value="intcelu">Intecelu</option>
            <option value="farmacia">Farmácia</option>
            <option value="academia">Academia</option>
            <option value="cartao">Cartão</option>
            <option value="moto">Moto</option>
          </select>
        </label>

        <label htmlFor="valor">
          Valor (R$):
          <input
            id="valor"
            type="number"
            name="valor"
            value={conta.valor || ""}
            onChange={onChange}
            step="0.01"
            placeholder="Ex.: 150.00"
          />
        </label>

        <label htmlFor="vencimento">
          Data de Vencimento:
          <input
            id="vencimento"
            type="date"
            name="vencimento"
            value={conta.vencimento || ""}
            onChange={onChange}
          />
        </label>

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}