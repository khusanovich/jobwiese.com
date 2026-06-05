'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useTransition } from 'react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (locale === newLocale) return;

    startTransition(() => {
      // Simply navigate to the new locale, keeping the current path structure
      router.replace(`/${newLocale}`);
    });
  };

  const navItems = [
    { key: 'home', href: `/${locale}#home` },
    { key: 'moving', href: `/${locale}#services` },
    { key: 'crafts', href: `/${locale}#services` },
    { key: 'garden', href: `/${locale}#services` },
    { key: 'pricing', href: `/${locale}#pricing` },
    { key: 'faq', href: `/${locale}#faq` },
    { key: 'contact', href: `/${locale}#contact` },
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href={`/${locale}`} className="hover:text-pink-500 transition-colors">
              JobWiese
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="hover:text-pink-500 transition-colors"
              >
                {t(item.key as any)}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-700 pl-4 ml-4">
              <Globe className="w-4 h-4" />
              <button
                onClick={() => switchLocale('de')}
                disabled={isPending || locale === 'de'}
                className={`px-3 py-1 rounded transition-colors ${
                  locale === 'de'
                    ? 'bg-pink-600 text-white'
                    : 'hover:bg-gray-800 text-gray-300'
                } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                DE
              </button>
              <button
                onClick={() => switchLocale('en')}
                disabled={isPending || locale === 'en'}
                className={`px-3 py-1 rounded transition-colors ${
                  locale === 'en'
                    ? 'bg-pink-600 text-white'
                    : 'hover:bg-gray-800 text-gray-300'
                } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block hover:text-pink-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key as any)}
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-2 pt-3 border-t border-gray-700">
              <Globe className="w-4 h-4" />
              <button
                onClick={() => {
                  switchLocale('de');
                  setMobileMenuOpen(false);
                }}
                disabled={isPending || locale === 'de'}
                className={`px-4 py-2 rounded transition-colors ${
                  locale === 'de' ? 'bg-pink-600 text-white' : 'bg-gray-800 text-gray-300'
                } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                DE
              </button>
              <button
                onClick={() => {
                  switchLocale('en');
                  setMobileMenuOpen(false);
                }}
                disabled={isPending || locale === 'en'}
                className={`px-4 py-2 rounded transition-colors ${
                  locale === 'en' ? 'bg-pink-600 text-white' : 'bg-gray-800 text-gray-300'
                } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
