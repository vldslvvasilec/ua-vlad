import { useEffect, useRef } from 'react';

export function useIntersectionObserver(threshold = 0.1) {
  const itemsRef = useRef([]); // Массив для хранения ссылок на элементы

  useEffect(() => {
    const observerOptions = {
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    itemsRef.current.forEach(item => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      itemsRef.current.forEach(item => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, [threshold]);

  return itemsRef;
}
