'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SunLineIcon from 'remixicon-react/SunLineIcon';
import MoonLineIcon from 'remixicon-react/MoonLineIcon';

const ThemeSwitch = () => {
  const [isMounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Return a placeholder instead
  if (!isMounted) return null;

  if (resolvedTheme === 'light') {
    return (
      <button
        className="rounded-full bg-white hover:bg-gray-200 active:bg-gray-300 w-[36px] h-[36px] flex justify-center items-center transition-colors"
        onClick={() => setTheme('dark')}
      >
        <MoonLineIcon />
      </button>
    );
  }

  if (resolvedTheme === 'dark') {
    return (
      <button
        className="rounded-full bg-gray-950 hover:bg-gray-800 active:bg-gray-600 w-[36px] h-[36px] flex justify-center items-center transition-colors"
        onClick={() => setTheme('light')}
      >
        <SunLineIcon />
      </button>
    );
  }

  return null;
};

export default ThemeSwitch;
