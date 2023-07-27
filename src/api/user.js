import axios from 'axios';

import { API_URL, MEDIA_URL } from '@/utils/constants';

export async function signup({ email, password, name }) {
  const { data } = await axios.post(`${API_URL}/auth/register`, {
    email,
    password,
    name,
  });
  return data;
}

export async function login({ email, password }) {
  const { data } = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  return data;
}

export async function updateProfile(payload, token) {
  const { data } = await axios.put(`${API_URL}/user`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export async function getProfilePic({ imageKey }) {
  const { data } = await axios.post(`${MEDIA_URL}/file`, { key: imageKey });
  return data;
}