import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export const Primary = () => <Button>Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Outline = () => <Button variant="outline">Outline</Button>;
export const Ghost = () => <Button variant="ghost">Ghost</Button>;
