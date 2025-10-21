import Image from "next/image";

const ApartmentDescription = () => {
  return (
    <section className="py-16 px-4 bg-[--card]"> {/* Используем кремовый цвет из палитры */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[--foreground]">Уютная дизайнерская квартира в Домбае</h2>
          <p className="text-lg text-[--foreground]/80 max-w-3xl mx-auto">
            Новая 3-комнатная квартира в живописном поселке Домбай с великолепным видом на горы
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="md:w-1/2">
            <div className="relative h-96">
              <Image 
                src="/temp.jpg" 
                alt="Дизайнерский интерьер апартаментов в Домбае" 
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 p-8">
            <div className="inline-block bg-[--accent] text-white px-4 py-1 rounded-full mb-4">
              Комфорт и уют
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-[--heading-bg]">Современный ремонт и комфорт</h3>
            <p className="text-[--foreground] mb-4">
              Апартаменты расположены в современном жилом комплексе и предлагают уютную атмосферу. 
              Дизайнерский ремонт выполнен из качественных материалов, создавая невероятную и 
              вдохновляющую атмосферу для полноценного отдыха.
            </p>
            <p className="text-[--foreground] mb-6">
              Квартира рассчитана на максимальное количество гостей — 6 человек, что делает её 
              идеальным выбором для семейного отдыха или поездки с друзьями.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-[--accent] rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[--foreground]">Дизайнерский ремонт из качественных материалов</span>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[--accent] rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[--foreground]">Великолепный вид на горы</span>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[--accent] rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[--foreground]">Максимальная вместимость до 6 гостей</span>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[--accent] rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[--foreground]">Уютная атмосфера для полноценного отдыха</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDescription;