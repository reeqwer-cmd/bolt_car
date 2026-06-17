import { Shield, CreditCard, RefreshCw, Award, Clock, Headphones, CheckCircle, Percent } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    { icon: Shield, title: 'Гарантия качества', description: 'Все автомобили проходят тщательную проверку технического состояния. Гарантия до 5 лет на новые авто.' },
    { icon: CreditCard, title: 'Выгодный кредит', description: 'Сотрудничаем с 20+ банками. Ставка от 4.9% годовых. Одобрение за 15 минут. Первый взнос от 0%.' },
    { icon: RefreshCw, title: 'TRADE-IN', description: 'Обменяйте ваш старый автомобиль на новый. Честная оценка, быстрое оформление. Доплаты до 500 000 руб.' },
    { icon: Award, title: '15 лет на рынке', description: 'За 15 лет работы мы помогли более 15 000 клиентам найти автомобиль мечты. Доверие и репутация.' },
    { icon: Clock, title: 'Быстрое оформление', description: 'Оформление сделки в течение 1 часа. Все документы готовим за вас. Выездная продажа с доставкой.' },
    { icon: Headphones, title: 'Поддержка 24/7', description: 'Персональный менеджер для каждого клиента. Консультации и помощь на всех этапах покупки.' },
    { icon: CheckCircle, title: 'Юридическая чистота', description: 'Полная проверка истории автомобиля. Гарантия отсутствия обременений и ограничений.' },
    { icon: Percent, title: 'Акции и скидки', description: 'Регулярные акции и спецпредложения. Скидки до 15% на популярные модели. Бонусы постоянным клиентам.' },
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Почему выбирают нас</h2>
          <p className="section-subtitle">
            Мы делаем покупку автомобиля простой, выгодной и безопасной.
            Вот что отличает нас от конкурентов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="group p-6 rounded-xl border-2 border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-100 group-hover:bg-primary-600 flex items-center justify-center mb-4 transition-colors duration-300">
                <advantage.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contacts" className="btn-primary inline-block">Получить консультацию</a>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
