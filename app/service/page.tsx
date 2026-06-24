'use client';

import Link from "next/link";

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-700">Ruff Cuts</Link>
          <div className="flex gap-8 text-sm font-medium">
            <Link href="/" className="text-slate-700 hover:text-orange-700">Home</Link>
            <Link href="/voice" className="text-slate-700 hover:text-orange-700">Voice</Link>
            <Link href="/awareness" className="text-slate-700 hover:text-orange-700">Awareness</Link>
            <Link href="/consideration" className="text-slate-700 hover:text-orange-700">Consideration</Link>
            <Link href="/booking" className="text-slate-700 hover:text-orange-700">Booking</Link>
            <Link href="/service" className="text-orange-700 font-semibold">Service</Link>
            <Link href="/retention" className="text-slate-700 hover:text-orange-700">Retention</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Service</h1>
        <p className="text-xl text-slate-600 mb-12">Während der Grooming – Status-Updates und Fotos</p>

        <section className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Status-Updates</h2>
          <p className="text-slate-600 mb-4">(Text-Nachrichten)</p>
          <p className="text-slate-600 mb-6"><strong>Tone:</strong> Kurz, informativ, persönlich.</p>
          <p className="text-slate-600">Details folgen...</p>
        </section>

        <section className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Fotos & Vorher-Nachher</h2>
          <p className="text-slate-600"><strong>Tone:</strong> Fröhlich, aber nicht übertrieben.</p>
        </section>

        <div className="flex gap-4 justify-between mt-12">
          <Link href="/booking" className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-medium">← Zurück</Link>
          <Link href="/retention" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-medium">Weiter →</Link>
        </div>
      </div>
    </main>
  );
}
