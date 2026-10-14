"use client";

import { useState } from "react";
import { navLinks } from "@/data/nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          知念信之
        </a>

        {/* PC用ナビ */}
        <nav className="hidden gap-5 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* モバイル用メニューボタン */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
          aria-label="メニューを開く"
          aria-expanded={open}
        >
          <span className="sr-only">メニュー</span>
          <div className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {/* モバイル用メニュー本体 */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 text-sm md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-muted transition-colors hover:bg-card hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
