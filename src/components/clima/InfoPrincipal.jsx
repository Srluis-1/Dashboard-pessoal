function InfoPrincipal({cidade, temperatura, iconeCondicao, condicao}){
    return(
        <div className="infoPrincipal">
            <h1 id="cidade">{cidade}</h1>
            <p className="temperatura" id="temperatura">{temperatura}</p>
            <img id="icone-condicao" src={iconeCondicao} alt="" />
            <p className="condicao" id="condicao">{condicao}</p>
        </div>
    )
}
export default InfoPrincipal
