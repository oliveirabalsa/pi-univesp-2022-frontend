import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CONSTANTS } from '../../../../constants';
function LineChartComponent({ apiData }: {apiData: any}) {
    return (
        <div style={{ height: "50vh" }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={apiData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="letter" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amountHeard" stroke={CONSTANTS.colors.green_primary} activeDot={{ r: 10 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartComponent;