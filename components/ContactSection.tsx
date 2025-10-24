"use client";

import Image from "next/image";

const ContactSection = () => {
  const phoneNumber = "89385281888";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
  const telegramUrl = "https://t.me/your_telegram_channel"; // Замените на реальную ссылку на Telegram канал
  
  return (
    <div className="py-16 px-4 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 max-w-full">
            Готовы забронировать апартаменты?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/80 max-w-full mx-auto">
            Свяжитесь с нами прямо сейчас, чтобы забронировать ваш отдых в Домбае
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#E0E0E0]">
            <div className="mb-8">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3A7D44] mb-2">8 (938) 528-18-88</div>
              <p className="text-sm md:text-[#1A1A1A]/70">Бала</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <a 
                href={`tel:${phoneNumber}`} 
                className="bg-[#3A7D44] hover:bg-[#2E6A3A] text-white font-bold py-4 px-8 rounded-xl transition duration-300 flex items-center justify-center gap-3 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-normal">Позвонить</span>
                  <span className="text-lg font-bold">{phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5')}</span>
                </div>
              </a>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl transition duration-300 flex items-center justify-center gap-3 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.46-8.432" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-normal">Написать в</span>
                  <span className="text-lg font-bold">WhatsApp</span>
                </div>
              </a>
            </div>

            <div className="mb-8">
              <a 
                href={telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-4 px-8 rounded-xl transition duration-300 flex items-center justify-center gap-3 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-normal">Наш</span>
                  <span className="text-lg font-bold">Telegram канал</span>
                </div>
              </a>
            </div>

            <p className="text-xs md:text-sm text-[#1A1A1A]/60 mt-6">
              Мы ответим на все ваши вопросы и поможем с бронированием
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#E0E0E0]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 text-center max-w-full">
              Найдите нас на карте
            </h3>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-[#E0E0E0]">
              <iframe 
                src="https://yandex.ru/map-widget/v1/org/elitnyye_apartamenty_balala_/186668549633/?ll=41.618804%2C43.284853&utm_source=share&z=16&scroll=false" 
                width="100%" 
                height="100%" 
                frameBorder="1" 
                allowFullScreen 
                style={{position:'absolute', border: 'none'}}
                title="Карта апартаментов в Домбае"
              ></iframe>
            </div>
            <p className="text-xs md:text-sm text-[#1A1A1A]/60 mt-6 text-center">
              Апартаменты находятся в живописном поселке Домбай
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;