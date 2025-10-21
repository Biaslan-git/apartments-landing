import Image from "next/image";

const ApartmentDescription = () => {
  return (
    <div className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#3A7D44]/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3A7D44]/10 rounded-full -z-10"></div>
          
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute -inset-2 bg-[#3A7D44] rounded-lg blur opacity-75 -z-10"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] relative relative px-6 py-2 inline-block">
                  Домашний уют в горах
                </h2>
              </div>
            </div>
            <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto px-4">
              Ощутите комфорт и спокойствие в современной дизайнерской квартире с видом на заснеженные вершины Кавказа
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-[#E0E0E0]">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">Уютное жилье</h4>
              <p className="text-[#1A1A1A]/70">Дизайнерский ремонт с использованием качественных материалов</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-[#E0E0E0]">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">Вместимость</h4>
              <p className="text-[#1A1A1A]/70">До 6 гостей в 3 комфортабельных комнатах</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-[#E0E0E0]">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">Расположение</h4>
              <p className="text-[#1A1A1A]/70">Всего 7 минут до канатной дороги</p>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-white to-[#F8F5F0] rounded-3xl overflow-hidden shadow-xl border border-[#E0E0E0]">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-[#3A7D44] text-sm font-semibold uppercase tracking-wider">Домбай Апартаменты</span>
                <h3 className="text-3xl font-bold text-[#1A1A1A] mt-2 mb-4">Созданы для отдыха в горах</h3>
                <p className="text-[#1A1A1A]/80 text-lg mb-6">
                  Квартира расположена в современном жилом комплексе и предлагает уютную атмосферу. 
                  Дизайнерский ремонт выполнен из качественных материалов, создавая невероятную и 
                  вдохновляющую атмосферу для полноценного отдыха.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-[#1A1A1A]">Великолепный вид на горы</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-[#1A1A1A]">Свежий горный воздух</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-[#1A1A1A]">Близость к достопримечательностям</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <Image 
                src="/temp.jpg" 
                alt="Интерьер апартаментов в Домбае" 
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDescription;