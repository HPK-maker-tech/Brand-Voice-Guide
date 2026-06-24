'use client';

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            {/* Dog Icon */}
            <Image
              src="/dog-icon.png"
              alt="Ruff Cuts Dog"
              width={48}
              height={48}
              className="w-12 h-12"
            />

            {/* Text */}
            <div className="text-2xl font-bold text-orange-700">Ruff Cuts</div>

            {/* Van Icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="12" width="22" height="10" rx="1" fill="#D4A017" stroke="#A0620B" strokeWidth="1" />
              <path d="M 6 12 L 8 6 L 20 6 L 22 12" fill="#B8860B" stroke="#A0620B" strokeWidth="1" />
              <rect x="10" y="7" width="8" height="5" fill="#87CEEB" stroke="#A0620B" strokeWidth="0.5" />
              <circle cx="8" cy="22" r="2" fill="#333" stroke="#000" strokeWidth="0.5" />
              <circle cx="20" cy="22" r="2" fill="#333" stroke="#000" strokeWidth="0.5" />
            </svg>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/" className="text-slate-700 hover:text-orange-700">Home</Link>
            <Link href="/voice" className="text-slate-700 hover:text-orange-700">Voice</Link>
            <Link href="/awareness" className="text-slate-700 hover:text-orange-700">Awareness</Link>
            <Link href="/consideration" className="text-slate-700 hover:text-orange-700">Consideration</Link>
            <Link href="/booking" className="text-slate-700 hover:text-orange-700">Booking</Link>
            <Link href="/service" className="text-slate-700 hover:text-orange-700">Service</Link>
            <Link href="/retention" className="text-slate-700 hover:text-orange-700">Retention</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
