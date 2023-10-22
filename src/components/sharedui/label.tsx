import React from 'react';

interface LabelProps {
  text: string;
}

export const Label: React.FC<LabelProps> = ({ text }) => {
  return <div className="font-medium tracking-tight">{text}</div>;
};
