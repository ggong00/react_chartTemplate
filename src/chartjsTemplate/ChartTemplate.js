import React, { useEffect, useState } from 'react';

import './ChartTmeplate.css';
import ChartFilters from './ChartFilters';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';

import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const ChartTemplate = ({ data, filters, option }) => {
  const [innterData, seInnterData] = useState(data || []);

  const chartData = {
    labels: innterData.map((ele) => ele[option.xAxis.dataKey]),
    datasets: [
      ...option.line.map((ele) => {
        return {
          type: 'line',
          label: ele.name,
          borderColor: ele.stroke,
          backgroundColor: '#ffffff',
          borderWidth: 2,
          data: innterData.map((ele2) => ele2[ele.dataKey]),
        };
      }),
      ...option.bar.map((ele) => {
        return {
          type: 'bar',
          label: ele.name,
          backgroundColor: ele.fill,
          data: innterData.map((ele2) => ele2[ele.dataKey]),
          stack: ele.stackId,
        };
      }),
    ],
  };

  const options = {
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  return (
    <div className={'chartTemplate'}>
      {filters && (
        <ChartFilters data={data} filters={filters} filterSet={seInnterData} />
      )}
      <div className='chart_cont'>
        <Chart data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartTemplate;
