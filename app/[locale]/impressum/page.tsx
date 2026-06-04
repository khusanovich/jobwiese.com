import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>

          <p className="text-gray-700 mb-6">
            Betreiber der Website Jobwiese Student Services Europe LLC
          </p>

          <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG:</h2>
          <div className="text-gray-700 mb-8 space-y-1">
            <p>Jobwiese Student Services Europe LLC</p>
            <p className="mt-2 font-medium">Postanschrift:</p>
            <p>23160 Fashion Dr STE 220, Estero</p>
            <p>FL 33928</p>
            <p>United States of America</p>
            <p className="mt-2">Steuernummer: 38-4384979</p>
          </div>

          <h2 className="text-xl font-semibold mb-3">Kontakt:</h2>
          <div className="text-gray-700 mb-8 space-y-1">
            <p>Telefon: +100000000 (wird noch aktualisiert)</p>
            <p>
              E-Mail:{' '}
              <a href="mailto:info@Jobwiese.com" className="text-pink-600 hover:underline">
                info@Jobwiese.com
              </a>
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-3">Hinweise zur Website</h2>

          <h3 className="text-lg font-semibold mb-2">Information gemäß § 36 VSBG</h3>
          <p className="text-gray-700">
            Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative
            Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website:
          </p>
          <p className="text-gray-700 mt-2">
            Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
