"use client";
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { AppProvider } from '@/context/AppContext';

export default function LayoutWrapper({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppProvider>
      <div className="flex bg-zinc-50 min-h-screen text-zinc-900 dark:bg-black dark:text-zinc-100">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex-1 flex flex-col min-w-0 transition-all">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
            <div className="mx-auto max-w-6xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AppProvider>
  );
}
