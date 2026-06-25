'use client';

import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Header Image */}
      <div className="relative w-full h-80 bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?w=1200&h=400&fit=crop"
          alt="Dog being washed"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Service</h1>
        <p className="text-xl text-slate-600 mb-12">Während der Fellpflege – Status-Updates und Fotos</p>

        <section className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Status-Updates</h2>
          <p className="text-slate-600 mb-4">(Text-Nachrichten)</p>
          <p className="text-slate-600 mb-6"><strong>Tone:</strong> Kurz, informativ, persönlich.</p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
            <p className="text-sm font-bold text-blue-900 mb-3">📱 Template (Start):</p>
            <pre className="bg-white p-4 rounded font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`Hi [Name],
wir sind in ca. 10 Min. da und starten mit [Hundename].
Bis dann!`}
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-sm font-bold text-blue-900 mb-3">📱 Template (Fertig):</p>
            <pre className="bg-white p-4 rounded font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`Hi [Name],
[Hundename] ist fertig! Er/Sie sieht super aus.
Wir kommen gerade raus.`}
            </pre>
            <p className="text-sm text-slate-600 mt-4">💡 <strong>Aufmunterung:</strong> Experimentiere! Vielleicht ein Foto in der Mitte? Ein kleines Update ("wir föhnen gerade")? Schreib, was gut funktioniert.</p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Fotos & Vorher-Nachher</h2>
          <p className="text-slate-600 mb-6"><strong>Tone:</strong> Fröhlich, aber nicht übertrieben. Zeige das Ergebnis, nicht dein Gefühl.</p>

          <h3 className="font-bold text-slate-900 mb-3">Do's</h3>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li>✓ Gute Lichtverhältnisse</li>
            <li>✓ Der Hund sieht glücklich/entspannt aus</li>
            <li>✓ Caption: kurz, "Vorher/Nachher – [Hundename]"</li>
          </ul>

          <h3 className="font-bold text-slate-900 mb-3">Don'ts</h3>
          <ul className="space-y-2 text-slate-600">
            <li>✗ Keine Tausend Emojis</li>
            <li>✗ Keine gestellten Posen</li>
          </ul>
        </section>

        <div className="flex gap-4 justify-between mt-12">
          <Link href="/booking" className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-medium">← Zurück</Link>
          <Link href="/retention" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-medium">Weiter →</Link>
        </div>
      </div>
    </main>
  );
}
