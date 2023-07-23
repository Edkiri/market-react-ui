import axios from 'axios';

import { API_URL } from '@/utils/constants';

export async function signup({ email, password, name }) {
  const { data } = await axios.post(`${API_URL}/auth/register`, {
    email,
    password,
    name,
  });
  return data;
}

export async function login({ email, password }) {
  console.log(email, password)
  const { data } = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  return data;
}
