import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Rating from '@mui/material/Rating';
import { CgPlayTrackNextO, CgPlayTrackPrevO } from "react-icons/cg";
import './comments.scss'

export default function Coments({ coments }) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedComments, setExpandedComments] = useState({});
  const [sortedComments, setSortedComments] = useState([])

  const commentsPerPage = 4;  // Количество комментариев на страницу
  const maxTextLength = 100;  // Максимальная длина текста комментария

  // Сортировка комментариев по приоритету при загрузке
  useEffect(() => {
    const sorted = [...coments].sort((a, b) => b.priority - a.priority);
    setSortedComments(sorted);
  }, [coments]);

  // Переключение на следующую страницу комментариев
  const handleNext = () => {
    if ((currentPage + 1) * commentsPerPage < sortedComments.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Переключение на предыдущую страницу комментариев
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Переключение состояния раскрытия текста комментария
  const toggleExpand = (index) => {
    setExpandedComments((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  // Ограничение текста комментария до 400 символов с возможностью раскрытия
  const getCommentText = (comment, index) => {
    const isExpanded = expandedComments[index];
    if (comment.text.length <= maxTextLength || isExpanded) {
      return comment.text;
    }
    return (
      <>
        {comment.text.slice(0, maxTextLength)}...
        <span className='comments-button-on' onClick={() => toggleExpand(index)}>
          {t('about-us-comments-button-on')}
        </span>
      </>
    );
  };

  // Индекс первого комментария на текущей странице
  const startIndex = currentPage * commentsPerPage;
  // Комментарии для текущей страницы
  const currentComments = sortedComments.slice(startIndex, startIndex + commentsPerPage);

  return (
    <section className="testimisials-content">
        <button onClick={handlePrev} disabled={currentPage === 0}>
          <CgPlayTrackPrevO />
        </button>
        <section className="comments-content">
            {currentComments.map((comment, index) => (
            <section className='comments-content-item' key={startIndex + index}>
            <p>
                <strong className='about-us-comments-author'>{t('about-us-comments-author')}</strong> {comment.author} <br />
            </p>
            <Rating
                value={comment.rating}
                precision={1}
                max={5}
                readOnly
                className="comments-rating"
              />
            <p>
                {getCommentText(comment, startIndex + index)}
                {expandedComments[startIndex + index] && (
                <span className='comments-button-off' onClick={() => toggleExpand(startIndex + index)}>
                    {t('about-us-comments-button-off')}
                </span>
                )}
            </p>
            </section>        
            ))}
        </section>
        <button onClick={handleNext} disabled={(currentPage + 1) * commentsPerPage >= sortedComments.length}>
          <CgPlayTrackNextO />
        </button>
    </section>
  );
}
