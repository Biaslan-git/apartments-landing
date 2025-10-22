import Image from "next/image";

const AdditionalAmenities = () => {
  return (
    <div className="py-16 px-4 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Дополнительные удобства и развлечения
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto">
            Помимо уюта апартаментов, у вас есть доступ к дополнительным услугам и зонам отдыха
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/temp.jpg" 
              alt="Баня на дровах и купель в Домбае" 
              fill
              style={{ objectFit: 'cover' }}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Баня на дровах и купель</h3>
              <p>Расслабьтесь в традиционной русской бане и освежитесь в купели</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6">
              Уникальные <span className="text-[#3A7D44]">услуги</span> на первом этаже
            </h3>
            <p className="text-[#1A1A1A]/80 text-lg mb-8">
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
                  <h4 className="font-bold text-[#1A1A1A]">Баня на дровах</h4>
                  <p className="text-[#1A1A1A]/70">Традиционная русская баня с ароматными вениками</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#3A7D44] flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">Купель</h4>
                  <p className="text-[#1A1A1A]/70">Оздоровительная процедура в холодной воде</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0] text-center">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Бесплатная парковка</h3>
            <p className="text-[#1A1A1A]/70">Безопасное место для вашего автомобиля на территории комплекса</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0] text-center">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Зона костра</h3>
            <p className="text-[#1A1A1A]/70">Уютное место для встреч с друзьями и вечернего времяпрепровождения</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E0E0E0] text-center">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Мангал</h3>
            <p className="text-[#1A1A1A]/70">Возможность приготовить шашлык или другие блюда на свежем воздухе</p>
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
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Дополнительно</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A]">Беседка для комфортного отдыха на свежем воздухе</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A]">Настольные игры для семейного досуга</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#3A7D44] flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A]">Уютная атмосфера для отдыха в любое время года</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalAmenities;