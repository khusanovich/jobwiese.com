'use client';

import { useTranslations } from 'next-intl';
import { FileText, Users, CheckCircle } from 'lucide-react';

export default function ProcessFlow() {
  const t = useTranslations('process');

  const steps = [
    {
      icon: FileText,
      title: t('step1.title'),
      description: t('step1.description'),
    },
    {
      icon: Users,
      title: t('step2.title'),
      description: t('step2.description'),
    },
    {
      icon: CheckCircle,
      title: t('step3.title'),
      description: t('step3.description'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center mt-4">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-pink-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
