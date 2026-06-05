'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { X } from 'lucide-react';
import { useCallback, useEffect } from 'react';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 pb-8 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-pink-600 mb-3">{title}</h2>
      <div className="text-gray-700 space-y-1">{children}</div>
    </div>
  );
}

export default function ImpressumModal() {
  const router = useRouter();
  const locale = useLocale();
  const isEn = locale === 'en';

  const close = useCallback(() => router.back(), [router]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [close]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {isEn ? 'Imprint' : 'Impressum'}
          </h1>
          <p className="text-gray-400 text-sm mb-8 pb-8 border-b border-gray-100">
            {isEn
              ? 'Operator of the website Jobwiese Student Services Europe LLC'
              : 'Betreiber der Website Jobwiese Student Services Europe LLC'}
          </p>

          <Section title={isEn ? 'Information pursuant to Section 5 TMG' : 'Angaben gemäß § 5 TMG'}>
            <p className="font-semibold text-gray-900">Jobwiese Student Services Europe LLC</p>
            <div className="mt-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                {isEn ? 'Postal Address' : 'Postanschrift'}
              </p>
              <p>23160 Fashion Dr STE 220</p>
              <p>{isEn ? 'Estero, FL 33928' : 'Estero FL 33928'}</p>
              <p>United States of America</p>
            </div>
            <p className="mt-3">
              <span className="text-gray-400 text-sm">{isEn ? 'Tax ID:' : 'Steuernummer:'}</span>{' '}
              <span className="font-medium">38-4384979</span>
            </p>
          </Section>

          <Section title={isEn ? 'Contact' : 'Kontakt'}>
            <p>
              <span className="text-gray-400 text-sm">{isEn ? 'Phone:' : 'Telefon:'}</span>{' '}
              <a href="tel:+12392875338" className="text-pink-600 hover:underline font-medium">
                +1 (239) 2875338
              </a>
            </p>
            <p>
              <span className="text-gray-400 text-sm">{isEn ? 'Email:' : 'E-Mail:'}</span>{' '}
              <a href="mailto:info@Jobwiese.com" className="text-pink-600 hover:underline font-medium">
                info@Jobwiese.com
              </a>
            </p>
          </Section>

          <Section title={isEn ? 'Website Information' : 'Hinweise zur Website'}>
            <p className="font-medium text-gray-800 mb-2">
              {isEn ? 'Information pursuant to Section 36 VSBG' : 'Information gemäß § 36 VSBG'}
            </p>
            <p className="leading-relaxed text-gray-600">
              {isEn
                ? 'Pursuant to Section 36 of the VSBG (Consumer Dispute Resolution Act – Act on Alternative Dispute Resolution in Consumer Matters), the operator of this website declares:'
                : 'Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website:'}
            </p>
            <p className="leading-relaxed text-gray-600 mt-3">
              {isEn
                ? 'We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.'
                : 'Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'}
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
