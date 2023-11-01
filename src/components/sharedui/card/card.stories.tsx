import { Card } from '.';

export default {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
};

export const Plain = () => <Card>Plain Card</Card>;
export const Outline = () => <Card variant="outline">Outline</Card>;
