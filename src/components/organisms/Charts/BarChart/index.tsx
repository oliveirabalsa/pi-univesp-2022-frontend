import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CONSTANTS } from '../../../../constants';
function BarChartComponent({ apiData }: {apiData: any}) {

    return (
        <div style={{height: "50vh"}}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Bar dataKey="amountHeard" fill={CONSTANTS.colors.blue_light} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
}

export default BarChartComponent