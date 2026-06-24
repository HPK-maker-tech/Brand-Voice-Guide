'use client';

import Link from "next/link";

export default function RetentionPage() {
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
            <Link href="/service" className="text-slate-700 hover:text-orange-700">Service</Link>
            <Link href="/retention" className="text-orange-700 font-semibold">Retention</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Retention</h1>
        <p className="text-xl text-slate-600 mb-12">Langzeitbeziehung – Review-Anfragen, Beschwerden, Wiederbuchung</p>

        <section className="space-y-8">
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Review-Anfrage</h2>
            <p className="text-slate-600 mb-4"><strong>Tone:</strong> Kurz, nicht needy, dankbar.</p>
            <p className="text-slate-600">Details folgen...</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Beschwerde-Handling</h2>
            <p className="text-slate-600 mb-4"><strong>Tone:</strong> Ruhig, lösungsorientiert, professionell, empathisch.</p>
            <p className="text-slate-600">Details folgen...</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Wiederbuchungs-Angebot</h2>
            <p className="text-slate-600 mb-4"><strong>Tone:</strong> Freundlich, nicht pushig.</p>
            <p className="text-slate-600">Details folgen...</p>
          </div>
        </section>

        <div className="flex gap-4 justify-between mt-12">
          <Link href="/service" className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-medium">← Zurück</Link>
          <Link href="/" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-medium">Zur Startseite</Link>
        </div>
      </div>
    </main>
  );
}
