import Image from "next/image";

const SleepingAreas = () => {
  return (
    <section className="py-16 px-4" id="sleeping_areas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 max-w-full">
            Удобные спальные места для всех гостей
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/80 max-w-full mx-auto">
            Расположение спален и мягкой мебели позволяет разместить до 6 гостей с максимальным комфортом
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0] text-center">
            <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16v14H4z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-4">Спальня 1</h3>
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
              <Image
                src="/spalnya1_1.jpg"
                alt="Первая спальня с двуспальной кроватью"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </div>
            <h4 className="font-bold text-base md:text-lg text-[#1A1A1A] mb-2">Двуспальная кровать</h4>
            <p className="text-sm text-[#1A1A1A]/70">Для комфортного отдыха двух гостей</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0] text-center">
            <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16v14H4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9h16" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 13h16" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-4">Спальня 2</h3>
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
              <Image
                src="/spalnya2_1.jpg"
                alt="Вторая спальня с двухъярусной кроватью"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </div>
            <h4 className="font-bold text-base md:text-lg text-[#1A1A1A] mb-2">Двухъярусная кровать</h4>
            <p className="text-sm text-[#1A1A1A]/70">Для размещения еще двух гостей</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0] text-center">
            <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 18H4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6H4" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-4">Гостиная</h3>
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
              <Image
                src="/divan.jpg"
                alt="Раскладной диван в гостиной"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </div>
            <h4 className="font-bold text-base md:text-lg text-[#1A1A1A] mb-2">Раскладной диван</h4>
            <p className="text-sm text-[#1A1A1A]/70">Для дополнительных двух гостей</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E0E0E0]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4 max-w-full">VIP-услуги и комфорт</h3>
              <p className="text-sm md:text-[#1A1A1A]/80 mb-4">
                Для максимального комфорта наших гостей мы предоставляем:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm md:text-[#1A1A1A]">Бесплатное постельное бельё и наборы полотенец</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm md:text-[#1A1A1A]">Халаты и тапочки при VIP-заселении</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm md:text-[#1A1A1A]">Свежее, чистое постельное бельё ко всем приездам</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/temp.jpg"
                alt="Постельное бельё и удобства в апартаментах"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepingAreas;
