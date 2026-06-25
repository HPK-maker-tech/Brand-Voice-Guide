'use client';

import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default function RetentionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Header Image */}
      <div className="relative w-full h-80 bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1603724819619-a0858e51e762?w=1200&h=400&fit=crop"
          alt="Dog at window"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Retention</h1>
        <p className="text-xl text-slate-600 mb-12">Langzeitbeziehung – Review-Anfragen, Beschwerden, Wiederbuchung</p>

        <section className="space-y-8">
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Review-Anfrage</h2>
            <p className="text-slate-600 mb-6"><strong>Tone:</strong> Kurz, nicht needy, dankbar.</p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-sm font-bold text-blue-900 mb-3">⭐ Template:</p>
              <pre className="bg-white p-4 rounded font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`Hi [Name],
falls [Hundename] bei dir einen guten Eindruck hinterlassen hat,
würde es uns freuen, wenn du eine kurze Review schreibst.
Danke!

[Link zu Google/Yelp/etc.]`}
              </pre>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Beschwerde-Handling</h2>
            <p className="text-slate-600 mb-6"><strong>Tone:</strong> Ruhig, lösungsorientiert, professionell, empathisch.</p>

            <h3 className="font-bold text-slate-900 mb-3">Do's</h3>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li>✓ Höre aktiv zu (fasse zusammen, was der Kunde sagt)</li>
              <li>✓ Entschuldige dich, wenn etwas nicht okay war</li>
              <li>✓ Biete eine konkrete Lösung</li>
              <li>✓ Folge auf – verspreche nicht und halte dann nicht</li>
            </ul>

            <h3 className="font-bold text-slate-900 mb-3">Don'ts</h3>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li>✗ Sei nicht defensiv</li>
              <li>✗ Verteidige dich nicht</li>
              <li>✗ Mach keine leeren Versprechungen</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-6">
              <p className="font-bold text-green-900 mb-3">✓ Gutes Beispiel:</p>
              <p className="text-slate-700 text-sm">
                "Hi Sarah, danke, dass du uns bescheid sagst. Wenn [Hundename] nicht so entspannt war wie sonst, möchten wir das nächste Mal besser machen. Kann es sein, dass wir zu laut waren oder er nervös war? Gib uns Bescheid, wie wir es nächste Mal besser machen können – oder wir geben dir das Geld zurück. Ruf uns an?"
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="font-bold text-red-900 mb-3">✗ Nicht so gut:</p>
              <p className="text-slate-700 text-sm">
                "Das ist seltsam, normalerweise sind unsere Groomer sehr professionell. Vielleicht war dein Hund einfach nervös? Es gibt verschiedene Gründe, warum ein Hund angespannt sein kann..."
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Wiederbuchungs-Angebot</h2>
            <p className="text-slate-600 mb-6"><strong>Tone:</strong> Freundlich, nicht pushig.</p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="text-sm font-bold text-blue-900 mb-3">📅 Template (etwas formeller):</p>
              <pre className="bg-white p-4 rounded font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`Hi [Name],
wann können wir [Hundename] wieder sehen?
Dein nächster Termin ist für [Datum/Zeit] frei – oder einen anderen Termin?`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-sm font-bold text-blue-900 mb-3">📅 Template (etwas lockerer):</p>
              <pre className="bg-white p-4 rounded font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`Hi [Name],
[Hundename] ist fällig für Termin #2.
Sag uns Bescheid!`}
              </pre>
            </div>
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
