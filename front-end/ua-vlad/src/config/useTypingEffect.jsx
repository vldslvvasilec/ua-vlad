import { useEffect, useState } from 'react';

const useTypingEffect = (text, duration, id, threshold = 0.1) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Функция для проверки видимости
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    // Создаем экземпляр IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: threshold,
    });

    // Находим элемент, к которому будет применен хук
    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [id, threshold]);

  useEffect(() => {
    if (isVisible) {
      setDisplayedText(''); // Сброс текста при изменении `text`
      const totalCharacters = text.length;
      const intervalTime = duration / totalCharacters;

      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length < totalCharacters) {
            return text.slice(0, prev.length + 1);
          }
          clearInterval(typingInterval);
          return prev;
        });
      }, intervalTime);

      return () => clearInterval(typingInterval);
    }
  }, [text, duration, isVisible]); // Добавляем `text` в зависимости

  return displayedText;
};

export default useTypingEffect;
