import { Chart } from '.';

export default {
  title: 'Chart',
  component: Chart,
};

const data = [
  {
    name: 'Jan',
    users: 0,
  },
  {
    name: 'Feb',
    users: 20,
  },
  {
    name: 'March',
    users: 22,
  },
  {
    name: 'April',
    users: 42,
  },
  {
    name: 'May',
    users: 20,
  },
  {
    name: 'June',
    users: 55,
  },
  {
    name: 'July',
    users: 12,
  },
  {
    name: 'Aug',
    users: 5,
  },
  {
    name: 'Sept',
    users: 27,
  },
  {
    name: 'Oct',
    users: 35,
  },
  {
    name: 'Nov',
    users: 35,
  },
  {
    name: 'Dec',
    users: 48,
  },
];

export const Default = () => <Chart dataKey="users" rangeData={data} />;
