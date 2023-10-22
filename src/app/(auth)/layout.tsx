import { AuthTemplate } from '@/components/lms/auth/auth.template';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <AuthTemplate>{children}</AuthTemplate>;
}
