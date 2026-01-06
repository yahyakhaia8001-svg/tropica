import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Linkedin, ShieldCheck, CreditCard, Clock } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS, EMAIL, LOGO_SVG_DATA, FACEBOOK_LINK, INSTAGRAM_LINK, LICENSE_NUMBER, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tropicam-navy text-white pt-12 md:pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
            <div className="bg-tropicam-orange p-2 rounded-lg">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div>
              <p className="font-bold text-white">Agence Agréée</p>
              <p className="text-sm text-gray-400">Licence N° {LICENSE_NUMBER}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
            <div className="bg-green-500 p-2 rounded-lg">
              <CreditCard className="text-white" size={24} />
            </div>
            <div>
              <p className="font-bold text-white">Paiement Sécurisé</p>
              <p className="text-sm text-gray-400">100% en Dirhams Marocains</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Clock className="text-white" size={24} />
            </div>
            <div>
              <p className="font-bold text-white">Réponse Rapide</p>
              <p className="text-sm text-gray-400">En moins de 5 minutes</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-tropicam-orange rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-bold text-xl overflow-hidden p-0.5">
                <img src={LOGO_SVG_DATA} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl leading-none tracking-tight">TROPICAM</span>
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-gray-400">VOYAGE</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre agence de voyage de confiance au Maroc. Agrément Ministère du Tourisme N° {LICENSE_NUMBER}. Spécialiste des voyages organisés Turquie, Omra, et séjours à la carte.
            </p>
            <div className="flex gap-4">
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tropicam-orange transition-colors hover:-translate-y-1 transform duration-300" aria-label="Facebook"><Facebook size={18} /></a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tropicam-orange transition-colors hover:-translate-y-1 transform duration-300" aria-label="Instagram"><Instagram size={18} /></a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center hover:bg-green-500 transition-colors hover:-translate-y-1 transform duration-300" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-tropicam-orange after:rounded-full">Agence</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Nos Services</Link></li>
              <li><Link to="/blog" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Blog Voyage Maroc</Link></li>
              <li><Link to="/contact" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Contactez-nous</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-tropicam-orange after:rounded-full">Top Destinations</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/packages?cat=Turquie" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Voyage Organisé Turquie</Link></li>
              <li><Link to="/packages?cat=Dubai" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Séjour Dubaï Promo</Link></li>
              <li><Link to="/packages?cat=Omra" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Omra Ramadan 2025</Link></li>
              <li><Link to="/packages?cat=Europe" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Voyages Europe</Link></li>
              <li><Link to="/packages?cat=Asie" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Découverte Asie</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-tropicam-orange after:rounded-full">Contactez-nous</h4>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 bg-white/5 p-2 rounded-lg group-hover:bg-tropicam-orange transition-colors">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="leading-relaxed">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-tropicam-orange transition-colors">
                  <Phone size={16} className="text-white" />
                </div>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="font-bold text-white hover:text-tropicam-orange transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-tropicam-orange transition-colors">
                  <Mail size={16} className="text-white" />
                </div>
                <a href={`mailto:${EMAIL}`} className="hover:text-tropicam-orange transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2025 Tropicam Voyage Maroc. Tous droits réservés. Licence N° {LICENSE_NUMBER}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Plan du site</a>
          </div>
          <p className="flex items-center gap-1">Fait avec <span className="text-red-500">♥</span> à Settat 🇲🇦</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;