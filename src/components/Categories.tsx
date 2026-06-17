import { Car, Truck, Wrench, Zap, Leaf, Trophy, Users, Star } from 'lucide-react';

const Categories = () => {
  const categories = [
    { icon: Car, title: 'Легковые автомобили', count: '180+ моделей', description: 'Седаны, хэтчбеки, универсалы для всей семьи', color: 'from-blue-500 to-blue-600' },
    { icon: Truck, title: 'Внедорожники и кроссоверы', count: '120+ моделей', description: 'SUV для города и бездорожья', color: 'from-green-500 to-green-600' },
    { icon: Wrench, title: 'Коммерческий транспорт', count: '50+ моделей', description: 'Грузовики, фургоны для бизнеса', color: 'from-orange-500 to-orange-600' },
    { icon: Zap, title: 'Спортивные авто', count: '30+ моделей', description: 'Для ценителей скорости и стиля', color: 'from-red-500 to-red-600' },
    { icon: Leaf, title: 'Электромобили', count: '40+ моделей', description: 'Экологичный транспорт будущего', color: 'from-teal-500 to-teal-600' },
    { icon: Users, title: 'Семейные минивэны', count: '25+ моделей', description: 'Комфорт для всей семьи', color: 'from-purple-500 to-purple-600' },
    { icon: Star, title: 'Бизнес-класс', count: '35+ моделей', description: 'Премиальные автомобили представительского класса', color: 'from-amber-500 to-amber-600' },
    { icon: Trophy, title: 'Авто с пробегом', count: '200+ моделей', description: 'Проверенные автомобили с гарантией', color: 'from-indigo-500 to-indigo-600' },
  ];

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Категории автомобилей</h2>
          <p className="section-subtitle">
            Выберите подходящий тип автомобиля для ваших потребностей.
            В наличии более 500 автомобилей различных марок и моделей.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a key={index} href="#cars" className="group card p-6 hover:cursor-pointer">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{category.title}</h3>
              <p className="text-sm text-primary-600 font-semibold mb-2">{category.count}</p>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
