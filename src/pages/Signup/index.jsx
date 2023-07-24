import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useInputForm from '@/hooks/useInputForm';
import validators from '@/utils/validators';
import MkInput from '@/components/Core/MkInput';
import { signup } from '@/api';
import { login } from '@/store/auth/slice';

export default function Signup() {
  const email = useInputForm('', validators.email);
  const password = useInputForm('', validators.password);
  const name = useInputForm('', validators.minTextLength(4));
  const confirmPassword = useInputForm('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.error || email.value.trim() === '') return;
    if (password.error || password.value.trim() === '') return;
    if (name.error || name.value.trim() === '') return;
    if (password.value !== confirmPassword.value) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');

    try {
      setLoading(true);
      const { data } = await signup({
        email: email.value,
        password: password.value,
        name: name.value,
      });
      setLoading(false);
      dispatch(login(data));
      navigate('/');
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            Registro
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <MkInput id="name" label="Nombre" {...name} />

            <MkInput id="email" label="Dirección de correo" {...email} />

            <MkInput
              id="password"
              type="password"
              label="Contraseña"
              {...password}
            />

            <MkInput
              id="confirmPassword"
              type="password"
              label="Reingresa la contraseña"
              {...confirmPassword}
            />

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full mt-8 justify-center rounded-md bg-indigo-600 p-3 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrar
              </button>
              {error && (
                <span className="block text-red-500 mt-4 text-center">
                  {error}
                </span>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-lg text-gray-500">
            Ya tienes cuenta?{' '}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 text-lg hover:text-indigo-500"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
