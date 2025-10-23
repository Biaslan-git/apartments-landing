"use client";

import Image from "next/image";

const ApartmentDescription = () => {
  return (
    <div className="py-16 px-4 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 max-w-full">
            Современная квартира в Домбае
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/80 max-w-full mx-auto">
            Стильные апартаменты с дизайнерским ремонтом и великолепным видом на горы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">Дизайнерский ремонт</h3>
            <p className="text-sm text-[#1A1A1A]/70">Квартира выполнена в современном стиле с использованием качественных материалов</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">Размещение до 6 гостей</h3>
            <p className="text-sm text-[#1A1A1A]/70">Просторные комнаты для комфортного отдыха всей семьи или с друзьями</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">Удобное расположение</h3>
            <p className="text-sm text-[#1A1A1A]/70">Всего 7 минут до канатной дороги и рядом с природными достопримечательностями</p>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-white to-[#F8F5F0] rounded-3xl overflow-hidden shadow-xl border border-[#E0E0E0]">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-[#3A7D44] text-sm font-semibold uppercase tracking-wider">Домбай Апартаменты</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mt-2 mb-4 max-w-full">Созданы для отдыха в горах</h3>
                <p className="text-sm md:text-[#1A1A1A]/80 mb-6">
                  Квартира расположена в современном жилом комплексе и предлагает уютную атмосферу. 
                  Дизайнерский ремонт выполнен из качественных материалов, создавая невероятную и 
                  вдохновляющую атмосферу для полноценного отдыха.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-sm md:text-[#1A1A1A]">Великолепный вид на горы</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-sm md:text-[#1A1A1A]">Свежий горный воздух</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-sm md:text-[#1A1A1A]">Близость к достопримечательностям</span>
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