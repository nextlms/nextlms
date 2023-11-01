import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const cardStyle = tv({
  base: 'rounded-lg p-4 shadow-sm hover:shadow bg-transparent duration-200 ease-in-out',
  variants: {
    variant: {
      plain: '',
      outline: 'border-1 border-neutral-200',
    },
  },
  defaultVariants: {
    variant: 'plain',
  },
});

type CardVariants = VariantProps<typeof cardStyle>;
type NativeProps = React.HTMLAttributes<HTMLDivElement>;

interface CardProps extends Omit<NativeProps, keyof CardVariants>, CardVariants {}

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div className={twMerge(cardStyle(props), className)} {...props}>
      {props.children}
    </div>
  );
};
