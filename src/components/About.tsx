import { Award, Users, Car, ThumbsUp, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Calendar, value: '2009', label: 'Год основания' },
    { icon: Users, value: '15 000+', label: 'Довольных клиентов' },
    { icon: Car, value: '500+', label: 'Авто в наличии' },
    { icon: ThumbsUp, value: '98%', label: 'Рекомендуют нас' },
  ];

  const milestones = [
    { year: '2009', event: 'Открытие автосалона в Самаре' },
    { year: '2012', event: 'Первые 1000 проданных автомобилей' },
    { year: '2015', event: 'Расширение шоу-рума до 2000 м²' },
    { year: '2018', event: 'Запуск сервиса TRADE-IN' },
    { year: '2020', event: 'Открытие собственного техцентра' },
    { year: '2024', event: 'Более 15 000 клиентов за 15 лет' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM40 16c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 80c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-600/20 backdrop-blur px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-medium">О компании</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Помогаем выбрать автомобиль <span className="text-primary-400">мечты</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Автосалон «АвтоМир» — это команда профессионалов с многолетним опытом работы
            на рынке автомобилей. Мы не просто продаём автомобили, мы помогаем найти то, что идеально подходит именно вам.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 text-center border border-white/10 hover:border-primary-500/50 transition-colors">
              <item.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/11667545/pexels-photo-11667545.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Автосалон АвтоМир" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-sm">г. Самара, проспект Кирова, 34Б</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Наш путь развития</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary-500" />
                    {index < milestones.length - 1 && <div className="w-0.5 h-full bg-white/20 mt-2" />}
                  </div>
                  <div className="pb-4">
                    <span className="text-primary-400 font-semibold">{milestone.year}</span>
                    <p className="text-gray-400">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600/20 to-primary-800/20 rounded-2xl p-8 border border-primary-500/30">
          <h3 className="text-xl font-bold mb-4">Наша миссия</h3>
          <p className="text-gray-300 leading-relaxed">
            Мы стремимся сделать покупку автомобиля простой, прозрачной и приятной процедурой.
            Наша команда гарантирует честные цены, полную юридическую чистоту сделки и поддержку
            на всех этапах владения автомобилем. Каждый клиент для нас — это долгосрочное
            партнерство, а не одноразовая продажа.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
