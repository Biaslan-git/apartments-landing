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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 max-w-full">
            Готовы к незабываемому отдыху?
          </h2>
          <p className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto">
            Свяжитесь с нами и забронируйте ваш идеальный отпуск в Домбае
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Карточка телефона */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#E0E0E0] text-center transform transition duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12a2 2 0 012 2v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zM3 13h12a2 2 0 012 2v1a2 2 0 01-2 2H3a2 2 0 01-2-2v-1a2 2 0 012-2zm0 8h12a2 2 0 012 2v1a2 2 0 01-2 2H3a2 2 0 01-2-2v-1a2 2 0 012-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Позвоните нам</h3>
            <div className="text-2xl font-bold text-[#3A7D44] mb-4">8 (938) 528-18-88</div>
            <p className="text-[#1A1A1A]/70 mb-6">Бала</p>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-[#3A7D44] hover:bg-[#2E6A3A] text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12a2 2 0 012 2v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zM3 13h12a2 2 0 012 2v1a2 2 0 01-2 2H3a2 2 0 01-2-2v-1a2 2 0 012-2zm0 8h12a2 2 0 012 2v1a2 2 0 01-2 2H3a2 2 0 01-2-2v-1a2 2 0 012-2z" />
              </svg>
              Позвонить сейчас
            </a>
          </div>

          {/* Карточка WhatsApp */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#E0E0E0] text-center transform transition duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Напишите в WhatsApp</h3>
            <div className="text-2xl font-bold text-[#25D366] mb-4">8 (938) 528-18-88</div>
            <p className="text-[#1A1A1A]/70 mb-6">Быстрые ответы</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Написать в WhatsApp
            </a>
          </div>

          {/* Карточка Telegram */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#E0E0E0] text-center transform transition duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#0088cc]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0088cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Наш Telegram</h3>
            <div className="text-2xl font-bold text-[#0088cc] mb-4">@balala_apartments</div>
            <p className="text-[#1A1A1A]/70 mb-6">Канал с новостями</p>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Перейти в Telegram
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#E0E0E0]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 max-w-full">
                Найдите нас на карте
              </h3>
              <p className="text-[#1A1A1A]/80 mb-6">
                Наши апартаменты расположены в живописном поселке Домбай, всего в нескольких минутах
                ходьбы от канатной дороги и рядом с природными достопримечательностями.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#3A7D44] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A]">Всего 7 минут до канатной дороги</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#3A7D44] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A]">Рядом с ущельем Аман-Ауз</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#3A7D44] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A]">Карачаево-Черкесская Республика</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-[#E0E0E0]">
              <iframe
                src="https://yandex.ru/map-widget/v1/org/elitnyye_apartamenty_balala_/186668549633/?ll=41.618804%2C43.284853&utm_source=share&z=16&scroll=false"
                width="100%"
                height="100%"
                frameBorder="1"
                allowFullScreen
                style={{ position: 'absolute', border: 'none' }}
                title="Карта апартаментов в Домбае"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
