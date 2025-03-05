'use client';
import '@ant-design/v5-patch-for-react-19';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openNav, setopenNav] = useState(false);

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className={`grid ${
            openNav ? 'grid-cols-[180px_1fr]' : 'grid-cols-[10px_1fr]'
          } md:grid-cols-[200px_1fr] grid-rows-[72px_1fr] relative overflow-hidden transition-all`}
        >
          <BiMenu
            className={`absolute top-16 left-2 cursor-pointer md:hidden block transition-all ${
              openNav ? 'rotate-90' : ''
            }`}
            onClick={() => setopenNav((prev) => !prev)}
            size={40}
          />
          <Header />
          <Sidebar openNav={openNav} />
          {children}
        </div>
      </body>
    </html>
  );
}
