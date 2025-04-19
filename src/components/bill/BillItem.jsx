import React from "react";
import { useState } from "react";

export function BillItem ({ conta, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedConta, setEditedConta] = useState(conta)

    const handleChange = (e) => {
        const { name, value } = e.target
        setEditedConta({
            editedConta,
            [name]: value,
        })
    }


    const handleSave = () => {
        if (!editedConta.tipo || !editedConta.valor || !editedConta.vencimento) {
            alert("Preencha todos os campos")
            return
        }
        onUpdate(editedConta)
        setIsEditing(false)
    }

    const hoje = new Date()
    const vencimento = new Date(conta.vencimento)
    const atrasada = vencimento < hoje

    return (
        <div className={`bill-item ${atrasada ? "atrasada" : ""}`}>

            {isEditing ? (
                <div>
                    <select name="tipo" value={conta.tipo} onChange={handleChange}>
                        <option value="selecione">Selecione o tipo</option>
                        <option value="internet">Internet</option>
                        <option value="carro">Carro</option>
                        <option value="intcelu">Intecelu</option>
                        <option value="farmacia">Farmácia</option>
                        <option value="academia">Academia</option>
                        <option value="cartao">Cartão</option>
                        <option value="moto">Moto</option>
                    </select>
                    <input type="number" name="valor" value={editedConta.valor} onChange={handleChange} step={"0.01"} />
                    <input type="date" name="vencimento" value={editedConta.vencimento} onChange={handleChange} />

                    <button onClick={handleSave}>Salvar</button>
                    <button onClick={() => setIsEditing(false)}>Cancelar</button>
                </div>
            ) : (
                <div>
                    <h3>{conta.tipo.toUpperCase()}</h3>
                    <p>Valor: R${parseFloat(conta.valor).toFixed(2)}</p>
                    <p>Vencimento: {conta.vencimento}</p>
                    {atrasada && <p style={{ color: "red" }}>Conta atrasada!</p>}
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                    <button onClick={() => onDelete(conta)}>Excluir</button>
                </div>
            )}

        </div>
    )

}