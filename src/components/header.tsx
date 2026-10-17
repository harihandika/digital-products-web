"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Digital Products — beranda">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>
        digital<span className="brand-light">products</span>
        <span className="brand-dot">.</span>
      </span>
    </Link>
  );
}

export function Header({ home = true }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Tutup" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Navigasi utama"
          className={open ? "main-nav is-open" : "main-nav"}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          <Link
            href="/products"
            aria-current={!home ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            Produk
          </Link>
          <Link
            href={home ? "#kegunaan" : "/#kegunaan"}
            onClick={() => setOpen(false)}
          >
            Untuk siapa
          </Link>
          <Link
            href={home ? "#prinsip" : "/#prinsip"}
            onClick={() => setOpen(false)}
          >
            Prinsip kami
          </Link>
          <Link href={home ? "#faq" : "/#faq"} onClick={() => setOpen(false)}>
            FAQ
          </Link>
          <Link
            href="/products"
            className="button button-small button-dark"
            onClick={() => setOpen(false)}
          >
            Jelajahi solusi <Icon name="arrow" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
