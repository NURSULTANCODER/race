import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

const useScrollDebounce = (callback: () => void, delay: number): boolean => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  const handleScroll = useDebounce(() => {
    setScrolling(false);
    callback();
  }, delay);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (!scrolling) {
        setScrolling(true);
        handleScroll();
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleScroll, scrolling]);

  return scrolling;
};

export default useScrollDebounce;




