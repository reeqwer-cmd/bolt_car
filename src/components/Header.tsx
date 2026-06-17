import { useState, useEffect } from 'react';
import { Phone, Menu, X, Car } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'Каталог', href: '#categories' },
    { label: 'Преимущества', href: '#advantages' },
    { label: 'Автомобили', href: '#cars' },
    { label: 'Услуги', href: '#services' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className={`p-2 rounded-xl ${isScrolled ? 'bg-primary-600' : 'bg-white/10 backdrop-blur'}`}>
              <Car className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <div>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Авто<span className="text-primary-500">Мир</span>
              </span>
              <p className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                Продажа автомобилей
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+78469955000"
              className={`flex items-center gap-2 font-semibold ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <Phone className="w-5 h-5" />
              +7 (846) 995-50-00
            </a>
            <a href="#contacts" className="btn-primary">
              Оставить заявку
            </a>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t">
              <a
                href="tel:+78469955000"
                className="flex items-center gap-2 py-3 text-gray-900 font-semibold"
              >
                <Phone className="w-5 h-5" />
                +7 (846) 995-50-00
              </a>
              <a href="#contacts" className="btn-primary block text-center mt-2">
                Оставить заявку
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
