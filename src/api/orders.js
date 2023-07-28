import { API_URL } from '@/utils/constants';
import axios from 'axios';

export async function createOrder({ token, address, phone, orders }) {
  const { data } = await axios.post(
    `${API_URL}/sale`,
    {
      address,
      phone,
      orders,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return data;
}
