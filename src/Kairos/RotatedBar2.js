import React from 'react';
import {
  Chart as ChartJS,
  Tooltip,
  defaults
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  Tooltip
);
defaults.elements.bar.borderRadius= 12;
// defaults.scale.gridLines.display = false;
// options.plugins.legend.labels.pointStyle= 'circle';

export const options = {
  aspectRatio: 25,
  indexAxis: 'y',
  scales: {
    x: {
      display: false,
      stacked: true,
      radius:12
      }
    },
    y: {
      display: false,
      stacked: true,
    }
  
};
  // plugins:{
  // legend: {
    // labels: {
        // font:{
          // size: 11,
        // },
        // 
        // color: '#f381a7',
        // pointStyle: 'circle',
        // usePointStyle:true,
    // }
  // }}


const labels = ['let'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Good',
      data: [30],
      backgroundColor: '#4b9fea',
      borderSkipped: false
    },
    {
      label: 'Average',
      data: [7],
      backgroundColor: '#EF6C00',
    },
    {
        label: 'Poor',
        data: [3],
        backgroundColor: '#AB47BC',
      },
  ],
};

export function RotatedBar2() {
  return <Bar options={options} 
              data={data}

               />
}
