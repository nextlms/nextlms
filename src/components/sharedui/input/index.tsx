import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const inputStyle = tv({
  base: 'w-full font-medium bg-white border-1 shadow-sm text-black rounded-lg active:opacity-80 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 focus:outline-none transition duration-300 ease-in-out',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-sm px-3 py-2',
      lg: 'px-4 py-3 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type InputVariants = VariantProps<typeof inputStyle>;
type NativeProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Omit<NativeProps, keyof InputVariants>, InputVariants {}

export const Input: React.FC<InputProps> = ({ size, className, ...props }) => {
  return <input className={twMerge(inputStyle({ size }), className)} {...props} />;
};
