import Image from "next/image";

export default function Home() {
  const phoneNumber = "89385281888";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <main>
      <section id="hero" className="w-full min-h-screen overflow-hidden">
        <div className="relative">
          {/* Фоновое изображение */}
          <div className="absolute inset-0 z-0 m-4">
            <Image
              src="/hero-bg.jpg"
              alt="Панорамный вид на горы Домбая"
              fill
              className="object-cover rounded-3xl"
              priority
            />
            {/* Градиент оверлей для лучшей читаемости текста */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-1 rounded-3xl"></div>
          </div>

          {/* Контент */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white p-4 mx-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 max-w-full leading-tight">
              Элитные апартаменты «Balala» в Домбае
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-full opacity-90 leading-relaxed">
              Наслаждайтесь комфортом и потрясающими видами на заснеженные вершины Кавказа
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <a href="#contact" className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 w-full">
                Забронировать
              </a>
              <a href="#description" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition duration-300 w-full">
                Узнать больше
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4" id="description">
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
                  src="/studia_photo1.jpg"
                  alt="Интерьер апартаментов в Домбае"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="py-16 px-4" id="kitchen">
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
      <section className="py-16 px-4" id="additional_amenities">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 max-w-full">
              Дополнительные удобства и развлечения
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/80 max-w-full mx-auto">
              Помимо уюта апартаментов, у вас есть доступ к дополнительным услугам и зонам отдыха
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/banya1.jpg"
                alt="Баня на дровах и купель в Домбае"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 max-w-full">Баня на дровах и купель</h3>
                <p className="text-sm md:text-base">Расслабьтесь в традиционной русской бане и освежитесь в купели</p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 max-w-full">
                Уникальные <span className="text-[#3A7D44]">услуги</span> на первом этаже
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#1A1A1A]/80 mb-8">
                На первом этаже жилого комплекса находятся баня на дровах и чан для отдыха.
                Эти услуги оплачиваются отдельно и обеспечивают дополнительный уровень релакса
                после активного дня в горах.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#3A7D44] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-base sm:text-lg">Баня на дровах</h4>
                    <p className="text-[#1A1A1A]/70 text-sm sm:text-base">Традиционная русская баня с ароматными вениками</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#3A7D44] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-base sm:text-lg">Купель</h4>
                    <p className="text-[#1A1A1A]/70 text-sm sm:text-base">Оздоровительная процедура в холодной воде</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0] text-center">
              <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">Бесплатная парковка</h3>
              <p className="text-sm text-[#1A1A1A]/70">Безопасное место для вашего автомобиля на территории комплекса</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0] text-center">
              <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">Зона костра</h3>
              <p className="text-sm text-[#1A1A1A]/70">Уютное место для встреч с друзьями и вечернего времяпрепровождения</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0] text-center">
              <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">Мангал</h3>
              <p className="text-sm text-[#1A1A1A]/70">Возможность приготовить шашлык или другие блюда на свежем воздухе</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E0E0E0]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/temp.jpg"
                  alt="Беседка и зона отдыха с настольными играми"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 max-w-full">Дополнительно</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-[#1A1A1A] text-sm sm:text-base">Беседка для комфортного отдыха на свежем воздухе</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-[#1A1A1A] text-sm sm:text-base">Настольные игры для семейного досуга</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-[#1A1A1A] text-sm sm:text-base">Уютная атмосфера для отдыха в любое время года</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4" id="location">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 max-w-full">
              Идеальное расположение в сердце Домбая
            </h2>
            <p className="text-base md:text-lg text-[#1A1A1A]/80 max-w-full mx-auto">
              Апартаменты находятся в нескольких минутах ходьбы от главных достопримечательностей
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6 max-w-full">
                Всего <span className="text-[#3A7D44]">7 минут</span> до канатной дороги
              </h3>
              <p className="text-sm md:text-[#1A1A1A]/80 mb-6">
                Наше жилье находится всего в 7-10 минутах пешком от канатной дороги,
                что делает его отличной базой для горнолыжников и сноубордистов.
              </p>
              <p className="text-sm md:text-[#1A1A1A]/80 mb-8">
                Вы сможете легко добраться до склонов и наслаждаться катанием на лыжах,
                не тратя время на транспорт и обеспечивая максимальное количество времени на отдых.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#3A7D44] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-[#1A1A1A]">Удобный доступ к горнолыжным склонам</h4>
                    <p className="text-xs md:text-[#1A1A1A]/70">Безопасный и короткий путь до подъемника</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#3A7D44] flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-[#1A1A1A]">Свобода передвижения</h4>
                    <p className="text-xs md:text-[#1A1A1A]/70">Возможность дойти пешком без транспорта</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/cable-way.jpg"
                alt="Вид на канатную дорогу в Домбае"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1">Канатная дорога</h3>
                <p className="text-sm md:text-base">Всего 7 минут пешком от апартаментов</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-8 max-w-full">Природные достопримечательности рядом</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F8F5F0] p-6 rounded-2xl">
                <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3">Ущелье Аман-Ауз</h4>
                <p className="text-xs md:text-[#1A1A1A]/70">Потрясающие виды и свежий горный воздух в нескольких минутах ходьбы</p>
              </div>

              <div className="bg-[#F8F5F0] p-6 rounded-2xl">
                <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h6" />
                  </svg>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3">Суфруджинские водопады</h4>
                <p className="text-xs md:text-[#1A1A1A]/70">Красивейшие водопады, идеальное место для пеших прогулок</p>
              </div>

              <div className="bg-[#F8F5F0] p-6 rounded-2xl">
                <div className="w-16 h-16 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3">Чертовая мельница</h4>
                <p className="text-xs md:text-[#1A1A1A]/70">Загадочное место с историей и потрясающей природой</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F5F0] rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/temp.jpg"
                  alt="Местные кафе и развлекательные заведения"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4 max-w-full">Кафе и развлечения</h3>
                <p className="text-sm md:text-[#1A1A1A]/80 mb-4">
                  В непосредственной близости от нашего жилья расположены множество кафе и развлекательных заведений.
                </p>
                <p className="text-sm md:text-[#1A1A1A]/80 mb-6">
                  Вы сможете насладиться местной кухней, попробовать традиционные блюда и провести время с друзьями или семьей в уютной атмосфере.
                </p>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-sm md:text-[#1A1A1A]">Местная кухня и традиционные блюда</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4" id="contact">
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

            {/* Карточка телефона */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#3A7D44] text-center transform transition duration-300 hover:scale-105">
              <div className="w-16 h-16 border-2 border-[#3A7D44] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5V3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Позвоните нам</h3>
              <div className="text-2xl font-bold text-[#3A7D44] mb-4">8 (938) 528-18-88</div>
              <p className="text-[#1A1A1A]/70 mb-6">Бала</p>
              <a
                href={`tel:${phoneNumber}`}
                className="border-2 border-[#3A7D44] text-[#3A7D44] hover:bg-[#3A7D44] hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5V3z" />
                </svg>
                Позвонить сейчас
              </a>
            </div>
            {/* Карточка Instagram */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#E0E0E0] text-center transform transition duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#E1306C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E1306C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 0v1.5a2.5 2.5 0 005 0V16m-5 0H9m6 0h3m-3 0l-3-3m3 3l3-3M3 19.5V5a2 2 0 012-2h14a2 2 0 012 2v14.5a2 2 0 01-2 2h-14a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Наш Instagram</h3>
              <div className="text-2xl font-bold text-[#E1306C] mb-4">@balala_apartments</div>
              <p className="text-[#1A1A1A]/70 mb-6">Фото и видео апартаментов</p>
              <a
                href="https://instagram.com/balala_apartments"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E1306C] hover:bg-[#C13584] text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 0v1.5a2.5 2.5 0 005 0V16m-5 0H9m6 0h3m-3 0l-3-3m3 3l3-3M3 19.5V5a2 2 0 012-2h14a2 2 0 012 2v14.5a2 2 0 01-2 2h-14a2 2 0 01-2-2z" />
                </svg>
                Перейти в Instagram
              </a>
            </div>
          </div>

          {/* Предупреждение о статусе Instagram */}
          <div className="text-center mb-8">
            <p className="text-xs text-[#1A1A1A]/60 max-w-2xl mx-auto">
              * Instagram(Meta) признан экстремистской организацией на территории Российской Федерации
            </p>
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
      </section>
      <section className="py-16 px-4" id="house_rules">
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
                <div className="w-10 h-10 bg-[#3A7D44] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
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
      </section>
    </main>
  );
}
