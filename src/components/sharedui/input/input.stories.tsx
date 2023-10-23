import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};

export const TextInput = () => <Input placeholder="Input your name" />;
export const PasswordInput = () => <Input type="password" placeholder="Input your password" />;
