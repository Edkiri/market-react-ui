import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfile } from '@/api';
import { update } from '@/store/auth/slice';
import { uploadUserAvatar } from '@/api/media';
import useInputForm from '@/hooks/useInputForm';
import MkInput from '@/components/Core/MkInput';
import validators from '@/utils/validators';

export default function UserProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { name: username, token } = useSelector((state) => state.user);
  const name = useInputForm(username, validators.minTextLength(4));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (selectedFile) {
        setLoading(true);
        setError('');
        const s3ObjectKey = await uploadUserAvatar({
          username,
          file: selectedFile,
        });
        const response = await updateProfile(
          {
            image_key: s3ObjectKey,
            name: name.value,
          },
          token,
        );
        dispatch(
          update({
            imageKey: s3ObjectKey,
            name: response.data.user.name,
          }),
        );
        setLoading(false);
        return;
      }
      if (name.value !== username) {
        setLoading(true);
        setError('');
        const response = await updateProfile(
          {
            name: name.value,
          },
          token,
        );
        dispatch(
          update({
            imageKey: response.data.user.image_key,
            name: response.data.user.name,
          }),
        );
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col justify-center p-4 gap-4 max-w-lg m-auto">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
        Actualizar perfil
      </h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
        <MkInput id="name" label="Nombre" {...name} />
        <div>
          <label
            htmlFor={'file'}
            className="block text-lg leading-6 text-gray-900 dark:text-white"
          >
            Foto de perfil
          </label>
          <div className="mt-2">
            <input
              id="file"
              type="file"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex w-full mt-8 justify-center rounded-md bg-indigo-600 p-3 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Actualizar
        </button>
        {error && (
          <span className="block text-red-500 mt-4 text-center">{error}</span>
        )}
      </form>
    </div>
  );
}
