'use client';

import Link from "next/link";
import Navigation from "../components/Navigation";

export default function VoicePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Voice – Grundprinzipien</h1>

        <section className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Wer wir sind</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ruff Cuts ist der Freund, der zufällig ein Experte ist. Jemand, dem du vertraust, weil er oder sie offensichtlich weiss, was er tut – aber der diese Expertise nicht ausspielt. Premium ohne Snobismus. Professionell ohne Corporate-Sprech.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mt-4">
            Wir sind die Menschen, die dein Hund gerne sieht.
          </p>
        </section>

        <section className="space-y-8 mb-8">
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Warm, aber professionell</h3>
            <p className="text-slate-600 mb-4">Wir sind zugänglich und freundlich, aber nicht süsslich oder gönnerlich. Wir reden mit unseren Kunden wie mit intelligenten Erwachsenen.</p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-sm font-semibold text-green-900">✓ So klingt das:</p>
              <p className="text-slate-700">"Dein Golden Retriever braucht gute Fellpflege – das werden wir mit dir machen."</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-sm font-semibold text-red-900">✗ Nicht so:</p>
              <p className="text-slate-700">"Dein Fellbaby wird zum Prinzessinnen-Abenteuer!"</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Ehrlich über unser Warum</h3>
            <p className="text-slate-600 mb-4">Wir machen das, weil wir Hunde lieben und Stress für sie vermeiden wollen.</p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-sm font-semibold text-green-900">✓ So klingt das:</p>
              <p className="text-slate-700">"Wir kommen zu dir nach Hause, weil wir sehen, wie viel Stress ein Besuch in der Klinik für Hunde bedeutet."</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Kompetenz zeigen, nicht prahlen</h3>
            <p className="text-slate-600 mb-4">Wir wissen, was wir tun. Das merkt man an unserer Klarheit, nicht an Superlativen.</p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-sm font-semibold text-green-900">✓ So klingt das:</p>
              <p className="text-slate-700">"Dein Hund wird nach 2-3 Stunden fertig sein, je nach Felllänge."</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Effizienz respektieren</h3>
            <p className="text-slate-600">Unsere Kunden sind busy. Wir sind prägnant, klar und respektieren ihre Zeit.</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">5. Eine Voice, verschiedene Töne</h3>
            <p className="text-slate-600">Wir klingen auf Social Media lockerer als in einer Beschwerde-Antwort. Aber es ist immer noch Ruff Cuts.</p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Do's & Don'ts</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-green-700 mb-3">✓ Do's</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Sprich direkt und klar</li>
                <li>• Teile ehrliche Gründe</li>
                <li>• Nutze einfache Sprache</li>
                <li>• Sei freundlich, nicht süsslich</li>
                <li>• Respektiere die Zeit</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-red-700 mb-3">✗ Don'ts</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Keine Babytalk-Wörter</li>
                <li>• Nicht korporativ sein</li>
                <li>• Keine leeren Versprechungen</li>
                <li>• Keine übertriebenen Superlative</li>
                <li>• Nicht zu lange schreiben</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-12 flex gap-4">
          <Link href="/awareness" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-800 transition">
            Weiter zu Awareness →
          </Link>
        </div>
      </div>
    </main>
  );
}
