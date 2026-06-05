import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">{isEn ? 'Imprint' : 'Impressum'}</h1>

          <p className="text-gray-700 mb-6">
            {isEn
              ? 'Operator of the website Jobwiese Student Services Europe LLC'
              : 'Betreiber der Website Jobwiese Student Services Europe LLC'}
          </p>

          <h2 className="text-xl font-semibold mb-3">
            {isEn
              ? 'Information pursuant to Section 5 of the German Telemedia Act (TMG):'
              : 'Angaben gemäß § 5 TMG:'}
          </h2>
          <div className="text-gray-700 mb-8 space-y-1">
            <p>Jobwiese Student Services Europe LLC</p>
            <p className="mt-2 font-medium">{isEn ? 'Postal address:' : 'Postanschrift:'}</p>
            <p>23160 Fashion Dr STE 220</p>
            <p>{isEn ? 'Estero, FL 33928' : 'Estero FL 33928'}</p>
            <p>United States of America</p>
            <p className="mt-2">{isEn ? 'Tax ID: 38-4384979' : 'Steuernummer: 38-4384979'}</p>
          </div>

          <h2 className="text-xl font-semibold mb-3">{isEn ? 'Contact:' : 'Kontakt:'}</h2>
          <div className="text-gray-700 mb-8 space-y-1">
            <p>{isEn ? 'Phone: +1 (239) 2875338' : 'Telefon: +1 (239) 2875338'}</p>
            <p>
              {isEn ? 'Email: ' : 'E-Mail: '}
              <a href="mailto:info@Jobwiese.com" className="text-pink-600 hover:underline">
                info@Jobwiese.com
              </a>
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-3">
            {isEn ? 'Website information' : 'Hinweise zur Website'}
          </h2>

          <h3 className="text-lg font-semibold mb-2">
            {isEn
              ? 'Information pursuant to Section 36 of the German Consumer Dispute Resolution Act (VSBG)'
              : 'Information gemäß § 36 VSBG'}
          </h3>
          <p className="text-gray-700">
            {isEn
              ? 'Pursuant to Section 36 of the VSBG (Consumer Dispute Resolution Act – Act on Alternative Dispute Resolution in Consumer Matters), the operator of this website declares:'
              : 'Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website:'}
          </p>
          <p className="text-gray-700 mt-2">
            {isEn
              ? 'We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.'
              : 'Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
