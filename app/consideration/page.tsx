'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function ConsiderationPage() {
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
          src="https://images.unsplash.com/photo-1558528021-a4925a5488c7?w=1200&h=400&fit=crop"
          alt="Dog landscape"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Consideration</h1>
        <p className="text-xl text-slate-600 mb-12">Kunde interessiert sich – beantworte Fragen</p>

        <section className="space-y-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Kundenfragen beantworten</h2>
            <p className="text-slate-600 mb-4">(Email, Telefon, Chat)</p>
            <p className="text-slate-600 mb-6"><strong>Tone:</strong> Hilfreich, kompetent, freundlich – ohne Umschweife.</p>

            {/* Good Example 1 */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-green-900 mb-3">✓ Gutes Beispiel:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Hi Sarah, für dein Labradoodle rechnen wir mit ca. 2,5 Stunden. Die genaue Zeit sehen wir, wenn wir ihn sehen – kommt auch auf die Felllänge an. Möchtest du Donnerstag oder Freitag?"</p>
              </div>
              <button
                onClick={() => copyToClipboard("Hi Sarah, für dein Labradoodle rechnen wir mit ca. 2,5 Stunden. Die genaue Zeit sehen wir, wenn wir ihn sehen – kommt auch auf die Felllänge an. Möchtest du Donnerstag oder Freitag?", "good-example-1")}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                {copied === "good-example-1" ? "✓ Kopiert!" : "Kopieren"}
              </button>
            </div>

            {/* Bad Example 1 */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-red-900 mb-3">✗ Nicht so gut:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Danke für deine Anfrage! Das ist eine großartige Frage. Es gibt viele Faktoren, die die Dauer beeinflussen, wie z.B. die Rasse, das Fell, die aktuellen Bedingungen... Wir kontaktieren dich bald mit mehr Infos!"</p>
              </div>
              <p className="text-sm text-red-800">Problem: Zu viel Text, zu schwammig, keine klare Antwort, nicht prägnant.</p>
            </div>

            {/* Good Example 2 */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-green-900 mb-3">✓ Gutes Beispiel:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Kostet dein Hund bei uns? Ja, ca. CHF 60-80 je nach Grösse und Felllänge. Erste Buchung? Ruf uns an oder sag hier Bescheid, wir besprechen alles."</p>
              </div>
              <button
                onClick={() => copyToClipboard("Kostet dein Hund bei uns? Ja, ca. CHF 60-80 je nach Grösse und Felllänge. Erste Buchung? Ruf uns an oder sag hier Bescheid, wir besprechen alles.", "good-example-2")}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                {copied === "good-example-2" ? "✓ Kopiert!" : "Kopieren"}
              </button>
            </div>

            {/* Bad Example 2 */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-red-900 mb-3">✗ Nicht so gut:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Hmm, das können wir dir nicht so einfach sagen, da es stark vom Zustand des Hundes abhängt. Wir brauchen mehr Infos. Schreib uns eine Nachricht mit Foto."</p>
              </div>
              <p className="text-sm text-red-800">Problem: Keine direkter Antwort, zu viele Bedingungen, frustrierend für Kunde.</p>
            </div>

            {/* Good Example 3 */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-green-900 mb-3">✓ Gutes Beispiel:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Kann dein Hund Flöhe haben? Ja, möglich. Das klären wir vor der Grooming. Falls ja: kurzes Bad vorher, und wir informieren dich. Kein Problem."</p>
              </div>
              <button
                onClick={() => copyToClipboard("Kann dein Hund Flöhe haben? Ja, möglich. Das klären wir vor der Grooming. Falls ja: kurzes Bad vorher, und wir informieren dich. Kein Problem.", "good-example-3")}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                {copied === "good-example-3" ? "✓ Kopiert!" : "Kopieren"}
              </button>
            </div>

            {/* Bad Example 3 */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-8">
              <p className="text-sm font-bold text-red-900 mb-3">✗ Nicht so gut:</p>
              <div className="bg-white p-4 rounded mb-4 font-mono text-sm">
                <p>"Das ist eine medizinische Frage, die solltest du mit deinem Tierarzt besprechen. Wir sind keine Experten auf diesem Gebiet. Kontaktiere einen Profi."</p>
              </div>
              <p className="text-sm text-red-800">Problem: Abweisend, nicht hilfreich, wirkt nicht kompetent.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Zusammenfassung</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-700 mb-4">✓ Do's</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Beantworte die Frage direkt (erste Satz!)</li>
                    <li>• Sei spezifisch, nicht schwammig</li>
                    <li>• Biete konkrete nächste Schritte</li>
                    <li>• Sei verfügbar für weitere Fragen</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-red-700 mb-4">✗ Don'ts</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Keine langen, schwammigen Antworten</li>
                    <li>• Keine technischen Begriffe ohne Erklärung</li>
                    <li>• Keine verzögerten Antworten</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex gap-4 justify-between mt-12">
          <Link href="/awareness" className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-medium">← Zurück</Link>
          <Link href="/booking" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-medium">Weiter →</Link>
        </div>
      </div>
    </main>
  );
}
