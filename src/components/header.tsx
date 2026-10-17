"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";

export function Brand() {
  return (
    <a
      className="brand"
      href="#beranda"
      aria-label="Digital Products — beranda"
    >
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
    </a>
  );
}

export function Header() {
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
          <a href="#produk" onClick={() => setOpen(false)}>
            Produk
          </a>
          <a href="#kegunaan" onClick={() => setOpen(false)}>
            Untuk siapa
          </a>
          <a href="#prinsip" onClick={() => setOpen(false)}>
            Prinsip kami
          </a>
          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>
          <a
            href="#mulai"
            className="button button-small button-dark"
            onClick={() => setOpen(false)}
          >
            Jelajahi solusi <Icon name="arrow" />
          </a>
        </nav>
      </div>
    </header>
  );
}
