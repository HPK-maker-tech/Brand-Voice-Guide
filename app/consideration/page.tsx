'use client';

import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default function ConsiderationPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Header Image */}
      <div className="relative w-full h-80 bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1550953581-a75aa86fec20?w=1200&h=400&fit=crop"
          alt="Dog portrait"
          fill
          className="object-cover"
        />
      </div>

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
