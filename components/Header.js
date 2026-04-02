"use client";
import { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown, User, ShieldAlert } from 'lucide-react';

export default function Header({ onMenuClick }) {
  const [role, setRole] = useState('Viewer');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
      <div className="flex items-center">
        <button 
          onClick={onMenuClick}
          className="mr-4 md:hidden text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 border border-zinc-200 dark:border-zinc-700 p-1.5 rounded-md"
        >
          <Menu size={20} />
        </button>
      </div>
      
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          {role === 'Admin' ? <ShieldAlert size={16} /> : <User size={16} />}
          <span className="hidden sm:inline-block pr-1 font-semibold">{role}</span>
          <ChevronDown size={14} className="text-zinc-500" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg py-1 overflow-hidden z-50">
            <button 
              onClick={() => { setRole('Viewer'); setDropdownOpen(false); }}
              className="w-full text-left px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-center gap-2">
                <User size={14} /> Viewer
              </div>
            </button>
            <button 
              onClick={() => { setRole('Admin'); setDropdownOpen(false); }}
              className="w-full text-left px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-center gap-2">
                <ShieldAlert size={14} /> Admin
              </div>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
