import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getProfilePic } from '@/api';

export default function useProfilePic() {
  const [profilePic, setProfilePic] = useState(null);
  const { imageKey } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      if (imageKey) {
        try {
          const image = await getProfilePic({ imageKey });
          setProfilePic(image);
        } catch (err) {
          setProfilePic(null);
        }
      }
    })();
  }, [imageKey]);

  return { profilePic };
}
