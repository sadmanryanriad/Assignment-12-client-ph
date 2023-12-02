// useAos.js
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function useAos(options = {}) {
  useEffect(() => {
    Aos.init({
      offset: options.offset || 200,
      duration: options.duration || 600,
      easing: options.easing || 'ease-in-sine',
      delay: options.delay || 100,
    });
  }, []);
}
