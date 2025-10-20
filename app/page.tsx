import Image from "next/image";

export default function Home() {
  return (
    <main className="">
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
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white p-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 max-w-4xl leading-tight">
              Апартаменты мечты в Домбае
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl md:max-w-3xl opacity-90 leading-relaxed">
              Наслаждайтесь комфортом и потрясающими видами на заснеженные вершины Кавказа
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 w-full">
                Забронировать
              </button>
              <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition duration-300 w-full">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
