'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">JobWiese</h3>
            <p className="text-gray-400">
              Ihre verlässliche Lösung für Umzüge, Handwerk und Gartenarbeit.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  {t('impressum')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  {t('terms')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  {t('cookies')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@jobwiese.de</li>
              <li>Tel: +49 123 456 7890</li>
              <li>24/7 Support verfügbar</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} JobWiese. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
