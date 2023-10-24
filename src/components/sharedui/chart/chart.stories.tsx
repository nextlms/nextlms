import { Chart } from '.';

export default {
  title: 'Chart',
  component: Chart,
};

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

export const Default = () => <Chart dataKey="users" rangeData={newMembers} />;
