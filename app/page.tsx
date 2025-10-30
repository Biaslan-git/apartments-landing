import React from 'react';

export default function Home() {
  const phoneNumber = "89385281888";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <main className="bg-[#F5F7F0]">
      {/* Hero Section */}
      <section id="hero" className="w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#ACB78D]/20 to-[#F5F7F0]">
        <div className="relative">
          <div className="absolute inset-0 z-0 m-4">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <img
                src="/hero-bg.jpg"
                alt="Панорамный вид на горы Домбая"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#ACB78D]/40 rounded-3xl"></div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white p-4 mx-4">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 md:p-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Элитные апартаменты «Balala» в Домбае
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
                Наслаждайтесь комфортом и потрясающими видами на заснеженные вершины Кавказа
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a href="#contact" className="bg-[#ACB78D] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#9BA67A] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Забронировать
                </a>
                <a href="#description" className="border-2 border-white backdrop-blur-md bg-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-4" id="description">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#ACB78D]/20 text-[#6B7556] px-6 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Премиум размещение
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3319] mb-6">
              Современная квартира в Домбае
            </h2>
            <p className="text-lg sm:text-xl text-[#5A6144] max-w-3xl mx-auto">
              Стильные апартаменты с дизайнерским ремонтом и великолепным видом на горы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                title: "Дизайнерский ремонт",
                desc: "Квартира выполнена в современном стиле с использованием качественных материалов"
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Размещение до 6 гостей",
                desc: "Просторные комнаты для комфортного отдыха всей семьи или с друзьями"
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Удобное расположение",
                desc: "Всего 7 минут до канатной дороги и рядом с природными достопримечательностями"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#ACB78D]/20 hover:border-[#ACB78D] transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ACB78D] to-[#9BA67A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2D3319] mb-3">{item.title}</h3>
                <p className="text-[#5A6144]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-white via-[#F5F7F0] to-[#ACB78D]/10 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#ACB78D]/30">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <span className="text-[#ACB78D] text-sm font-bold uppercase tracking-wider mb-3">Домбай Апартаменты</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#2D3319] mb-6">Созданы для отдыха в горах</h3>
                <p className="text-[#5A6144] mb-8 leading-relaxed">
                  Квартира расположена в современном жилом комплексе и предлагает уютную атмосферу.
                  Дизайнерский ремонт выполнен из качественных материалов, создавая невероятную и
                  вдохновляющую атмосферу для полноценного отдыха.
                </p>
                <div className="space-y-4">
                  {["Великолепный вид на горы", "Свежий горный воздух", "Близость к достопримечательностям"].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="w-7 h-7 rounded-full bg-[#ACB78D] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-[#2D3319] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 lg:h-full min-h-[400px]">
                <img src="/studia_photo1.jpg" alt="Интерьер апартаментов" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ACB78D]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sleeping Areas Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F5F7F0] to-white" id="sleeping_areas">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#ACB78D]/20 text-[#6B7556] px-6 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Комфортное размещение
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3319] mb-6">
              Удобные спальные места для всех гостей
            </h2>
            <p className="text-lg sm:text-xl text-[#5A6144] max-w-3xl mx-auto">
              Расположение спален и мягкой мебели позволяет разместить до 6 гостей с максимальным комфортом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Спальня 1", bed: "Двуспальная кровать", desc: "Для комфортного отдыха двух гостей", img: "/spalnya1_1.jpg" },
              { title: "Спальня 2", bed: "Двухъярусная кровать", desc: "Для размещения еще двух гостей", img: "/spalnya2_1.jpg" },
              { title: "Гостиная", bed: "Раскладной диван", desc: "Для дополнительных двух гостей", img: "/divan.jpg" }
            ].map((room, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#ACB78D]/20 hover:border-[#ACB78D] transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <img src={room.img} alt={room.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#ACB78D] text-white px-4 py-2 rounded-xl font-bold">
                    {room.title}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-xl text-[#2D3319] mb-2">{room.bed}</h4>
                  <p className="text-[#5A6144]">{room.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-white to-[#ACB78D]/10 rounded-3xl p-10 shadow-xl border-2 border-[#ACB78D]/30">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2D3319] mb-6">VIP-услуги и комфорт</h3>
                <p className="text-[#5A6144] mb-6">
                  Для максимального комфорта наших гостей мы предоставляем:
                </p>
                <ul className="space-y-4">
                  {[
                    "Бесплатное постельное бельё и наборы полотенец",
                    "Халаты и тапочки при VIP-заселении",
                    "Свежее, чистое постельное бельё ко всем приездам"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#ACB78D] flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-[#2D3319]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src="/temp.jpg" alt="VIP услуги" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Section */}
      <section className="py-20 px-4 bg-white" id="kitchen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#ACB78D]/20 text-[#6B7556] px-6 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Удобства
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3319] mb-6">
              Современная кухня и вся необходимая техника
            </h2>
            <p className="text-lg sm:text-xl text-[#5A6144] max-w-3xl mx-auto">
              Полностью оборудованная кухня и современные удобства для комфортного проживания
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-[#F5F7F0] to-white p-10 rounded-3xl shadow-xl border-2 border-[#ACB78D]/20">
              <div className="w-16 h-16 bg-[#ACB78D] rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2D3319] mb-6">Оборудованная кухня</h3>
              <p className="text-[#5A6144] mb-8">
                Кухня полностью оборудована для комфортного приготовления пищи.
                В наличии вся необходимая техника и посуда для приготовления ваших любимых блюд.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Индукционная плита", "Микроволновая печь", "Тостер", "Чайник", "Холодильник", "Посуда и приборы"].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#ACB78D] flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[#2D3319] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/kitchen.jpg" alt="Кухня" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ACB78D]/30 to-transparent"></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F5F7F0] to-white rounded-3xl p-10 shadow-xl border-2 border-[#ACB78D]/20">
            <h3 className="text-3xl font-bold text-[#2D3319] mb-10 text-center">Все необходимые удобства</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0", title: "Wi-Fi", desc: "Высокоскоростной интернет" },
                { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Телевизор", desc: "Для развлечений" },
                { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4.335V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Стиральная машина", desc: "Для удобства гостей" },
                { icon: "M12 15v2m-6 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2zm10-11l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: "Утюг и гладильная доска", desc: "Для опрятного вида" },
                { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 01-4 4z", title: "Фен", desc: "Для ухода" },
                { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4.335V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Бытовая химия", desc: "Для чистоты" }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#ACB78D]/20 hover:border-[#ACB78D] transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ACB78D] to-[#9BA67A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-[#2D3319] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#5A6144]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Amenities Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F5F7F0]" id="additional_amenities">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#ACB78D]/20 text-[#6B7556] px-6 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Дополнительно
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3319] mb-6">
              Дополнительные удобства и развлечения
            </h2>
            <p className="text-lg sm:text-xl text-[#5A6144] max-w-3xl mx-auto">
              Помимо уюта апартаментов, у вас есть доступ к дополнительным услугам и зонам отдыха
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/banya1.jpg" alt="Баня" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ACB78D]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-3">Баня на дровах и купель</h3>
                <p className="text-lg">Расслабьтесь в традиционной русской бане и освежитесь в купели</p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#2D3319] mb-6">
                Уникальные <span className="text-[#ACB78D]">услуги</span> на первом этаже
              </h3>
              <p className="text-lg text-[#5A6144] mb-8">
                На первом этаже жилого комплекса находятся баня на дровах и чан для отдыха.
                Эти услуги оплачиваются отдельно и обеспечивают дополнительный уровень релакса
                после активного дня в горах.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Баня на дровах", desc: "Традиционная русская баня с ароматными вениками" },
                  { title: "Купель", desc: "Оздоровительная процедура в холодной воде" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start bg-white p-5 rounded-2xl shadow-md border border-[#ACB78D]/20">
                    <div className="w-10 h-10 rounded-full bg-[#ACB78D] flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2D3319] text-lg mb-1">{item.title}</h4>
                      <p className="text-[#5A6144]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Бесплатная парковка", desc: "Безопасное место для вашего автомобиля" },
              { title: "Зона костра", desc: "Уютное место для встреч с друзьями" },
              { title: "Мангал", desc: "Возможность приготовить шашлык на свежем воздухе" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg text-center border-2 border-[#ACB78D]/20 hover:border-[#ACB78D] transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ACB78D] to-[#9BA67A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2D3319] mb-3">{item.title}</h3>
                <p className="text-[#5A6144]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white to-[#ACB78D]/10 rounded-3xl p-10 shadow-xl border-2 border-[#ACB78D]/30">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                <img src="/temp.jpg" alt="Дополнительные услуги" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-[#2D3319] mb-6">Дополнительно</h3>
                <ul className="space-y-4">
                  {[
                    "Беседка для комфортного отдыха на свежем воздухе",
                    "Настольные игры для семейного досуга",
                    "Уютная атмосфера для отдыха в любое время года"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#ACB78D] flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-[#2D3319] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-white" id="location">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#ACB78D]/20 text-[#6B7556] px-6 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Расположение
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3319] mb-6">
              Идеальное расположение в сердце Домбая
            </h2>
            <p className="text-lg sm:text-xl text-[#5A6144] max-w-3xl mx-auto">
              Апартаменты находятся в нескольких минутах ходьбы от главных достопримечательностей
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#2D3319] mb-6">
                Всего <span className="text-[#ACB78D]">7 минут</span> до канатной дороги
              </h3>
              <p className="text-[#5A6144] mb-6 leading-relaxed">
                Наше жилье находится всего в 7-10 минутах пешком от канатной дороги,
                что делает его отличной базой для горнолыжников и сноубордистов.
              </p>
              <p className="text-[#5A6144] mb-8 leading-relaxed">
                Вы сможете легко добраться до склонов и наслаждаться катанием на лыжах,
                не тратя время на транспорт и обеспечивая максимальное количество времени на отдых.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Удобный доступ к горнолыжным склонам", desc: "Безопасный и короткий путь до подъемника" },
                  { title: "Свобода передвижения", desc: "Возможность дойти пешком без транспорта" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start bg-[#F5F7F0] p-5 rounded-2xl border border-[#ACB78D]/20">
                    <div className="w-10 h-10 rounded-full bg-[#ACB78D] flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2D3319] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#5A6144]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/cable-way.jpg" alt="Канатная дорога" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ACB78D]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Канатная дорога</h3>
                <p className="text-lg">Всего 7 минут пешком от апартаментов</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-[#2D3319] mb-12 text-center">Природные достопримечательности рядом</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Ущелье Аман-Ауз", desc: "Потрясающие виды и свежий горный воздух в нескольких минутах ходьбы" },
                { title: "Суфруджинские водопады", desc: "Красивейшие водопады, идеальное место для пеших прогулок" },
                { title: "Чертовая мельница", desc: "Загадочное место с историей и потрясающей природой" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#F5F7F0] to-white p-8 rounded-3xl shadow-lg border-2 border-[#ACB78D]/20 hover:border-[#ACB78D] transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#ACB78D] to-[#9BA67A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[#2D3319] mb-3 text-center">{item.title}</h4>
                  <p className="text-[#5A6144] text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#F5F7F0] to-[#ACB78D]/10 rounded-3xl p-10 shadow-xl border-2 border-[#ACB78D]/30">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src="/temp.jpg" alt="Кафе и развлечения" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#2D3319] mb-6">Кафе и развлечения</h3>
                <p className="text-[#5A6144] mb-4 leading-relaxed">
                  В непосредственной близости от нашего жилья расположены множество кафе и развлекательных заведений.
                </p>
                <p className="text-[#5A6144] mb-6 leading-relaxed">
                  Вы сможете насладиться местной кухней, попробовать традиционные блюда и провести время с друзьями или семьей в уютной атмосфере.
                </p>
                <div className="flex items-center bg-white p-4 rounded-xl border border-[#ACB78D]/20">
                  <div className="w-8 h-8 rounded-full bg-[#ACB78D] flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-[#2D3319] font-medium">Местная кухня и традиционные блюда</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#ACB78D]/20" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#ACB78D]/20 text-[#6B7556] px-6 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Связаться с нами
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3319] mb-6">
              Готовы к незабываемому отдыху?
            </h2>
            <p className="text-lg sm:text-xl text-[#5A6144] max-w-3xl mx-auto">
              Свяжитесь с нами и забронируйте ваш идеальный отпуск в Домбае
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-[#25D366]/20 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
              <div className="w-20 h-20 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2D3319] mb-3">Напишите в WhatsApp</h3>
              <div className="text-3xl font-bold text-[#25D366] mb-4">8 (938) 528-18-88</div>
              <p className="text-[#5A6144] mb-6">Быстрые ответы</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Написать в WhatsApp
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#ACB78D]/10 via-white to-[#ACB78D]/20 rounded-3xl shadow-2xl p-10 border-3 border-[#ACB78D] text-center transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
              <div className="w-20 h-20 border-4 border-[#ACB78D] rounded-2xl flex items-center justify-center mx-auto mb-6 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#ACB78D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5V3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2D3319] mb-3">Позвоните нам</h3>
              <div className="text-3xl font-bold text-[#ACB78D] mb-4">8 (938) 528-18-88</div>
              <p className="text-[#5A6144] mb-6">Бала</p>
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 border-3 border-[#ACB78D] bg-white text-[#ACB78D] hover:bg-[#ACB78D] hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5V3z" />
                </svg>
                Позвонить сейчас
              </a>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-[#E1306C]/20 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
              <div className="w-20 h-20 bg-gradient-to-br from-[#E1306C] to-[#C13584] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 0v1.5a2.5 2.5 0 005 0V16m-5 0H9m6 0h3m-3 0l-3-3m3 3l3-3M3 19.5V5a2 2 0 012-2h14a2 2 0 012 2v14.5a2 2 0 01-2 2h-14a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2D3319] mb-3">Наш Instagram</h3>
              <div className="text-3xl font-bold text-[#E1306C] mb-4">@balala_apartments</div>
              <p className="text-[#5A6144] mb-6">Фото и видео апартаментов</p>
              <a
                href="https://instagram.com/balala_apartments"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E1306C] to-[#C13584] hover:from-[#C13584] hover:to-[#E1306C] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 0v1.5a2.5 2.5 0 005 0V16m-5 0H9m6 0h3m-3 0l-3-3m3 3l3-3M3 19.5V5a2 2 0 012-2h14a2 2 0 012 2v14.5a2 2 0 01-2 2h-14a2 2 0 01-2-2z" />
                </svg>
                Перейти в Instagram
              </a>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xs text-[#5A6144] max-w-2xl mx-auto">
              * Instagram(Meta) признан экстремистской организацией на территории Российской Федерации
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-[#ACB78D]/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#2D3319] mb-6">
                  Найдите нас на карте
                </h3>
                <p className="text-[#5A6144] mb-8 leading-relaxed">
                  Наши апартаменты расположены в живописном поселке Домбай, всего в нескольких минутах
                  ходьбы от канатной дороги и рядом с природными достопримечательностями.
                </p>
                <div className="space-y-4">
                  {[
                    "Всего 7 минут до канатной дороги",
                    "Рядом с ущельем Аман-Ауз",
                    "Карачаево-Черкесская Республика"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center bg-[#F5F7F0] p-4 rounded-xl border border-[#ACB78D]/20">
                      <div className="w-10 h-10 rounded-full bg-[#ACB78D] flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-[#2D3319] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ACB78D]/30">
                <div className="w-full h-full bg-gradient-to-br from-[#ACB78D]/20 to-[#9BA67A]/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-[#ACB78D] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-[#2D3319] font-bold text-lg">Карта Яндекс</p>
                    <p className="text-[#5A6144] text-sm mt-2">Домбай, Карачаево-Черкесия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#ACB78D]/10 to-white" id="house_rules">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#ACB78D]/20 text-[#6B7556] px-6 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Важная информация
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3319] mb-6">
              Правила проживания
            </h2>
            <p className="text-lg sm:text-xl text-[#5A6144] max-w-2xl mx-auto">
              Важная информация для комфортного и безопасного отдыха
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-[#ACB78D]/30">
            <div className="space-y-8">
              {[
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Безопасность и имущество",
                  desc: "Имущество в квартире проходит инвентаризацию, поэтому для исключения штрафов необходима бережная эксплуатация. Пожалуйста, бережно относитесь ко всему оборудованию и мебели в апартаментах."
                },
                {
                  icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Запрет курения",
                  desc: "Курение в помещениях апартаментов запрещено. Для курящих гостей предусмотрена designated зона на улице. За нарушение этого правила предусмотрен дополнительный штраф."
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Тишина",
                  desc: "Не устраивайте шумные вечеринки или громкие мероприятия, особенно после 22:00. Уважайте соседей и обстановку курорта для общего комфортного отдыха."
                },
                {
                  icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
                  title: "Гости и посетители",
                  desc: "Мы приветствуем гостей с детьми и семейные пары. За дополнительных гостей может взиматься плата. Пожалуйста, уточняйте условия при бронировании. Максимальная вместимость - 6 человек."
                },
                {
                  icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                  title: "Время заезда и выезда",
                  desc: "Время заезда: после 15:00, время выезда: до 12:00. Пожалуйста, уведомите нас заранее, если ожидается поздний заезд или ранний выезд."
                }
              ].map((rule, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ACB78D] to-[#9BA67A] rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={rule.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D3319] mb-3">{rule.title}</h3>
                    <p className="text-[#5A6144] leading-relaxed">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-[#ACB78D]/10 to-[#ACB78D]/5 rounded-2xl border-2 border-[#ACB78D]/30">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#ACB78D] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#2D3319] leading-relaxed font-medium">
                    Пожалуйста, уточняйте условия при бронировании.
                    Не упустите возможность отдохнуть в одном из самых живописных уголков природы!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#ACB78D] to-[#9BA67A] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Элитные апартаменты «Balala»</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Ваш идеальный отдых в горах Домбая начинается здесь
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#description" className="hover:text-white/80 transition-colors">О нас</a>
            <a href="#sleeping_areas" className="hover:text-white/80 transition-colors">Размещение</a>
            <a href="#kitchen" className="hover:text-white/80 transition-colors">Удобства</a>
            <a href="#location" className="hover:text-white/80 transition-colors">Расположение</a>
            <a href="#contact" className="hover:text-white/80 transition-colors">Контакты</a>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-white/70">
              © 2024 Balala Apartments. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
