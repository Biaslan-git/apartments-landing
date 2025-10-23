import React from 'react';

const MobileTest = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Тест мобильной адаптации</h1>
      <p className="mb-4">Эта страница для тестирования мобильной адаптации компонентов.</p>
      
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Тест кнопок</h2>
        <div className="flex flex-col gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded touch-target">
            Кнопка 1
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded touch-target">
            Кнопка 2
          </button>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Длинный текст</h2>
        <p className="hyphens-auto">
          Суперкалифрагилистикэкспедиалидочиусэтчтотонеонадописатьнормально
        </p>
      </div>
    </div>
  );
};

export default MobileTest;