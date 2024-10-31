import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import adaptive from '/src/assets/Images/adaptive.jpg';
import react from '/src/assets/Images/react.jpg';
import webTehnologies from '/src/assets/Images/webTehnologies.jpg';
import './HomePage.scss';

export default function HomePage({ refProp }) {
  const { t } = useTranslation();

  const contentData = [
    {
      img: webTehnologies,
      title: t('home-page-tittle1'),
      description: t('home-page-description1')
    },
    {
      img: adaptive,
      title: t('home-page-tittle2'),
      description: t('home-page-description2')
    },
    {
      img: react,
      title: t('home-page-tittle3'),
      description: t('home-page-description3')
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionState, setTransitionState] = useState('enter-right');

  const handleNext = () => {
    setTransitionState('exit-left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
      setTransitionState('enter-right');
    }, 1000);  // Время смены слайда
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);  // Интервал между сменами
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={refProp} className="homePage">
      <div className="homePageCarousel">
        {contentData.map((content, index) => (
          <div
            key={index}
            className={`homePageSection ${
              index === currentIndex
                ? `current ${transitionState}`
                : 'exit-left'
            }`}
          >
            <h1 id='homePageTittle'>{content.title}</h1>
            <section className={`homePageContent ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <p className="homePageDescription">{content.description}</p>
              <img src={content.img} alt="Home Image" />
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
