import { DashboardTemplate } from '@/components/lms/dashboard/components/template/dashboard.template';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <DashboardTemplate>{children}</DashboardTemplate>;
}
