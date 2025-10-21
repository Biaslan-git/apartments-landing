import Image from "next/image";

const AmenitiesAndAccommodation = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Удобства и размещение
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto">
            Все, что нужно для комфортного отдыха в Домбае
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
              <Image 
                src="/temp.jpg" 
                alt="Интерьер апартаментов Домбай" 
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F8F5F0] p-4 rounded-xl">
                <h4 className="font-bold text-[#1A1A1A] mb-2">Спальни</h4>
                <p className="text-[#1A1A1A]/80 text-sm">Две спальни: 1 с двуспальной кроватью, 1 с двухъярусной кроватью</p>
              </div>
              <div className="bg-[#F8F5F0] p-4 rounded-xl">
                <h4 className="font-bold text-[#1A1A1A] mb-2">Гостиная</h4>
                <p className="text-[#1A1A1A]/80 text-sm">Раскладной диван для дополнительных гостей</p>
              </div>
              <div className="bg-[#F8F5F0] p-4 rounded-xl">
                <h4 className="font-bold text-[#1A1A1A] mb-2">Техника</h4>
                <p className="text-[#1A1A1A]/80 text-sm">Wi-Fi, ТВ, стиральная машина, утюг, фен</p>
              </div>
              <div className="bg-[#F8F5F0] p-4 rounded-xl">
                <h4 className="font-bold text-[#1A1A1A] mb-2">Кухня</h4>
                <p className="text-[#1A1A1A]/80 text-sm">Индукционная плита, МВ, холодильник, вся посуда</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-10">
              <div className="inline-block bg-[#3A7D44] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Уют
              </div>
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                Пространство для <span className="text-[#3A7D44]">комфорта</span>
              </h3>
              <p className="text-[#1A1A1A] mb-6 text-lg leading-relaxed">
                Квартира рассчитана на максимальное количество гостей — 6 человек, что делает её идеальным выбором для семейного отдыха или поездки с друзьями.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#3A7D44] rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">Инфракрасная сауна и купель</h4>
                  <p className="text-[#1A1A1A]/80">
                    На первом этаже комплекса находятся баня на дровах и чан для отдыха (оплачиваются отдельно)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#3A7D44] rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">Бесплатная парковка</h4>
                  <p className="text-[#1A1A1A]/80">
                    Гостям предоставляется бесплатная парковка на территории комплекса
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#3A7D44] rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">VIP-услуги</h4>
                  <p className="text-[#1A1A1A]/80">
                    При VIP-заселении предоставляются халаты и тапочки
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-[#F8F5F0] rounded-2xl p-6 border border-[#E0E0E0]">
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-4">Бесплатные услуги</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3A7D44] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1A1A1A]">Постельное бельё</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3A7D44] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1A1A1A]">Наборы полотенец</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3A7D44] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#1A1A1A]">Вся необходимая посуда и кухонные принадлежности</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesAndAccommodation;