import axios from 'axios';

import { MEDIA_URL } from '@/utils/constants';

export async function uploadUserAvatar({ username, file }) {
  const { data } = await axios.post(
    `${MEDIA_URL}/upload-avatar`,
    { username, file },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return data.data.s3ObjectKey;
}

export async function uploadProductImage({ productName, file }) {
  const { data } = await axios.post(
    `${MEDIA_URL}/upload-product-image`,
    { productName, file },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return data.data.s3ObjectKey;
}

export async function getImageByKey({ key }) {
  const { data } = await axios.post(`${MEDIA_URL}/file`, { key });
  return data;
}

