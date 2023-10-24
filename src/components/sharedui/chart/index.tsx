import { AreaChart, XAxis, YAxis, Area, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  dataKey: string;
  rangeData: any[];
}

export const Chart: React.FC<ChartProps> = ({ dataKey, rangeData }) => {
  return (
    <ResponsiveContainer width="100%" height={300} style={{ padding: 0 }}>
      <AreaChart data={rangeData}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#bcb5fd" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#ebe9fe" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis width={20} />
        <Tooltip />
        <Area
          strokeWidth={2}
          type="linear"
          dataKey={dataKey}
          stroke="#673bec"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
