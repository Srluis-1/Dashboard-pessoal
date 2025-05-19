import { apiClima } from "../Api/api";
import { useState } from "react";

export function useClima() {
    const [cidade, setCidade] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [condicao, setCondicao] = useState('');
    const [umidade, setUmidade] = useState('');
    const [velocidadeVento, setVelocidadeVento] = useState('')
    const [iconeCondicao, setIconeCondicao] = useState('https://cdn.weatherapi.com/weather/64x64/day/116.png');

    const handleBusca = async () => {
        if (!cidade) return;

        const dados = await apiClima(cidade)
        console.log(dados)

        if (dados && dados.current) {
            preencherDados(dados, cidade)
        } else {
            console.error("Dados inválidos retornado pela api")

            preencherDados({
                current: {
                    temp_c: "N/A",
                    condition: { text: "N/A", icon: "" },
                    humidity: "N/A",
                    wind_kph: "N/A"
                }
            }, cidade)
        }

    }
    function preencherDados(dados, cidade) {
        const temperatura = dados.current?.temp_c || "N/A"
        const condicao = dados.current?.condition?.text || "N/A";
        const umidade = dados.current?.humidity || "N/A";
        const velocidadeDoVento = dados.current?.wind_kph || "N/A";
        const iconeCondicao = dados.current?.condition?.icon || "";

        setCidade(cidade)
        setTemperatura(`${temperatura} ºC`);
        setCondicao(condicao);
        setUmidade(`${umidade}%`);
        setVelocidadeVento(`${velocidadeDoVento} km/h`);
        setIconeCondicao(iconeCondicao);
    }

    return {
        cidade,
        setCidade,
        temperatura,
        condicao,
        umidade,
        velocidadeVento,
        iconeCondicao,
        handleBusca
    }
}


