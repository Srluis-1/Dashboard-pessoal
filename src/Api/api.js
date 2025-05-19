import axios from "axios"

export const apiClima= async (cidade)=>{
    const apiKey ='e241ddf4311749d106bb40017e442c99'
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&aqi=no&lang=pt`
try{
    const resposta = await axios.get(apiUrl)
    console.log(resposta.data);
    if(resposta.status !== 200){return null}
    const dados = await resposta.json()
    return dados

}catch(error){
    console.error("Erro ao buscar dados da api:", error)
    return null;
}


}