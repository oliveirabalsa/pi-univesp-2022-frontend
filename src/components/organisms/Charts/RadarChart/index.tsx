import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip
} from 'recharts';
import { CONSTANTS } from '../../../../constants';


function RadarChartComponent({ apiData }: { apiData: any }) {
    const convertedData = apiData.map((item: any) => {
        return {
            name: item.letter,
            amountHeard: item.amountHeard,
        }
    });
    return (
        <div style={{ height: "50vh", display: "flex" }}>
            <ResponsiveContainer width="49%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={apiData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="letter" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="amountHeard" stroke={CONSTANTS.colors.brown_primary} fill={CONSTANTS.colors.brown_light} fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="amountHeard"
                        isAnimationActive={false}
                        data={convertedData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill={CONSTANTS.colors.orange_primary}
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RadarChartComponent