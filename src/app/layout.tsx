import Sidebar from '@/components/sidebar/Sidebar';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
export const metadata: Metadata = {
  title: 'CV - Duong Thanh Thong',
  description: 'Duong Thanh Thong',
};

// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
