"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 dark:from-purple-900 dark:to-indigo-950 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold hover:text-purple-300 transition-colors"
        >
          DrugGPT Research
        </Link>
        <ul className="flex space-x-6 items-center">
          {["Home", "Tokenizers", "Architectures", "Decoders"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-purple-300 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-purple-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
