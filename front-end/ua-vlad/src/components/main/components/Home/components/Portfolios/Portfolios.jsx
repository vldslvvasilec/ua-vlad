import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { useTranslation } from 'react-i18next';
import useTypingEffect from '../../../../../../config/useTypingEffect';
import './Portfolios.scss';

export default function Portfolios({ refProp, portItems }) {
  const { t } = useTranslation();
  const [visibleItemsCount, setVisibleItemsCount] = useState(4); // Количество отображаемых элементов

  // Сортировка по приоритету
  const sortedItems = portItems.sort((a, b) => b.priority - a.priority);

  // Функция для увеличения количества отображаемых элементов на 4
  const showMoreItems = () => {
    setVisibleItemsCount((prevCount) => prevCount + 4);
  };

  return (
    <div className='portfolio' ref={refProp}>
      <h2 id='portfolioTittle' className="portofolio">
        {useTypingEffect(t('works-tittle'), 1500, 'portfolioTittle')}
      </h2>
      <section className="portfolio-item-cards">
        {sortedItems.slice(0, visibleItemsCount).map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <h3>{item.title}</h3>
            <section className="imgContainer">
              <img src={item.image_url} alt={item.title} />
            </section>
            <section className="portfolio-imem-footer">
              <p>Author: {item.author}</p>
              <Rating
                value={item.rating}
                precision={1}
                max={5}
                readOnly
                className="custom-rating"
              />
            </section>
          </a>
        ))}
      </section>
      {visibleItemsCount < sortedItems.length && (
        <button onClick={showMoreItems} className="portfolio-show-more-btn">
          {t('show-more')}
        </button>
      )}
    </div>
  );
}
