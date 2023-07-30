import axios from 'axios';

import { API_URL } from '@/utils/constants';

export async function getProducts(params) {
  const { data } = await axios.get(`${API_URL}/product`, { params });
  return data;
}

export async function getCategories() {
  const { data } = await axios.get(`${API_URL}/category`);
  return data;
}

export async function createProduct({ token, payload }) {
  const { data } = await axios.post(`${API_URL}/product`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
