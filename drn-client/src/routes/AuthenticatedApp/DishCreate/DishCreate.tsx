import useDishCreate from './DishCreate.hook';

const DishCreate = () => {
  const {
    allMenu,
    handleInputChange,
    handleCreateDish,
  } = useDishCreate();

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg w-96">
          <h3 className="font-bold mb-4 text-lg">Створити страву</h3>
          <form onSubmit={ handleCreateDish }>
            <label className="block mb-2">
              <span className="text-gray-700">Меню</span>
              <select
                className="border p-2 w-full rounded mt-1"
                name="menu"
                onChange={ handleInputChange }
                required
              >
                <option value="">Оберіть меню</option>
                {allMenu.map((item) => (
                  <option key={item.title} value={item._id}>{item.title}</option>
                ))}
              </select>
            </label>

            <label className="block mb-2">
              <span className="text-gray-700">Назва</span>
              <input
                type="text"
                name="title"
                className="border p-2 w-full rounded mt-1"
                onChange={ handleInputChange }
                required
              />
            </label>

            <label className="block mb-2">
              <span className="text-gray-700">Опис</span>
              <textarea
                className="border p-2 w-full rounded mt-1"
                name="description"
                onChange={ handleInputChange }
                required
              ></textarea>
            </label>

            <label className="block mb-2">
              <span className="text-gray-700">Вага (г)</span>
              <input
                type="number"
                className="border p-2 w-full rounded mt-1"
                name="weight"
                onChange={ handleInputChange }
                required
              />
            </label>

            <label className="block mb-2">
              <span className="text-gray-700">Ціна (₴)</span>
              <input
                type="number"
                className="border p-2 w-full rounded mt-1"
                name="price"
                onChange={ handleInputChange }
                required
              />
            </label>

            <label className="block mb-2">
              <span className="text-gray-700">Посилання на картинку</span>
              <input
                type="text"
                className="border p-2 w-full rounded mt-1"
                name="image"
                onChange={ handleInputChange }
                required
              />
            </label>

            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                onChange={ handleInputChange }
                name="isHidden"
                className="mr-2"
              />
              <span className="text-gray-700">Прихована</span>
            </label>

            <div className="flex justify-end space-x-2">
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Зберегти</button>
              <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded">Скасувати</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DishCreate;
