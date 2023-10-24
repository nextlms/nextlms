'use client';

import { Chart } from '@/components/sharedui/chart';
import { ScriptableContext } from 'chart.js';
import { TrendingDown, TrendingUp } from 'lucide-react';

const arrayNumber = [10, 15, 18, 17, 20, 25, 30, 35, 36, 28, 26, 25];
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
    },
  ],
};

export const Dashboard = () => {
  return (
    <main>
      <h4>Dashboard</h4>
      <section className="grid grid-cols-3 gap-6 mt-4">
        <div className="border-1 rounded-lg p-6 shadow-sm space-y-2">
          <p>Total member</p>
          <h1>88</h1>
          <div className="flex gap-2 items-center  text-emerald-400">
            <TrendingUp size={18} />
            <p className="font-medium text-xs text-emerald-400">34% from last month</p>
          </div>
        </div>
        <div className="border-1 rounded-lg p-6 shadow-sm space-y-2">
          <p>Paid member</p>
          <h1>43</h1>
          <div className="flex gap-2 items-center  text-emerald-400">
            <TrendingUp size={18} />
            <p className="font-medium text-xs text-emerald-400">14% from last month</p>
          </div>
        </div>
        <div className="border-1 rounded-lg p-6 shadow-sm space-y-2">
          <p>Broadcast open rate</p>
          <h1>84%</h1>
          <div className="flex gap-2 items-center  text-rose-400">
            <TrendingDown size={18} />
            <p className="font-medium text-xs text-rose-400">4% from last month</p>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <Chart data={data} />
      </section>
    </main>
  );
};
