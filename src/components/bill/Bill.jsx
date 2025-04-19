import React from "react";
import { useState, useEffect } from "react";
import { BillForm } from "./BillForm";
import { BillItem } from "./BillItem";



export function Bill (  )  {

    const [conta, setConta] = useState({
        tipo: "",
        valor: 0,
        vencimento: "",
    })

    const [contas, setContas] = useState([])
    const [filtroTipo, setFiltroTipo] = useState("")

    useEffect(()=>{
        const contasSalvas = localStorage.getItem("contas")
       if(contasSalvas){
        setContas(JSON.parse(contasSalvas))
       }
    },[])

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
        const novasContas = [...contas, { ...conta, id: Date.now() }]
        setContas(novasContas)
        localStorage.setItem("contas", JSON.stringify(novasContas))
        setConta({
            tipo: "",
            valor: "",
            vencimento: "",
        })
    }

    const handleUpdate = (updateConta) => {
        setContas(contas.map((conta) => (conta.id === updateConta.id ? updateConta : conta)))
    }

    const handleDelete = (contaDelete) => {
        setContas(contas.filter((conta) => conta.id !== contaDelete.id))
    }

    const totalContas = contas.length
    const totalValor = contas.reduce((total, conta) => total + parseFloat(conta.valor), 0).toFixed(2)
    const contasAtrasadas = contas.filter((conta) => new Date(conta.vencimento) < new Date()).length
    const contasFiltradas = filtroTipo ? contas.filter((conta) => conta.tipo === filtroTipo) : contas

    return (
        <div className="bill">
            <h1>Contas</h1>

            <div className="resumo">
                <h2>Resumo</h2>
                <p>Total de Contas: {totalContas}</p>
                <p>Valor Total: {totalValor}</p>
                <p>Contas Atrasadas: {contasAtrasadas}</p>
            </div>

            <div className="filtro">
                <label>
                    Filtrar por Tipo:
                    <select value={filtroTipo} onChange={((e) => setFiltroTipo(e.target.value))}>
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
            <BillForm conta={conta} onChange={handleChange} onSubmit={handleSubmit} />

            <div className="contas-lista">
                <h2>Lista de contas</h2>
                {contasFiltradas.map((conta, index) => ( <BillItem key={index} conta={conta} onUpdate={handleUpdate} onDelete={handleDelete} />))}
            </div>

        </div>
    )
}