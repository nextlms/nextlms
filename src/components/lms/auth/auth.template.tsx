import React from 'react';

interface AuthTemplateProps {
  children: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-2">
      <section className="flex justify-center items-center">
        <div className="w-[380px] space-y-10">{children}</div>
      </section>
      <section className="bg-gradient-to-br from-primary-800 to-primary-700" />
    </main>
  );
};
