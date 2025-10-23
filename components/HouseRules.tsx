const HouseRules = () => {
  return (
    <div className="py-16 px-4 bg-[#F8F5F0]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 max-w-full">
            Правила проживания
          </h2>
          <p className="text-base md:text-lg text-[#1A1A1A]/80 max-w-full mx-auto">
            Важная информация для комфортного и безопасного отдыха
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#E0E0E0]">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2 max-w-full">Безопасность и имущество</h3>
                <p className="text-sm md:text-[#1A1A1A]/80">
                  Имущество в квартире проходит инвентаризацию, поэтому для исключения штрафов необходима бережная эксплуатация. 
                  Пожалуйста, бережно относитесь ко всему оборудованию и мебели в апартаментах.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2 max-w-full">Запрет курения</h3>
                <p className="text-sm md:text-[#1A1A1A]/80">
                  Курение в помещениях апартаментов запрещено. Для курящих гостей предусмотрена designated зона на улице. 
                  За нарушение этого правила предусмотрен дополнительный штраф.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2 max-w-full">Тишина</h3>
                <p className="text-sm md:text-[#1A1A1A]/80">
                  Не устраивайте шумные вечеринки или громкие мероприятия, особенно после 22:00. 
                  Уважайте соседей и обстановку курорта для общего комфортного отдыха.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2 max-w-full">Гости и посетители</h3>
                <p className="text-sm md:text-[#1A1A1A]/80">
                  Мы приветствуем гостей с детьми и семейные пары. За дополнительных гостей может взиматься плата. 
                  Пожалуйста, уточняйте условия при бронировании. Максимальная вместимость - 6 человек.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2 max-w-full">Время заезда и выезда</h3>
                <p className="text-sm md:text-[#1A1A1A]/80">
                  Время заезда: после 15:00, время выезда: до 12:00. Пожалуйста, уведомите нас заранее, 
                  если ожидается поздний заезд или ранний выезд.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-[#F8F5F0] rounded-xl border border-[#E0E0E0]">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#3A7D44] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-[#1A1A1A]/80">
                Пожалуйста, уточняйте условия при бронировании. 
                Не упустите возможность отдохнуть в одном из самых живописных уголков природы!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;