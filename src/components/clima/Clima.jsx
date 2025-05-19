import InfoPrincipal from "./InfoPrincipal";
import InfoSecundario from "./infoSecundarias";
import Buscar from "./Buscar";
import {useClima} from "../../hooks/useClima"


function Clima(){
    const {
        cidade, setCidade, handleBusca, 
        temperatura, condicao, humidade, 
        velocidadeVento, iconeCondicao 

    }= useClima();
    return(
        <div>
           <Buscar cidade={cidade} setCidade={setCidade} handleBusca={handleBusca} />
            <InfoPrincipal cidade={cidade} temperatura={temperatura} iconeCondicao={iconeCondicao} condicao={condicao} />
            <InfoSecundario humidade={humidade} velocidadeVento={velocidadeVento} />
        </div>
    )
}

export default Clima