'use client';

import Link from "next/link";

export default function ConsiderationPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-700">Ruff Cuts</Link>
          <div className="flex gap-8 text-sm font-medium">
            <Link href="/" className="text-slate-700 hover:text-orange-700">Home</Link>
            <Link href="/voice" className="text-slate-700 hover:text-orange-700">Voice</Link>
            <Link href="/awareness" className="text-slate-700 hover:text-orange-700">Awareness</Link>
            <Link href="/consideration" className="text-orange-700 font-semibold">Consideration</Link>
            <Link href="/booking" className="text-slate-700 hover:text-orange-700">Booking</Link>
            <Link href="/service" className="text-slate-700 hover:text-orange-700">Service</Link>
            <Link href="/retention" className="text-slate-700 hover:text-orange-700">Retention</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Consideration</h1>
        <p className="text-xl text-slate-600 mb-12">Kunde interessiert sich – beantworte Fragen</p>

        <section className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Kundenfragen beantworten</h2>
          <p className="text-slate-600 mb-4">(Email, Telefon, Chat)</p>
          <p className="text-slate-600 mb-6"><strong>Tone:</strong> Hilfreich, kompetent, freundlich – ohne Umschweife.</p>

          <h3 className="font-bold text-slate-900 mb-3">Do's</h3>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li>✓ Beantworte die Frage direkt (erste Satz!)</li>
            <li>✓ Sei spezifisch, nicht schwammig</li>
            <li>✓ Biete konkrete nächste Schritte</li>
            <li>✓ Sei verfügbar für weitere Fragen</li>
          </ul>

          <h3 className="font-bold text-slate-900 mb-3">Don'ts</h3>
          <ul className="space-y-2 text-slate-600">
            <li>✗ Keine langen, schwammigen Antworten</li>
            <li>✗ Keine technischen Begriffe ohne Erklärung</li>
            <li>✗ Keine verzögerten Antworten</li>
          </ul>
        </section>

        <div className="flex gap-4 justify-between mt-12">
          <Link href="/awareness" className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-medium">← Zurück</Link>
          <Link href="/booking" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-medium">Weiter →</Link>
        </div>
      </div>
    </main>
  );
}
