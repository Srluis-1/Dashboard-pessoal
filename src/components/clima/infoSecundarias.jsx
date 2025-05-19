 function InfoSecundario({umidade, velocidadeVento}){
    return(
        <div>
            <div className="umidade">
                <span>Umidade:</span>
                <span id="umidade">{umidade}</span>
            </div>
            <div className="velocidadeVento">
                <span>Velocidade do vento:</span>
                <span id="velocidade-vento">{velocidadeVento}</span>
            </div>
        </div>
    )
}
export default InfoSecundario