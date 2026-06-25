'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function ServicePage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const startTemplate = `Hi [Name],
wir sind in ca. 10 Min. da und starten mit [Hundename].
Bis dann!`;

  const finishTemplate = `Hi [Name],
[Hundename] ist fertig! Er/Sie sieht super aus.
Wir kommen gerade raus.`;

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
            <pre className="bg-white p-4 rounded mb-4 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{startTemplate}
            </pre>
            <button
              onClick={() => copyToClipboard(startTemplate, "start-template")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {copied === "start-template" ? "✓ Kopiert!" : "Template kopieren"}
            </button>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-sm font-bold text-blue-900 mb-3">📱 Template (Fertig):</p>
            <pre className="bg-white p-4 rounded mb-4 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{finishTemplate}
            </pre>
            <button
              onClick={() => copyToClipboard(finishTemplate, "finish-template")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {copied === "finish-template" ? "✓ Kopiert!" : "Template kopieren"}
            </button>
            <p className="text-sm text-slate-600 mt-4">💡 <strong>Aufmunterung:</strong> Experimentiere! Vielleicht ein Foto in der Mitte? Ein kleines Update ("wir föhnen gerade")? Schreib, was gut funktioniert.</p>
          </div>
        </section>

        <section className="space-y-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Fotos & Vorher-Nachher</h2>
            <p className="text-slate-600 mb-6"><strong>Tone:</strong> Fröhlich, aber nicht übertrieben. Zeige das Ergebnis, nicht dein Gefühl.</p>

          {/* Before/After Images */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="relative w-full h-64 bg-slate-200 rounded overflow-hidden mb-3">
                <Image
                  src="dog-after.jpg"
                  alt="Before grooming"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-slate-600 text-center"><strong>Vorher</strong></p>
            </div>
            <div>
              <div className="relative w-full h-64 bg-slate-200 rounded overflow-hidden mb-3">
                <Image
                  src="dog-before.jpg"
                  alt="After grooming"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-slate-600 text-center"><strong>Nachher</strong></p>
            </div>
          </div>

          {/* Good Caption Example */}
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
            <p className="font-bold text-green-900 mb-2">✓ Gute Caption:</p>
            <p className="text-slate-700 text-sm italic">"Vorher/Nachher – Max. Von verfilzt zu flauschig! 🐕"</p>
          </div>

          {/* Bad Caption Example */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-8">
            <p className="font-bold text-red-900 mb-2">✗ Nicht so gut:</p>
            <p className="text-slate-700 text-sm italic">"OH MEIN GOTT!!! Die BESTE Grooming EVER!!! 🐶✨💅😍🎉 SCHAU DIR DAS AN!!! Unser MAGISCHES Team hat es WIEDER getan!!! 🌟🌟🌟"</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Zusammenfassung</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-green-700 mb-4">✓ Do's</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Gute Lichtverhältnisse</li>
                  <li>• Der Hund sieht glücklich/entspannt aus</li>
                  <li>• Caption: kurz, "Vorher/Nachher – [Hundename]"</li>
                  <li>• Authentizität zeigen – echte Ergebnisse</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-red-700 mb-4">✗ Don'ts</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Keine Tausend Emojis</li>
                  <li>• Keine gestellten Posen</li>
                  <li>• Keine unrealistischen Filter</li>
                  <li>• Keine zu langen oder komplexen Captions</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </section>

        <div className="flex gap-4 justify-between mt-12">
          <Link href="/booking" className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-medium">← Zurück</Link>
          <Link href="/retention" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-medium">Weiter →</Link>
        </div>
      </div>
    </main>
  );
}
