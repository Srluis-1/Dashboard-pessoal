function Buscar ({cidade, setCidade, handleBuscar}) {
    return(
        <div className="buscar">
            <input type="text" id="input-buscar" value={cidade} onChange={(e)=>setCidade(e.target.value)} placeholder="Digite uma cidade"/>
            <button className="button-buscar " onClick={handleBuscar}></button>
        </div>

    )
}

export default Buscar