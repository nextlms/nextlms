import React from 'react';
import { Sidebar } from './dashboard.sidebar';

interface DashboardTemplateProps {
  children: React.ReactNode;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children }) => {
  return (
    <main className="h-screen flex gap-8">
      <Sidebar />
      <main className="w-[calc(100%-230px)] p-6">
        <div className="max-w-5xl m-auto">{children}</div>
      </main>
    </main>
  );
};
