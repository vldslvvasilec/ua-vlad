import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './header.scss';
import LanguageSelector from './components/LanguageSelector.jsx';
import logoIcon from '../../assets/Images/logoIcon.png';
import HamburgerIcon from './components/HamburgerIcon.jsx';
import HeaderNav from './components/HeaderNav.jsx';
import ContactUs from './components/ContactUs.jsx';
import MinimalMenu from './components/MinimalMenu.jsx';

function Header({ refs }) {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (ref) => {
    const offsetTop = ref.current.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerWidth > 768 ? window.innerHeight * 0.22 : window.innerHeight * 0.13; // Смещение для экранов больше 768px — 22vh, меньше — 13vh
    window.scrollTo({
      top: offsetTop - offset,
      behavior: 'smooth'
    });
  };
  const handleContactsClick = (e) => {
    e.preventDefault();
    scrollToSection(refs.contactsRef);
  };

  
  return (
    <div className="headerWrap">
      <div className="header">
        <section className="headerTop">
          <section className="header-logo">
            <Link onClick={scrollToTop} to="#"> 
            <img src={logoIcon} alt="header-logo" />
            <span>{t('logoText')}</span>
            </Link>
          </section>
          <ContactUs handleContactsClick={handleContactsClick}/>
          <section className="language-selector-wrap">
            <LanguageSelector />
          </section>
          <HamburgerIcon isOpen={isOpen} handleClick={handleClick} />
        </section>
        <section className="headerBottom">
          <HeaderNav refs={refs} scrollToTop={scrollToTop} scrollToSection={scrollToSection} />
        </section>
      </div>
      <MinimalMenu refs={refs} scrollToTop={scrollToTop} scrollToSection={scrollToSection} isOpen={isOpen}/>
    </div>
  );
}

export default Header;
