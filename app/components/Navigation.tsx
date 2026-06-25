'use client';

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-0 hover:opacity-80 transition">
            {/* Dog Icon */}
            <Image
              src="dog-icon.png"
              alt="Ruff Cuts Dog"
              width={72}
              height={72}
              className="w-16 h-16"
            />

            {/* Text */}
            <div className="text-2xl font-bold text-orange-700">Ruff Cuts</div>

            {/* Van Icon */}
            <Image
              src="van-icon.png"
              alt="Ruff Cuts Van"
              width={96}
              height={96}
              className="w-24 h-24 object-contain"
            />
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
