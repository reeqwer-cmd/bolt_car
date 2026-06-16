import { FileSearch, HandCoins, Car, Wrench, Scale, FileText, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Продажа автомобилей',
      description: 'Широкий выбор новых и подержанных автомобилей. Персональный подбор, тест-драйв, демонстрация всех возможностей.',
      features: ['Более 500 авто в наличии', 'Тест-драйв в день обращения', 'Возврат в течение 7 дней'],
    },
    {
      icon: FileSearch,
      title: 'Подбор автомобиля',
      description: 'Персональный менеджер подберет автомобиль согласно вашим требованиям. Учитываем бюджет, цели и предпочтения.',
      features: ['Индивидуальный подход', 'Анализ рынка', 'Проверка истории авто'],
    },
    {
      icon: CreditCard,
      title: 'Автокредитование',
      description: 'Сотрудничаем с ведущими банками. Поможем выбрать лучшие условия кредита. Одобрение за 15 минут.',
      features: ['Ставка от 4.9%', 'Первый взнос от 0%', 'Срок до 7 лет'],
    },
    {
      icon: HandCoins,
      title: 'TRADE-IN',
      description: 'Обменяйте ваш старый автомобиль на новый. Честная оценка состояния, быстрое оформление сделки.',
      features: ['Оценка за 30 минут', 'Доплаты до 500 000 руб', 'Быстрое оформление'],
    },
    {
      icon: Wrench,
      title: 'Сервисное обслуживание',
      description: 'Полный спектр услуг по техническому обслуживанию. Гарантия на все работы. Качественные запчасти.',
      features: ['ТО от 3 000 руб', 'Гарантия на работы', 'Оригинальные запчасти'],
    },
    {
      icon: FileText,
      title: 'Страхование',
      description: 'Поможем оформить ОСАГО, КАСКО, GAP-страхование. Работаем с надежными страховыми компаниями.',
      features: ['ОСАГО за 10 минут', 'КАСКО со скидкой', 'GAP-страхование'],
    },
    {
      icon: Scale,
      title: 'Юридическое сопровождение',
      description: 'Полная юридическая проверка автомобиля. Помощь в оформлении документов. Гарантия чистоты сделки.',
      features: ['Проверка истории', 'Проверка ограничений', 'Составление договора'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-subtitle">
            Комплексное обслуживание покупателей автомобилей.
            От подбора до технического обслуживания.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-primary-50 hover:to-primary-100 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-primary-200"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-100 group-hover:bg-primary-600 flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
