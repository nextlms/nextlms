import { AuthTemplate } from '@/components/lms/auth/components/auth.template';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <AuthTemplate>{children}</AuthTemplate>;
}
