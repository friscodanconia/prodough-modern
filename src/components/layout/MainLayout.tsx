"use client";

import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';

interface MainLayoutProps {
  children: ReactNode;
  activePage?: string;
}

export default function MainLayout({ children, activePage }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header activePage={activePage} />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
