import {useEffect, useState} from 'react';
import {getDeviceDimention} from '../Utility';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('mobile');

  console.log('here');
  useEffect(() => {
    const isMobile = getDeviceDimention().width < 1280;
    if (isMobile) {
      setDeviceType('mobile');
    } else {
      console.log('Desktop display');
      console.log(deviceType);
      setDeviceType('desktop');
    }

    if (typeof window !== 'undefined') {
      window.addEventListener(
        'resize',
        function () {
          const isMobile = getDeviceDimention().width < 1280;
          if (isMobile) {
            setDeviceType('mobile');
          } else {
            console.log('Desktop display');
            console.log(deviceType);
            setDeviceType('desktop');
          }
        },
        true,
      );
    } else {
      console.error('Error::useDeviceType:: Window is null');
    }
  }, []);

  return deviceType;
};

export default useDeviceType;
