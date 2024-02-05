import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';

const jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tastify',
  description:
    'Explore, Share, Savor: Tastify – Where Culinary Adventures Begin!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn('relative h-full antialiased', jakarta_sans.className)}
      >
        <main className='relative flex flex-col min-h-screen'>
          <div className='flex-grow flex-1'>{children}</div>
        </main>

        <Toaster position='top-center' richColors />
      </body>
    </html>
  );
}
