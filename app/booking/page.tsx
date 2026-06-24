'use client';

import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function BookingPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const emailTemplate = `Hallo [Name],

Dein Termin ist bestätigt:

Datum: [Datum]
Zeit: zwischen [Uhrzeit] und [Uhrzeit]
Hund: [Hundename]
Adresse: [Adresse]

Was du wissen solltest:
- Wir texten dich 30 Min. vorher
- Wir texten dich, wenn wir fertig sind
- Bezahlung: [Methode]
- Kosten: ca. [Preis]

Fragen? Einfach antworten.

Freuen wir uns auf deinen [Hundename]!

Ruff Cuts Team`;

  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Booking</h1>
        <p className="text-xl text-slate-600 mb-12">Kunde bucht einen Termin</p>

        <section className="space-y-8">
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Bestätigungsemail</h2>
            <p className="text-slate-600 mb-6"><strong>Tone:</strong> Prägnant, freundlich, praktisch.</p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-sm font-bold text-blue-900 mb-3">📧 Template:</p>
              <pre className="bg-white p-4 rounded mb-4 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{emailTemplate}
              </pre>
              <button
                onClick={() => copyToClipboard(emailTemplate, "email-template")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {copied === "email-template" ? "✓ Kopiert!" : "Template kopieren"}
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Termine und Ablauf erklären</h2>
            <p className="text-slate-600 mb-6">Erkläre dem Kunden, wie der Prozess funktioniert.</p>
            <p className="text-slate-600">Details folgen...</p>
          </div>
        </section>

        <div className="flex gap-4 justify-between mt-12">
          <Link href="/consideration" className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-medium">← Zurück</Link>
          <Link href="/service" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-medium">Weiter →</Link>
        </div>
      </div>
    </main>
  );
}
