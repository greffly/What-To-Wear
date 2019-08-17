import React, { Component } from 'react';
import './PieChart.css';
import { ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

// need to get data in here somehow?
const data = [
  { title: 'One', value: 10 },
  { title: 'Two', value: 15 },
  { title: 'Three', value: 20 }
];
const colors = ['#FA8072', '#00C49F', '#FFD700'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //TODO add a place for the outfit name, maybe on hover?
  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`} outfit
    </text>
  );
};

export default class PieChartResults extends Component {
  render() {
    return (
      <ResponsiveContainer className='container' height={260} width={260}>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius='85%'
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
