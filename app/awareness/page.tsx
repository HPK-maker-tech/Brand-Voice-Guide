'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function AwarenessPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Header Image */}
      <div className="relative w-full h-80 bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1564067886520-e1ff2767eb1a?w=1200&h=400&fit=crop"
          alt="Curious dog"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Awareness</h1>
        <p className="text-xl text-slate-600 mb-12">Kunde lernt Ruff Cuts kennen</p>

        {/* Section: Social Media Posts */}
        <section className="space-y-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Social Media Posts / Anzeigen</h2>
            <p className="text-slate-600 mb-6"><strong>Tone:</strong> Informativ, freundlich, klar – aber nicht zu locker.</p>

            {/* Good Example */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-green-900 mb-3">✓ Gutes Beispiel:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Bella wurde gerade gepflegt – kein Stress, keine Angst. Einfach im Van, bei vertrauten Händen. Dein Hund bleibt zu Hause, du auch."</p>
              </div>
              <button
                onClick={() => copyToClipboard("Bella wurde gerade gepflegt – kein Stress, keine Angst. Einfach im Van, bei vertrauten Händen. Dein Hund bleibt zu Hause, du auch.", "good-example")}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                {copied === "good-example" ? "✓ Kopiert!" : "Kopieren"}
              </button>
            </div>

            {/* Bad Example */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-red-900 mb-3">✗ Nicht so gut:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Oh mein Gott, unser kleines Fellbaby sieht ja absolut PAWSOME aus! 😍 Schau dir diese Verwandlung an!"</p>
              </div>
              <p className="text-sm text-red-800">Problem: Babytalk, zu viele Emojis, zu übertrieben.</p>
            </div>

            {/* Good Example 2 */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-green-900 mb-3">✓ Gutes Beispiel:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Vorher: Verfilztes Fell. Nachher: Max ist ready für den Sommer. Welcher Hund hat das beste Sommerfell? 🐕"</p>
              </div>
              <button
                onClick={() => copyToClipboard("Vorher: Verfilztes Fell. Nachher: Max ist ready für den Sommer. Welcher Hund hat das beste Sommerfell? 🐕", "good-example-2")}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                {copied === "good-example-2" ? "✓ Kopiert!" : "Kopieren"}
              </button>
            </div>

            {/* Bad Example 2 */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-red-900 mb-3">✗ Nicht so gut:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"RUFF CUTS IST DIE BESTE GROOMING-SERVICE IN DER REGION!!! Wir bieten PREMIUM-QUALITÄT zu UNSCHLAGBAREN PREISEN. Dein Hund wird SPEKTAKULÄR aussehen. Buche JETZT!!!"</p>
              </div>
              <p className="text-sm text-red-800">Problem: Alle Caps, zu viele Ausrufezeichen, zu pushy, nicht hilfreich.</p>
            </div>

            {/* Good Example 3 */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-green-900 mb-3">✓ Gutes Beispiel:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Langhaar-Hunde brauchen regelmässige Pflege – das verhindert Verfilzungen und ist angenehmer für deinen Hund. Wir machen das im Van vor deinem Haus."</p>
              </div>
              <button
                onClick={() => copyToClipboard("Langhaar-Hunde brauchen regelmässige Pflege – das verhindert Verfilzungen und ist angenehmer für deinen Hund. Wir machen das im Van vor deinem Haus.", "good-example-3")}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                {copied === "good-example-3" ? "✓ Kopiert!" : "Kopieren"}
              </button>
            </div>

            {/* Bad Example 3 */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-8">
              <p className="text-sm font-bold text-red-900 mb-3">✗ Nicht so gut:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Dein Hund verdient eine verwöhnende Spa-Erfahrung mit unseren magischen Groomern. Unser revolutionäres System wird sein Leben verändern. Versprochen! 🧖‍♀️✨💅"</p>
              </div>
              <p className="text-sm text-red-800">Problem: Zu viele leere Versprechungen, Drama, zu viele Emojis, nicht sachlich.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Zusammenfassung</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-700 mb-4">✓ Do's</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Zeige echte Hunde, echte Vorher-Nachher-Ergebnisse</li>
                    <li>• Erkläre den Vorteil (kein Stress für den Hund)</li>
                    <li>• Sei kurz und prägnant</li>
                    <li>• Nutze Fragen, um Engagement zu fördern</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-red-700 mb-4">✗ Don'ts</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Keine Tier-Babytalk-Wörter</li>
                    <li>• Keine Emojis übertrieben nutzen</li>
                    <li>• Keine 10-Zeilen-Captions</li>
                    <li>• Keine leeren Versprechungen oder Superlative</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 justify-between mt-12">
          <Link href="/voice" className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-300 transition">
            ← Zurück zu Voice
          </Link>
          <Link href="/consideration" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-800 transition">
            Weiter zu Consideration →
          </Link>
        </div>
      </div>
    </main>
  );
}
