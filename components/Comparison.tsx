import BorderBox from './BorderBox';
import { PiChartLine } from 'react-icons/pi';

import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { chartData } from '../data';

import Annotation from 'chartjs-plugin-annotation';
Chart.register(CategoryScale, Annotation);

const Comparison = ({
  percentile,
  score,
}: {
  percentile: number;
  score: number;
}) => {
  return (
    <BorderBox extraClasses='p-5'>
      <h2 className='text-lg font-semibold'>Comparison Graph</h2>
      <div className='w-full justify-between flex'>
        <p className='w-5/6 my-4'>
          <span className='font-semibold'>
            You scored {percentile}% percentile
          </span>{' '}
          which is higher than the average percentile 72% of all engineers who
          took this assessment
        </p>
        <span className='w-11 h-11 rounded-full flex justify-center items-center bg-[#f3f3f3]'>
          <PiChartLine size={28} />
        </span>
      </div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
            annotation: {
              annotations: {
                line1: {
                  type: 'line',
                  xMin: chartData.labels.findIndex(
                    (val) => val == Math.round((score / 15) * 100)
                  ),
                  xMax: chartData.labels.findIndex(
                    (val) => val == Math.round((score / 15) * 100)
                  ),
                  borderColor: '#8680b9',
                  borderWidth: 1.5,
                  borderDash: [15, 5],
                  label: {
                    content: 'Your Percentile',
                    position: 'center',
                    color: '#8680b9',
                    backgroundColor: 'white',
                    display: true,
                    padding: 2,
                  },
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Percentile',
              },
              grid: { tickColor: 'green', drawOnChartArea: false },
              beginAtZero: true,
              display: true,
              ticks: {
                callback: function (value, index, ticks) {
                  const numValue = Number(value);
                  return numValue % 3 == 0 ? chartData.labels[numValue] : '';
                },
                autoSkip: true,
              },
            },
            y: {
              beginAtZero: true,
              title: { text: 'Frequency', display: true },
              grid: { drawOnChartArea: false },
            },
          },
        }}
        width={600}
        height={400}
      />
    </BorderBox>
  );
};

export default Comparison;
