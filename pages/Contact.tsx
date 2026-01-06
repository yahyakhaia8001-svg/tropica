import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS, LICENSE_NUMBER, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        destination: '',
        budget: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create WhatsApp message
        const message = `Bonjour Tropicam Voyage !%0A%0AJe souhaite obtenir un devis :%0A%0A👤 Nom: ${formData.name}%0A📞 Téléphone: ${formData.phone}%0A✉️ Email: ${formData.email}%0A🌍 Destination: ${formData.destination}%0A💰 Budget: ${formData.budget}%0A%0A📝 Message: ${formData.message}`;

        // Simulate submission delay then redirect to WhatsApp
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            window.open(`https://wa.me/212608986949?text=${message}`, '_blank');
        }, 1000);
    };

    const destinations = [
        'Turquie (Istanbul)',
        'Dubaï & Abu Dhabi',
        'Omra 2025',
        'Espagne (Barcelone)',
        'France (Paris)',
        'Thaïlande',
        'Maldives',
        'Autre destination'
    ];

    const budgets = [
        'Moins de 5,000 MAD',
        '5,000 - 10,000 MAD',
        '10,000 - 20,000 MAD',
        '20,000 - 50,000 MAD',
        'Plus de 50,000 MAD'
    ];

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-12 md:mb-16">
                    <span className="text-tropicam-orange font-bold uppercase tracking-widest text-xs mb-2 block">Contactez-nous</span>
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Demandez Votre Devis Gratuit</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">Nos conseillers experts basés à Settat répondent à vos demandes en moins de 5 minutes via WhatsApp.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Contact Form */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 order-2 lg:order-1">
                        <h2 className="text-xl font-bold text-tropicam-navy mb-6 flex items-center gap-2">
                            <Send className="text-tropicam-orange" size={24} />
                            Formulaire de Devis Rapide
                        </h2>

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="text-green-600" size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-tropicam-navy mb-3">Demande Envoyée !</h3>
                                <p className="text-gray-500 mb-6">Nous vous répondrons dans les 5 prochaines minutes sur WhatsApp.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-tropicam-orange font-bold hover:underline"
                                >
                                    Envoyer une autre demande
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Nom Complet *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Votre nom"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tropicam-orange/20 focus:border-tropicam-orange outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone (WhatsApp) *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+212 6XX XXX XXX"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tropicam-orange/20 focus:border-tropicam-orange outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="votre@email.com"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tropicam-orange/20 focus:border-tropicam-orange outline-none transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Destination Souhaitée *</label>
                                        <select
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tropicam-orange/20 focus:border-tropicam-orange outline-none transition-all bg-white"
                                        >
                                            <option value="">Choisir une destination</option>
                                            {destinations.map((dest, idx) => (
                                                <option key={idx} value={dest}>{dest}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Budget Approximatif</label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tropicam-orange/20 focus:border-tropicam-orange outline-none transition-all bg-white"
                                        >
                                            <option value="">Sélectionner un budget</option>
                                            {budgets.map((budget, idx) => (
                                                <option key={idx} value={budget}>{budget}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Votre Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Décrivez votre projet de voyage : dates, nombre de personnes, préférences..."
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tropicam-orange/20 focus:border-tropicam-orange outline-none transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-tropicam-orange hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <MessageCircle size={20} />
                                            Envoyer via WhatsApp
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-gray-400 text-center">
                                    En soumettant ce formulaire, vous serez redirigé vers WhatsApp pour finaliser votre demande.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Info Cards */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-green-50 p-3 rounded-full text-green-600 shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-tropicam-navy">Téléphone & WhatsApp</h3>
                                <p className="text-gray-500 text-sm mb-2">Réponse en moins de 5 minutes</p>
                                <a href={WHATSAPP_LINK} className="font-bold text-tropicam-orange text-xl hover:underline">{PHONE_NUMBER}</a>
                            </div>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-orange-50 p-3 rounded-full text-tropicam-orange shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-tropicam-navy">Notre Agence</h3>
                                <p className="text-gray-500 text-sm mb-2">Licence N° {LICENSE_NUMBER}</p>
                                <p className="font-medium text-gray-700">{ADDRESS}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-full text-tropicam-navy shrink-0">
                                <Clock size={24} />
                            </div>
                            <div className="w-full">
                                <h3 className="font-bold text-lg text-tropicam-navy mb-3">Horaires d'Ouverture</h3>
                                <div className="grid grid-cols-[auto_auto] gap-x-8 gap-y-2 text-sm text-gray-600 w-full max-w-sm">
                                    <span className="font-medium">Lundi - Vendredi :</span>
                                    <span className="text-right font-bold text-tropicam-navy">09:00 - 19:00</span>

                                    <span className="font-medium">Samedi :</span>
                                    <span className="text-right font-bold text-tropicam-navy">09:00 - 13:00</span>

                                    <span className="font-medium">Support WhatsApp :</span>
                                    <span className="text-right text-tropicam-orange font-bold">7j/7</span>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed for Settat */}
                        <div className="bg-gray-100 rounded-2xl overflow-hidden h-[200px] md:h-[250px] relative shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.8661234567!2d-7.616389!3d33.0012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda6a0a0a0a0a0a0%3A0x0!2sSettat%2C%20Morocco!5e0!3m2!1sfr!2sma!4v1704067200000!5m2!1sfr!2sma"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Tropicam Voyage Settat"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* Trust Banner */}
                <div className="mt-12 bg-tropicam-navy rounded-2xl p-6 md:p-8 text-center text-white">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-tropicam-orange" size={20} />
                            <span>Agence Agréée N° {LICENSE_NUMBER}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-tropicam-orange" size={20} />
                            <span>Paiement Sécurisé en MAD</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-tropicam-orange" size={20} />
                            <span>Réponse Garantie en 5 min</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;