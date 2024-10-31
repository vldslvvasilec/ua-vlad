import React from 'react';
import HeaderNav from './HeaderNav';
import LanguageSelector from './LanguageSelector';
import './MinimalMenu.scss'

export default function MinimalMenu({ refs, isOpen, scrollToTop, scrollToSection }) {
  return (
    <div className={`MinimalMenu ${isOpen ? 'open' : ''}`}>
        <HeaderNav refs={refs} scrollToTop={scrollToTop} scrollToSection={scrollToSection} />
        <LanguageSelector />
    </div>  )
}
