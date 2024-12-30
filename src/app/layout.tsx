import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HavenRise Capital',
  description: 'Preserving Legacy, Building Tomorrow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}