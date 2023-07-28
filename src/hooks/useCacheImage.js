import { MEDIA_URL } from '@/utils/constants';
import { useEffect, useState } from 'react';

export default function useCacheImage({ key }) {
  const [imageSrc, setImageSrc] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (key) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key }),
      };
      setLoading(true);
      fetch(`${MEDIA_URL}/file`, requestOptions)
        .then((response) => response.json())
        .then(({ url }) => {
          setImageSrc(url);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  }, [key]);

  return { imageSrc, loading };
}
