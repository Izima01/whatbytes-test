// import { borderWidth } from './node_modules/chart.js/dist/plugins/plugin.tooltip.d';
const percentileArray = [
  { Percentile: 0, Frequency: 2 },
  { Percentile: 6.67, Frequency: 3 },
  { Percentile: 13.33, Frequency: 2 },
  { Percentile: 20, Frequency: 3 },
  { Percentile: 26.67, Frequency: 6 },
  { Percentile: 33.33, Frequency: 22 },
  { Percentile: 40, Frequency: 45 },
  { Percentile: 46.67, Frequency: 68 },
  { Percentile: 53.33, Frequency: 72 },
  { Percentile: 60, Frequency: 49 },
  { Percentile: 66.67, Frequency: 20 },
  { Percentile: 73.33, Frequency: 8 },
  { Percentile: 80, Frequency: 2 },
  { Percentile: 86.67, Frequency: 3 },
  { Percentile: 93.33, Frequency: 4 },
  { Percentile: 100, Frequency: 2 },
];

export const chartData = {
  labels: percentileArray.map((val) => Math.round(val.Percentile)),
  datasets: [
    {
      label: 'Frequency of Score',
      data: percentileArray.map((val) => val.Frequency),
      borderColor: '#8680b9',
      borderWidth: 1,
      pointBorderColor: '#8680b9',
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: '#fff',
      tension: 0, // Creates a smooth curve
    },
  ],
};
