import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    { id: 1, date: '10 июня 2026', title: 'Поступление новых моделей Toyota Camry и Kia K5', excerpt: 'В нашем автосалоне появились новые поступления Toyota Camry 2024 модельного года и Kia K5. Специальные условия при покупке до конца месяца.', image: 'https://images.pexels.com/photos/1006502/pexels-photo-1006502.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Новинки' },
    { id: 2, date: '5 июня 2026', title: 'Акция: Кредит на новый автомобиль от 4.9% годовых', excerpt: 'Только в июне — специальные условия кредитования на новые автомобили. Первый взнос от 0%, срок до 7 лет, одобрение за 15 минут.', image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Акция' },
    { id: 3, date: '1 июня 2026', title: 'Наши клиенты оценили сервис — рейтинг 4.9 из 5', excerpt: 'Благодарим наших клиентов за отзывы! По итогам опроса 98% покупателей рекомендуют наш автосалон друзьям и знакомым.', image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Новости' },
    { id: 4, date: '25 мая 2026', title: 'День открытых дверей: тест-драйв всех моделей', excerpt: 'Приглашаем на День открытых дверей! Возможность протестировать любые автомобили из нашего каталога. Подарки каждому посетителю.', image: 'https://images.pexels.com/photos/11667545/pexels-photo-11667545.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'События' },
    { id: 5, date: '20 мая 2026', title: 'Расширение TRADE-IN: принимаем все марки', excerpt: 'Теперь принимаем в TRADE-IN автомобили любых марок и годов выпуска. Честная оценка, быстрое оформление.', image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Услуги' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Новости и акции</h2>
          <p className="section-subtitle">
            Следите за нашими новостями, акциями и спецпредложениями.
            Будьте первыми в курсе лучших предложений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item) => (
            <article key={item.id} className="card overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">{item.tag}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Calendar className="w-4 h-4" />{item.date}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all">
                  Читать далее <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {news.slice(3, 5).map((item) => (
            <article key={item.id} className="card overflow-hidden group flex">
              <div className="w-40 h-full shrink-0 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded">{item.tag}</span>
                  <span className="text-gray-500 text-xs">{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{item.title}</h3>
                <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all">
                  Подробнее <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="btn-secondary inline-flex items-center gap-2">
            Все новости <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
