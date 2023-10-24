import { faker } from '@faker-js/faker';
import { ScriptableContext } from 'chart.js';
import { Chart } from '.';

export default {
  title: 'Chart',
  component: Chart,
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// array of number with gradually increasing value but with random value
const arrayNumber = [0, 0, 1, 1.4, 2, 3, 3.5, 3, 5, 6, 7, 9];

const data = {
  labels,
  datasets: [
    {
      responsive: true,
      fill: true,
      label: 'Dataset 2',
      data: arrayNumber,
      borderColor: 'rgb(201,175,255)',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const { ctx } = context.chart;
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, 'rgba(201,175,255,1)');
        gradient.addColorStop(1, 'rgba(250,174,50,0)');
        return gradient;
      },
      lineTension: 0.35,
    },
  ],
};

export const Default = () => <Chart data={data} />;
