import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './HeaderNav.scss';

export default function HeaderNav({ refs, scrollToTop, scrollToSection }) {
  const { t } = useTranslation();

  // Обработка кликов для каждой секции
  const handleHomeClick = (e) => {
    e.preventDefault();
    scrollToTop();
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    scrollToSection(refs.servicesRef);
  };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    scrollToSection(refs.portfolioRef);
  };

  const handleTestimonialsClick = (e) => {
    e.preventDefault();
    scrollToSection(refs.testimonialsRef);
  };

  const handleContactsClick = (e) => {
    e.preventDefault();
    scrollToSection(refs.contactsRef);
  };

  return (
    <nav className="header-nav">
      <ul className="header-menu">
        <li className="header-item">
          <Link onClick={handleHomeClick} to="#">
            {t('home')}
          </Link>
        </li>
        <li className="header-item">
          <Link onClick={handlePortfolioClick} to="#">
            {t('portfolio')}
          </Link>
        </li>
        <li className="header-item">
          <Link onClick={handleServicesClick} to="#">
            {t('services')}
          </Link>
        </li>
        <li className="header-item">
          <Link onClick={handleTestimonialsClick} to="#">
            {t('testimonials')}
          </Link>
        </li>
        <li className="header-item">
          <Link onClick={handleContactsClick} to="#">
            {t('contacts')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
