import { Car, Phone, Mail, MapPin, Facebook, Instagram, Send, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    catalog: [
      { label: 'Легковые авто', href: '#cars' },
      { label: 'Кроссоверы', href: '#cars' },
      { label: 'Внедорожники', href: '#cars' },
      { label: 'Бизнес-класс', href: '#cars' },
      { label: 'Авто с пробегом', href: '#cars' },
    ],
    services: [
      { label: 'Автокредитование', href: '#services' },
      { label: 'TRADE-IN', href: '#services' },
      { label: 'Страхование', href: '#services' },
      { label: 'Техобслуживание', href: '#services' },
      { label: 'Подбор авто', href: '#services' },
    ],
    company: [
      { label: 'О компании', href: '#about' },
      { label: 'Отзывы клиентов', href: '#about' },
      { label: 'Вакансии', href: '#' },
      { label: 'Партнерам', href: '#' },
      { label: 'Контакты', href: '#contacts' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'VK' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Send, href: '#', label: 'Telegram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary-600">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Авто<span className="text-primary-400">Мир</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Автосалон «АвтоМир» — продажа новых и подержанных автомобилей в Самаре.
              Широкий выбор, выгодные условия, профессиональный подход.
            </p>
            <div className="space-y-3">
              <a href="tel:+78469955000" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary-400" />+7 (846) 995-50-00
              </a>
              <a href="mailto:info@automir.ru" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary-400" />info@automir.ru
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-primary-400" />г. Самара, проспект Кирова, 34Б
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Каталог</h4>
            <ul className="space-y-2">
              {footerLinks.catalog.map((link, index) => (
                <li key={index}><a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}><a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}><a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">© {currentYear} АвтоМир. Все права защищены.</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label={social.label}>
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
