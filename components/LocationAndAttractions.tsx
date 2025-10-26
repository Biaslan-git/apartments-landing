import Image from "next/image";

const LocationAndAttractions = () => {
  return (
    <section className="py-16 px-4 bg-white" id="location">
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
  );
};

export default LocationAndAttractions;
