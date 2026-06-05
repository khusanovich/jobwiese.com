'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
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
              {t('infoTitle')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:info@Jobwiese.com" className="text-gray-600 hover:text-pink-600 transition-colors">
                    info@Jobwiese.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('phone')}</h4>
                  <a href="tel:+12392875338" className="text-gray-600 hover:text-pink-600 transition-colors">
                    +1 (239) 2875338
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('sent')}</h3>
                <p className="text-gray-500 mb-6">{t('sentDesc')}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-pink-600 hover:underline font-medium"
                >
                  {t('sendAnother')}
                </button>
              </div>
            ) : (
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
                  {errors.name && <span className="text-red-600 text-sm">{t('required')}</span>}
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
                  {errors.email && <span className="text-red-600 text-sm">{t('required')}</span>}
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
                  {errors.message && <span className="text-red-600 text-sm">{t('required')}</span>}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {t('errorMsg')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {status === 'loading' ? t('sending') : t('submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
