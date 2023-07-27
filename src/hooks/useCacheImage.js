import { MEDIA_URL } from '@/utils/constants';
import { useEffect, useState } from 'react';

export default function useCacheImage({ key }) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (key) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key }),
      };
      fetch(`${MEDIA_URL}/file`, requestOptions)
        .then((response) => response.json())
        .then(({ url }) => {
          setImageSrc(url);
        })
        .catch((err) => console.error(error));
    }
  }, [key]);

  return { imageSrc };
}
