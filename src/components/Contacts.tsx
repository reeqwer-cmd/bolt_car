import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    carInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '', carInterest: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (846) 995-50-00',
      href: 'tel:+78469955000',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@automir.ru',
      href: 'mailto:info@automir.ru',
    },
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Самара, проспект Кирова, 34Б',
      href: 'https://yandex.ru/maps/-/CDxCZ2Fh',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: 'Ежедневно: 09:00 - 21:00',
      href: null,
    },
  ];

  const transportOptions = [
    {
      type: 'Станция метро',
      routes: '«Кировская» — 5 минут пешком',
    },
    {
      type: 'Автобусы',
      routes: '47, 21, 29, 30, 38, 51, 103к, 124',
    },
    {
      type: 'Маршрутное такси',
      routes: '27к, 30, 123, 203, 206, 213, 221, 247, 261',
    },
    {
      type: 'Трамвай',
      routes: '8, 10, 25',
    },
    {
      type: 'Троллейбус',
      routes: '8, 12, 13, 18',
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle">
            Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут.
            Или позвоните нам по телефону.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Оставить заявку</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h4>
                <p className="text-gray-600 mb-6">Наши менеджеры свяжутся с вами в ближайшее время.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Отправить еще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="carInterest" className="block text-sm font-medium text-gray-700 mb-1">
                    Интересующий автомобиль
                  </label>
                  <select
                    id="carInterest"
                    name="carInterest"
                    value={formData.carInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                  >
                    <option value="">Выберите категорию</option>
                    <option value="sedan">Легковой автомобиль</option>
                    <option value="suv">Кроссовер / Внедорожник</option>
                    <option value="sport">Спортивный автомобиль</option>
                    <option value="business">Бизнес-класс</option>
                    <option value="electric">Электромобиль</option>
                    <option value="used">Авто с пробегом</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Опишите ваши пожелания или задайте вопрос..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Отправить заявку
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-900">{item.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Transport Info */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">Как к нам добраться</h4>
              <div className="space-y-3">
                {transportOptions.map((option, index) => (
                  <div key={index} className="flex items-center gap-4 text-sm">
                    <span className="w-28 text-gray-500 shrink-0">{option.type}:</span>
                    <span className="text-gray-700">{option.routes}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae3b5c8f7a9d2e6b4c8f1a5d3e7b9c2f4&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  title="Карта"
                  className="absolute inset-0"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Остановка «Метро Кировская» — прямо у входа в автосалон
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
