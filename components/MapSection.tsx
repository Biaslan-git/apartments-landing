const MapSection = () => {
  return (
    <div className="py-16 px-4 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Найдите нас на карте
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto">
            Апартаменты находятся в живописном поселке Домбай
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E0E0E0] relative h-[400px] md:h-[500px]">
          <iframe 
            src="https://yandex.ru/map-widget/v1/org/elitnyye_apartamenty_balala_/186668549633/?ll=41.618804%2C43.284853&utm_source=share&z=16&scroll=false" 
            width="100%" 
            height="100%" 
            frameBorder="1" 
            allowFullScreen 
            style={{position:'absolute', border: 'none'}}
            title="Карта апартаментов в Домбае"
          ></iframe>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">Домбай</h3>
            <p className="text-[#1A1A1A]/70">Карачаево-Черкесская Республика</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">7 минут</h3>
            <p className="text-[#1A1A1A]/70">до канатной дороги</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-[#3A7D44]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3A7D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">Достопримечательности</h3>
            <p className="text-[#1A1A1A]/70">Рядом с ущельем Аман-Ауз</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;