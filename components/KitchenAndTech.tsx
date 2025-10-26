import Image from "next/image";

const KitchenAndTech = () => {
  return (
    <section className="py-16 px-4 bg-[#F8F5F0]" id="kitchen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 max-w-full">
            Современная кухня и вся необходимая техника
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/80 max-w-full mx-auto">
            Полностью оборудованная кухня и современные удобства для комфортного проживания
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6 max-w-full">Оборудованная кухня</h3>
            <p className="text-sm md:text-[#1A1A1A]/80 mb-6">
              Кухня полностью оборудована для комфортного приготовления пищи.
              В наличии вся необходимая техника и посуда для приготовления ваших любимых блюд.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm md:text-[#1A1A1A]">Индукционная плита</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm md:text-[#1A1A1A]">Микроволновая печь</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm md:text-[#1A1A1A]">Тостер</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm md:text-[#1A1A1A]">Чайник</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm md:text-[#1A1A1A]">Холодильник</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm md:text-[#1A1A1A]">Посуда и приборы</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/kitchen.jpg"
              alt="Оборудованная кухня апартаментов в Домбае"
              fill
              style={{ objectFit: 'cover' }}
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E0E0E0]">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 text-center max-w-full">Все необходимые удобства</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Wi-Fi</h4>
              <p className="text-xs md:text-[#1A1A1A]/70">Высокоскоростной интернет для связи и развлечений</p>
            </div>

            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Телевизор</h4>
              <p className="text-xs md:text-[#1A1A1A]/70">Для просмотра фильмов и новостей</p>
            </div>

            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4.335V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Стиральная машина</h4>
              <p className="text-xs md:text-[#1A1A1A]/70">Для стирки белья во время проживания</p>
            </div>

            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2zm10-11l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Утюг и гладильная доска</h4>
              <p className="text-xs md:text-[#1A1A1A]/70">Для поддержания опрятного вида</p>
            </div>

            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 01-4 4z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Фен</h4>
              <p className="text-xs md:text-[#1A1A1A]/70">Для ухода за волосами</p>
            </div>

            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4.335V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Бытовая химия</h4>
              <p className="text-xs md:text-[#1A1A1A]/70">Для поддержания чистоты и уюта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenAndTech;
