import React from 'react';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
    <h1 className="text-6xl font-bold text-red-500">404</h1>
    <p className="text-2xl mt-4 text-gray-700">Сторінку не знайдено</p>
    <p className="mt-2 text-gray-500">На жаль, ми не можемо знайти сторінку, яку ви шукаєте.</p>
    <button
      onClick={() => window.history.back()}
      className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
      Повернутися назад
    </button>
  </div>
);

export default NotFound;
