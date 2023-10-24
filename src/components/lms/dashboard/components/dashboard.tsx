'use client';

import { Button } from '@/components/sharedui/button';
import { Chart } from '@/components/sharedui/chart';
import { TrendingDown, TrendingUp } from 'lucide-react';

const newMembers = [
  {
    name: 'Jan',
    users: 0,
  },
  {
    name: 'Feb',
    users: 1,
  },
  {
    name: 'March',
    users: 5,
  },
  {
    name: 'April',
    users: 6,
  },
  {
    name: 'May',
    users: 12,
  },
  {
    name: 'June',
    users: 14,
  },
  {
    name: 'July',
    users: 16,
  },
  {
    name: 'Aug',
    users: 12,
  },
  {
    name: 'Sept',
    users: 18,
  },
  {
    name: 'Oct',
    users: 19,
  },
  {
    name: 'Nov',
    users: 21,
  },
  {
    name: 'Dec',
    users: 25,
  },
];

export const Dashboard = () => {
  return (
    <main>
      <h4>Dashboard</h4>
      <div className="grid grid-cols-4 gap-6 mt-4">
        <section className="space-y-4">
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
        <section className="col-span-3">
          <div className="h-full border-1 rounded-lg p-8 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
              <h4>New Members</h4>
              <Button variant="secondary">Send broadcast</Button>
            </div>
            <Chart dataKey="users" rangeData={newMembers} />
          </div>
        </section>
      </div>
    </main>
  );
};
