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
    return<div style={{ padding: "20px" }}>
        <LineChartComponent apiData={apiData} />
        <BarChartComponent apiData={apiData}  />
        <RadarChartComponent apiData={apiData}  />
    </div>
}

export default Metrics;