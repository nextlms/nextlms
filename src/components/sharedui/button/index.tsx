import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const buttonStyle = tv({
  base: 'font-medium bg-secondary-300 text-white rounded-lg active:opacity-80 transition duration-300 ease-in-out',
  variants: {
    variant: {
      primary: 'bg-primary-600 shadow-sm hover:bg-primary-800 text-white',
      secondary:
        'bg-white border-1 hover:border-primary-600 shadow-sm hover:shadow-secondary-200 active:bg-primary-100 text-secondary-800',
      outline:
        'bg-transparent border border-primary-500 shadow-sm hover:bg-primary-600 hover:text-white active:bg-primary-800 text-secondary-800',
      ghost: 'bg-transparent hover:bg-secondary-50 hover:shadow-sm text-secondary-950',
    },
    size: {
      sm: 'text-sm',
      md: 'text-sm px-3 py-2',
      lg: 'px-4 py-3 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

type ButtonVariants = VariantProps<typeof buttonStyle>;
type NativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Omit<NativeProps, keyof ButtonVariants>, ButtonVariants {}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button className={twMerge(buttonStyle(props), className)} {...props}>
      {props.children}
    </button>
  );
};
