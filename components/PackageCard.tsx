import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, MessageCircle, Flame } from 'lucide-react';
import { Package } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  // Calculate fake original price (20% higher) for discount effect
  const originalPrice = Math.round(pkg.price * 1.2);
  const discount = Math.round(((originalPrice - pkg.price) / originalPrice) * 100);

  // Fake scarcity - random seats left between 3-8
  const seatsLeft = Math.floor(Math.random() * 6) + 3;

  // Fake viewers - random between 5-15
  const viewers = Math.floor(Math.random() * 11) + 5;

  const handleWhatsAppClick = () => {
    const message = `Bonjour ! Je suis intéressé(e) par le voyage "${pkg.title}" à ${pkg.price} MAD. Pouvez-vous me donner plus d'informations ?`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-52 md:h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
          <Flame size={12} />
          -{discount}%
        </div>

        {/* Live Viewers Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          {viewers} regardent
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-tropicam-navy text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
          <Clock size={12} />
          {pkg.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {pkg.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-[10px] font-semibold text-tropicam-navy bg-blue-50 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg md:text-xl font-bold text-tropicam-navy mb-2 leading-tight group-hover:text-tropicam-orange transition-colors line-clamp-2">
          {pkg.title}
        </h3>

        {/* Destination */}
        <p className="text-sm text-gray-500 mb-4">{pkg.destination}</p>

        {/* Price Section */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-sm text-gray-400 line-through">{originalPrice.toLocaleString()} MAD</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">Économisez {(originalPrice - pkg.price).toLocaleString()} MAD</span>
          </div>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-2xl md:text-3xl font-extrabold text-tropicam-navy">{pkg.price.toLocaleString()}</span>
            <span className="text-sm font-bold text-gray-500">MAD</span>
            <span className="text-xs text-gray-400 ml-1">/ personne</span>
          </div>

          {/* Urgency */}
          <div className="flex items-center gap-1.5 text-orange-600 text-xs font-bold mb-4 bg-orange-50 px-3 py-2 rounded-lg">
            <Users size={14} />
            <span>⚠️ Plus que {seatsLeft} places disponibles !</span>
          </div>

          {/* CTAs */}
          <div className="flex gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Réserver
            </button>
            <Link
              to="/contact"
              className="flex-1 bg-tropicam-navy hover:bg-tropicam-orange text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm"
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;