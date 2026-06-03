'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const t = useTranslations('contact');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    alert('Nachricht gesendet! (Demo)');
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          {t('title')}
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Kontaktinformationen
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@jobwiese.de</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600">+49 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  {t('name')}
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 text-gray-900"
                />
                {errors.name && (
                  <span className="text-red-600 text-sm">Pflichtfeld</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  {t('email')}
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 text-gray-900"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">Pflichtfeld</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  {t('message')}
                </label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 text-gray-900"
                />
                {errors.message && (
                  <span className="text-red-600 text-sm">Pflichtfeld</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
