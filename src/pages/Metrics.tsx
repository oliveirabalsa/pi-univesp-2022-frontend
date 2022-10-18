import LineChartComponent from "../components/organisms/Charts/LineChart";
import { useEffect, useState } from 'react';
import { http } from "../services/axios/http";
import BarChartComponent from "../components/organisms/Charts/BarChart";
import RadarChartComponent from "../components/organisms/Charts/RadarChart";

function Metrics() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        (async function () {
            const response = await http.get("song-game");
            setApiData(response.data);
        })();
    }, []);
    return <div style={{ padding: "20px" }}>
        <div style={{ marginLeft: "58px" }}>
            <h1>Sistemas de Métricas</h1>
            <h4>
                O intuito desse sistema é mostrar a quantidades de vezes determinada letra foi ouvida, onde a variável "amountHeard", é a quantidade de vezes que a letra foi ouvida sendo o principal valor
                para a criação do gráfico.
            </h4>
            <p>
                Os gráficos 1, 2 e 3 apresentam a quantidade de cliques x letras.
                A partir deste gráfico podemos medir o grau de contato com as letras e as letras com menor número de  acessos,
                podendo então melhorar o app, tornando as letras de menor acesso mais atrativo e estimulando um melhor entendimento das letras
                que se dará pelo contato lúdico e constante com o alfabeto.
                Enxergarmos também as letras com o maior número de cliques,
                podendo representar o material lúdico como material extra-curricular se usado junto as aulas,
                demonstrando o conteúdo abordado e passado com o maior número de repetição para o caso de um reforço em letras com um menor uso.
            </p>
            <p>
                O gráfico 4 apresenta a letra com o maior número de acesso, apresentando o foco do professor ou da criança, dependendo do ambiente de uso do app.
                Se como material suplementar podemos iterar o foco do professor na letra com maior dificuldade,
                ou se o foco é livre, certamente enxergamos que a criança acessará as letras que ela mais gosta e se familiariza.
            </p>
        </div>
        <LineChartComponent apiData={apiData} />
        <BarChartComponent apiData={apiData} />
        <RadarChartComponent apiData={apiData} />
    </div>
}

export default Metrics;