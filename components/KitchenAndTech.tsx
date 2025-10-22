import Image from "next/image";

const KitchenAndTech = () => {
  return (
    <div className="py-16 px-4 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Современная кухня и вся необходимая техника
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto">
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
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Оборудованная кухня</h3>
            <p className="text-[#1A1A1A]/80 mb-6">
              Кухня полностью оборудована для комфортного приготовления пищи. 
              В наличии вся необходимая техника и посуда для приготовления ваших любимых блюд.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[#1A1A1A]">Индукционная плита</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[#1A1A1A]">Микроволновая печь</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[#1A1A1A]">Тостер</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[#1A1A1A]">Чайник</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[#1A1A1A]">Холодильник</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[#1A1A1A]">Посуда и приборы</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/temp.jpg" 
              alt="Оборудованная кухня апартаментов в Домбае" 
              fill
              style={{ objectFit: 'cover' }}
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E0E0E0]">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">Все необходимые удобства</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Wi-Fi</h4>
              <p className="text-[#1A1A1A]/70">Высокоскоростной интернет для связи и развлечений</p>
            </div>
            
            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Телевизор</h4>
              <p className="text-[#1A1A1A]/70">Для просмотра фильмов и новостей</p>
            </div>
            
            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Стиральная машина</h4>
              <p className="text-[#1A1A1A]/70">Для стирки белья во время проживания</p>
            </div>
            
            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Утюг и гладильная доска</h4>
              <p className="text-[#1A1A1A]/70">Для поддержания опрятного вида</p>
            </div>
            
            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Фен</h4>
              <p className="text-[#1A1A1A]/70">Для ухода за волосами</p>
            </div>
            
            <div className="text-center p-6 bg-[#F8F5F0] rounded-xl">
              <div className="w-14 h-14 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">Бытовая химия</h4>
              <p className="text-[#1A1A1A]/70">Для поддержания чистоты и уюта</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenAndTech;