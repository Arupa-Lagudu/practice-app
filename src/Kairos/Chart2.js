import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  defaults
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);
defaults.elements.bar.borderRadius= 12;
// options.plugins.legend.labels.pointStyle= 'circle';

export const options = {
  aspectRatio: 3.5,
  // maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      },
      
  },
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

};

const labels = ['26/05', '25/05', '24/05', '23/05', '22/05', '21/05', '20/05', '19/05'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Passed',
      data: [35,28,15,20],
      backgroundColor: '#4b9fea',
    },
    {
      label: 'Failed',
      data: [21,20,5,10],
      backgroundColor: '#f381a7',
    },
  ],
};

export function Chart2() {
  return <Bar options={options} 
              data={data}

               />;
}
