'use client';

import { useTranslations } from 'next-intl';
import { Users, HeadphonesIcon, MapPin, Tag } from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');
  const tStats = useTranslations('statistics');

  const features = [
    {
      icon: Users,
      title: t('feature1.title'),
      description: t('feature1.description'),
    },
    {
      icon: HeadphonesIcon,
      title: t('feature2.title'),
      description: t('feature2.description'),
    },
    {
      icon: MapPin,
      title: t('feature3.title'),
      description: t('feature3.description'),
    },
    {
      icon: Tag,
      title: t('feature4.title'),
      description: t('feature4.description'),
    },
  ];

  const statistics = [
    { value: '15.000+', label: tStats('bookings') },
    { value: '98%', label: tStats('satisfied') },
    { value: '40.000+', label: tStats('students') },
    { value: '95%', label: tStats('referral') },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          {t('title')}
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-pink-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-pink-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
