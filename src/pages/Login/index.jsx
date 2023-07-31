import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login as apiLogin } from '@/api';
import MkInput from '@/components/Core/MkInput';
import useInputForm from '@/hooks/useInputForm';
import validators from '@/utils/validators';
import { login } from '@/store/auth/slice';

export default function Login() {
  const email = useInputForm('', validators.email);
  const password = useInputForm('', validators.password);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.error || email.value.trim() === '') return;
    if (password.error || password.value.trim() === '') return;
    setError('');

    try {
      setLoading(true);
      const { data } = await apiLogin({
        email: email.value,
        password: password.value,
      });
      setLoading(false);
      dispatch(
        login({
          token: data.token,
          roleId: data.user.role_id,
          userId: data.user.id,
          name: data.user.name,
          imageKey: data.user.image_key,
        }),
      );
      navigate('/');
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            Inicia Sesión
          </h2>
        </div>

        <div className="mt-4 p-6 sm:mx-auto rounded sm:w-full sm:max-w-sm border border-neutral-500">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <MkInput id="email" label="Dirección de correo" {...email} />

            <MkInput
              id="password"
              type="password"
              label="Contraseña"
              {...password}
            />

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 p-3 mt-8 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Inicia sesión
              </button>
              {error && (
                <span className="block text-red-500 mt-4 text-center">
                  {error}
                </span>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-lg text-gray-500">
            No tienes cuenta?{' '}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 text-lg hover:text-indigo-500"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
