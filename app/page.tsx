import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Ruff Cuts Brand Voice Guide
        </h1>
        <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto">
          Ein vollständiger Leitfaden dafür, wie Ruff Cuts mit Kunden kommuniziert.
          Alles, was du brauchst – von Voice-Prinzipien bis zu praktischen Templates.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          <Link
            href="/voice"
            className="bg-orange-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-800 transition"
          >
            Beginne mit Voice
          </Link>
          <Link
            href="/awareness"
            className="bg-slate-200 text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-slate-300 transition"
          >
            Alle Situationen
          </Link>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Voice-Prinzipien</h3>
          <p className="text-slate-600 text-sm">Wer Ruff Cuts ist – die Grundlage für alles, was wir schreiben.</p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">6 Customer Journey Phasen</h3>
          <p className="text-slate-600 text-sm">Jede Phase mit Do's, Don'ts, Beispielen und Templates.</p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Copy-Ready Templates</h3>
          <p className="text-slate-600 text-sm">Einfach kopieren, anpassen, nutzen. Oder experimentieren und teilen.</p>
        </div>
      </section>
    </main>
  );
}
