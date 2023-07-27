import axios from 'axios';

import { API_URL } from '@/utils/constants';

export async function getProducts() {
  const { data } = await axios.get(`${API_URL}/product`);
  return data;
}
