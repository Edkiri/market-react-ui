import { useEffect, useState } from 'react';

import useInputForm from '@/hooks/useInputForm';
import validators from '@/utils/validators';
import { MkButton, MkInput } from '@/components/Core';
import { useSelector } from 'react-redux';
import { uploadProductImage } from '@/api/media';
import { createProduct } from '@/api/products';

export default function CreateProduct() {
  const token = useSelector((state) => state.user.token);
  const [selectedFile, setSelectedFile] = useState(null);
  const categories = useSelector((state) => state.products.categories);
  const name = useInputForm('', validators.minTextLength(4));
  const price = useInputForm('');
  const description = useInputForm('', validators.minTextLength(4));
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setCreated(false);
      setLoading(true);
      setError('');
      const s3ObjectKey = await uploadProductImage({
        productName: name.value,
        file: selectedFile,
      });
      const payload = {
        name: name.value,
        description: description.value,
        image_key: s3ObjectKey,
        price: price.value,
        category_id: selectedCategory,
      };
      await createProduct({ token, payload });
      setCreated(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center gap-4 max-w-lg m-auto">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
        Añadir producto
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-6 rounded border-neutral-500">
        <MkInput id="name" label="Nombre" {...name} />
        <MkInput id="description" label="Descripción" {...description} />
        <MkInput id="price" label="Precio" {...price} />
        <div>
          <label
            htmlFor={'file'}
            className="block text-lg leading-6 text-gray-900 dark:text-white"
          >
            Imagen
          </label>
          <div className="my-2">
            <input
              className="min-w-0"
              id="file"
              type="file"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <label htmlFor="underline_select" className="sr-only">
          Underline select
        </label>
        <select
          id="underline_select"
          value={selectedCategory}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option value="none">Añade una categoría</option>
          {categories.map((cat) => {
            if (cat.name === 'todas') return;
            return (
              <option key={cat.name} value={cat.id}>
                {cat.name}
              </option>
            );
          })}
        </select>
        <MkButton label="Crear" stretch loading={loading} type="submit" />
        {error && (
          <span className="block text-red-500 mt-4 text-center">{error}</span>
        )}
      </form>
      {created && <p className='text-center mt-4 text-green-400'>{`El producto se ha creado correctamente`}</p>}
    </div>
  );
}
