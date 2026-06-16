import { Fuel, Settings, Users, Calendar, ArrowRight } from 'lucide-react';

const Cars = () => {
  const cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2024,
      price: '3 500 000',
      oldPrice: '3 800 000',
      image: 'https://images.pexels.com/photos/1006502/pexels-photo-1006502.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        engine: '2.5 л',
        power: '181 л.с.',
        transmission: 'Автомат',
        drive: 'Передний',
      },
      tags: ['Новинка', 'В наличии'],
      type: 'Седан',
    },
    {
      id: 2,
      brand: 'Kia',
      model: 'Sportage',
      year: 2024,
      price: '3 200 000',
      oldPrice: null,
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        engine: '2.0 л',
        power: '150 л.с.',
        transmission: 'Автомат',
        drive: 'Полный',
      },
      tags: ['Хит продаж', 'В наличии'],
      type: 'Кроссовер',
    },
    {
      id: 3,
      brand: 'Hyundai',
      model: 'Tucson',
      year: 2024,
      price: '3 100 000',
      oldPrice: '3 350 000',
      image: 'https://images.pexels.com/photos/1625726/pexels-photo-1625726.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        engine: '2.0 л',
        power: '150 л.с.',
        transmission: 'Автомат',
        drive: 'Полный',
      },
      tags: ['Скидка', 'В наличии'],
      type: 'Кроссовер',
    },
    {
      id: 4,
      brand: 'BMW',
      model: 'X5',
      year: 2023,
      price: '8 900 000',
      oldPrice: null,
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        engine: '3.0 л',
        power: '340 л.с.',
        transmission: 'Автомат',
        drive: 'Полный',
      },
      tags: ['Премиум', 'Под заказ'],
      type: 'Внедорожник',
    },
    {
      id: 5,
      brand: 'Volkswagen',
      model: 'Tiguan',
      year: 2024,
      price: '3 800 000',
      oldPrice: '4 000 000',
      image: 'https://images.pexels.com/photos/120505/pexels-photo-120505.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        engine: '2.0 л',
        power: '180 л.с.',
        transmission: 'Робот',
        drive: 'Полный',
      },
      tags: ['Акция', 'В наличии'],
      type: 'Кроссовер',
    },
    {
      id: 6,
      brand: 'Mercedes-Benz',
      model: 'E-Class',
      year: 2024,
      price: '7 200 000',
      oldPrice: null,
      image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        engine: '2.0 л',
        power: '258 л.с.',
        transmission: 'Автомат',
        drive: 'Задний',
      },
      tags: ['Бизнес-класс', 'Под заказ'],
      type: 'Седан',
    },
    {
      id: 7,
      brand: 'Skoda',
      model: 'Octavia',
      year: 2024,
      price: '2 400 000',
      oldPrice: null,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        engine: '1.8 л',
        power: '180 л.с.',
        transmission: 'Робот',
        drive: 'Передний',
      },
      tags: ['Выгодно', 'В наличии'],
      type: 'Лифтбек',
    },
    {
      id: 8,
      brand: 'Audi',
      model: 'Q7',
      year: 2023,
      price: '8 500 000',
      oldPrice: '9 100 000',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        engine: '3.0 л',
        power: '286 л.с.',
        transmission: 'Автомат',
        drive: 'Полный',
      },
      tags: ['Премиум', 'В наличии'],
      type: 'Внедорожник',
    },
  ];

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Популярные автомобили</h2>
          <p className="section-subtitle">
            Актуальные предложения из нашего каталога. Все автомобили в наличии или доступны под заказ.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="card overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {car.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 text-xs font-semibold rounded ${
                        tag === 'Скидка' || tag === 'Акция'
                          ? 'bg-red-500 text-white'
                          : tag === 'Новинка'
                          ? 'bg-green-500 text-white'
                          : tag === 'Хит продаж'
                          ? 'bg-amber-500 text-white'
                          : 'bg-gray-900/80 text-white'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Type */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur text-xs font-medium text-gray-700 rounded">
                    {car.type}
                  </span>
                </div>
                {/* Overlay button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-500 hover:text-white transition-colors">
                    Подробнее
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{car.brand} {car.model}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {car.year}
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Fuel className="w-4 h-4 text-gray-400" />
                    <span>{car.specs.engine}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Settings className="w-4 h-4 text-gray-400" />
                    <span>{car.specs.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 text-gray-400 text-center font-semibold">л.с.</span>
                    <span>{car.specs.power}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>{car.specs.drive}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end justify-between pt-3 border-t">
                  <div>
                    {car.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">{car.oldPrice} руб.</span>
                    )}
                    <p className="text-xl font-bold text-gray-900">{car.price} руб.</p>
                  </div>
                  <button className="p-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#contacts" className="btn-primary inline-flex items-center gap-2">
            Смотреть весь каталог
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cars;
