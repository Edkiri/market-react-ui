import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MkButton from '@/components/Core/MkButton';
import MkInput from '@/components/Core/MkInput';
import useInputForm from '@/hooks/useInputForm';
import validators from '@/utils/validators';
import { createOrder } from '@/api/orders';

export default function OrderForm({ cart }) {
  const token = useSelector((state) => state.user.token);
  const address = useInputForm('', validators.minTextLength(10));
  const phone = useInputForm('', validators.spainPhoneNumber);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (address.error || address.value.trim() === '') return;
    if (phone.error || phone.value.trim() === '') return;
    setError('');
    try {
      setLoading(true);
      const orders = cart.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      }));
      await createOrder({
        token,
        orders,
        address: address.value,
        phone: phone.value,
      });
      setLoading(false);
      navigate('/orders');
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-stretch w-full gap-4"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <MkInput label="Dirección" {...address} />
        <MkInput label="Teléfono de contacto" {...phone} />
      </div>

      <div className="flex flex-col w-full justify-center mt-5">
        <MkButton loading={loading} type="submit" label="Comprar" stretch />
        {error && (
          <span className="block text-red-500 mt-4 text-center">{error}</span>
        )}
      </div>
    </form>
  );
}
