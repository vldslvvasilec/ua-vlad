import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import Flag from 'react-world-flags';

const LanguageSelector = () => {
  const languageFlags = {
    en: 'GB',
    cs: 'CZ',
    ru: 'RU',
    uk: 'UA',
  };

  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const supportedLanguages = ['en', 'cs', 'ru', 'uk'];
  const currentLanguage = i18n.language;

  // Функция для изменения языка и записи его в куки
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set('language', lng, { expires: 365 });
    setIsDropdownOpen(false);
  };

  // Переключение состояния выпадающего меню
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Закрытие выпадающего меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <section onClick={toggleDropdown}>
        <Flag code={languageFlags[currentLanguage]} />
        <span>{t(`languageNames.${currentLanguage}`)}</span>
      </section>
      {isDropdownOpen && (
        <ul className="dropdown">
          {supportedLanguages
            .filter(lng => lng !== currentLanguage)
            .map(lng => (
              <li key={lng} className="languageButton" onClick={() => changeLanguage(lng)}>
                <Flag code={languageFlags[lng]} />
                <span>{t(`languageNames.${lng}`)}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;