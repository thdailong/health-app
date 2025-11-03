import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Dot,
} from "recharts";
import { BODY_RECORD_DATA, BodyRecordDataPoint } from "@/data/bodyRecordData";

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
}

const renderCustomAxisTick = (props: CustomTickProps): JSX.Element => {
  const { x = 0, y = 0, payload } = props;
  const value = payload?.value || "";

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={6}
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize={12}
        fontFamily="Inter"
      >
        <tspan>{value}</tspan>
        <tspan fontSize={8} fontWeight={300}>
          月
        </tspan>
      </text>
    </g>
  );
};

interface Props {
  className?: string;
}

const BodyRecordChart = (props: Props) => {
  const { className = "" } = props;
  const data: BodyRecordDataPoint[] = BODY_RECORD_DATA;

  return (
    <div className={`w-full bg-dark-600 h-[294px] ${className}`}>
      {/* Chart */}
      <div className="w-full h-full overflow-auto">
        <ResponsiveContainer width="100%" height="100%" minWidth={400}>
          <LineChart
            data={data}
            margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="0"
              stroke="#777777"
              vertical={true}
              horizontal={false}
            />
            <XAxis
              dataKey="month"
              stroke="#FFFFFF"
              tick={renderCustomAxisTick}
              axisLine={false}
              tickLine={false}
              dy={0}
            />
            <YAxis hide={true} domain={[30, 70]} />
            <Line
              type="linear"
              dataKey="value1"
              stroke="#FFCC21"
              strokeWidth={2}
              dot={<Dot r={4} fill="#FFCC21" stroke="none" />}
              activeDot={false}
            />
            <Line
              type="linear"
              dataKey="value2"
              stroke="#8FE9D0"
              strokeWidth={2}
              dot={<Dot r={4} fill="#8FE9D0" stroke="none" />}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BodyRecordChart;
