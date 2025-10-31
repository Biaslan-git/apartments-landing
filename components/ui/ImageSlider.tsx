'use client'

import { useState, useEffect } from 'react';

// Компонент слайдера
const ImageSlider = ({ images }: { images: Array<{ src: string; alt: string }> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Управление overflow при открытии/закрытии lightbox
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  // Обработка свайпа
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Обработка клавиатуры
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <>
      {/* Слайдер */}
      <div className="relative">
        <div
          className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden group"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Изображение */}
          <div className="relative w-full h-full">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />

            {/* Градиент overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#ACB78D]/20 to-transparent"></div>

            {/* Кнопка увеличения */}
            <button
              onClick={openLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Открыть в полный экран"
            >
              <svg className="w-5 h-5 text-[#ACB78D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </button>

            {/* Счетчик */}
            <div className="absolute top-4 left-4 bg-[#ACB78D]/90 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Кнопка "Назад" */}
          {images.length > 1 && (
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg z-10"
              aria-label="Предыдущее изображение"
            >
              <svg className="w-6 h-6 text-[#ACB78D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Кнопка "Вперед" */}
          {images.length > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg z-10"
              aria-label="Следующее изображение"
            >
              <svg className="w-6 h-6 text-[#ACB78D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Индикаторы (точки) */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#ACB78D] w-8' : 'bg-[#ACB78D]/30 w-2 hover:bg-[#ACB78D]/50'
                }`}
              aria-label={`Перейти к изображению ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox (полноэкранный режим) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-50"
            aria-label="Закрыть"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Счетчик */}
          <div className="absolute top-4 left-4 bg-[#ACB78D] text-white px-4 py-2 rounded-full font-semibold z-50">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Кнопка "Назад" */}
          {images.length > 1 && (
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-[#ACB78D] rounded-full flex items-center justify-center transition-all duration-300 z-50"
              aria-label="Предыдущее изображение"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Изображение */}
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          {/* Кнопка "Вперед" */}
          {images.length > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-[#ACB78D] rounded-full flex items-center justify-center transition-all duration-300 z-50"
              aria-label="Следующее изображение"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Миниатюры внизу */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-3 rounded-2xl max-w-[90vw] overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentIndex === index ? 'border-[#ACB78D] scale-110' : 'border-white/30'
                    }`}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImageSlider;
