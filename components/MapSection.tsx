const MapSection = () => {
  return (
    <section className="py-16 px-4" id="map">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 max-w-full">
            Найдите нас на карте
          </h2>
          <p className="text-base md:text-lg text-[#1A1A1A]/80 max-w-full mx-auto">
            Апартаменты находятся в живописном поселке Домбай
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#B8C1A9] relative h-[400px] md:h-[500px]">
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

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-[#B8C1A9]">
            <div className="w-12 h-12 bg-[#ACB78D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ACB78D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg text-[#1A1A1A] mb-2 max-w-full">Домбай</h3>
            <p className="text-xs md:text-[#1A1A1A]/70">Карачаево-Черкесская Республика</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-[#B8C1A9]">
            <div className="w-12 h-12 bg-[#ACB78D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ACB78D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg text-[#1A1A1A] mb-2 max-w-full">7 минут</h3>
            <p className="text-xs md:text-[#1A1A1A]/70">до канатной дороги</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-[#B8C1A9]">
            <div className="w-12 h-12 bg-[#ACB78D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ACB78D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-base md:text-lg text-[#1A1A1A] mb-2 max-w-full">Достопримечательности</h3>
            <p className="text-xs md:text-[#1A1A1A]/70">Рядом с ущельем Аман-Ауз</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
