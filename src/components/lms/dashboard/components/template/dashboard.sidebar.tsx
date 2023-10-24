import React from 'react';
import { Box, Users, Book, Settings, HelpingHand, BookHeadphones, MailPlus } from 'lucide-react';
import { Button } from '@/components/sharedui/button';
import Image from 'next/image';
import { Input } from '@/components/sharedui/input';
import Avatar from 'boring-avatars';

const menu = [
  { label: 'Dashboard', icon: <Book size={14} />, href: '/dashboard' },
  { label: 'Users', icon: <Users size={14} />, href: '/dashboard/users' },
  { label: 'Courses', icon: <Box size={14} />, href: '/dashboard/courses' },
  { label: 'Broadcasts', icon: <MailPlus size={14} />, href: '/dashboard/broadcast' },
  { label: 'Settings', icon: <Settings size={14} />, href: '/dashboard/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-[230px] border-r-1 border-secondary-100 p-4 flex flex-col justify-between">
      <section className="space-y-2">
        <div className="flex items-center gap-2 p-2">
          <Image alt="logo" src="/logo.svg" width={24} height={24} />
          <div className="font-medium tracking-tight">nextlms</div>
        </div>
        <Input placeholder="Search" />
        <div>
          {menu.map(({ label, icon }) => {
            return (
              <Button key={label} variant="ghost" className="block w-full">
                <div className="flex gap-2 items-center">
                  {icon}
                  <div>{label}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </section>
      <section className="space-y-4">
        <div>
          <Button variant="ghost" className="block w-full">
            <div className="flex gap-2 items-center">
              <BookHeadphones size={14} />
              <div>Documentation</div>
            </div>
          </Button>
          <Button variant="ghost" className="block w-full">
            <div className="flex gap-2 items-center">
              <HelpingHand size={14} />
              <div>Support</div>
            </div>
          </Button>
        </div>
        <Button variant="secondary" className="w-full flex items-center justify-between">
          <div>Student Name</div>
          <Avatar size={28} name="Maria Mitchell" variant="beam" />
        </Button>
      </section>
    </aside>
  );
};
