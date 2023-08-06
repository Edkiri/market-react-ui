import { useState } from 'react';
import { useSelector } from 'react-redux';

import MkButton from '@/components/Core/MkButton';
import MkInput from '@/components/Core/MkInput';
import useInputForm from '@/hooks/useInputForm';
import validators from '@/utils/validators';
import { createOrder } from '@/api/orders';

export default function OrderForm({ onSuccess }) {
  const token = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.cart);
  const address = useInputForm('', validators.minTextLength(10));
  const phone = useInputForm('', validators.spainPhoneNumber);

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
      onSuccess();
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-stretch w-full gap-4 mt-4 border border-neutral-700 p-6 rounded"
    >
      <div className="flex flex-col lg:flex-row gap-4">
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
