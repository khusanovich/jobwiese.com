'use client';

import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

export default function Pricing() {
  const t = useTranslations('pricing');

  const packages = [
    {
      key: 'small',
      title: t('small.title'),
      price: t('small.price'),
      helpers: t('small.helpers'),
      duration: t('small.duration'),
      popular: false,
    },
    {
      key: 'medium',
      title: t('medium.title'),
      price: t('medium.price'),
      helpers: t('medium.helpers'),
      duration: t('medium.duration'),
      popular: true,
    },
    {
      key: 'large',
      title: t('large.title'),
      price: t('large.price'),
      helpers: t('large.helpers'),
      duration: t('large.duration'),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.key}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8 ${
                pkg.popular ? 'ring-4 ring-pink-600 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {pkg.title}
                </h3>
                <div className="text-5xl font-bold text-pink-600 mb-2">
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{pkg.helpers}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{pkg.duration}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">24/7 Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Versichert</span>
                </li>
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-pink-600 hover:bg-pink-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {t('bookNow')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
