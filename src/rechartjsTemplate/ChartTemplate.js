import React, { useEffect, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import './ChartTmeplate.css';
import ChartFilters from './ChartFilters';

const ChartTemplate = ({ data, filters, option }) => {
  const [innterData, seInnterData] = useState(data || []);

  return (
    <div className={'chartTemplate'}>
      {filters && (
        <ChartFilters data={data} filters={filters} filterSet={seInnterData} />
      )}
      <ResponsiveContainer width='100%' height='100%'>
        <ComposedChart
          width={500}
          height={400}
          data={innterData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          {option.xAxis && <XAxis {...option.xAxis} />}
          {option.yAxis && <YAxis {...option.yAxis} />}
          <Tooltip />
          <Legend />

          {option.bar &&
            option.bar.map((ele, index) => {
              return <Bar {...ele} test={'1'} />;
            })}

          {option.line &&
            option.line.map((ele) => {
              return <Line type='monotone' {...ele} />;
            })}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTemplate;
