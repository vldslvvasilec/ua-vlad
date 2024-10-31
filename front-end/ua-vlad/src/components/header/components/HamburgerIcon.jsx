import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import './HamburgerIcon.scss';

const HamburgerIcon = ({ isOpen, handleClick }) => {
  const [menuColor, setMenuColor] = useState('');

  useEffect(() => {
    // Получаем значение CSS переменной --text-color
    const computedStyle = getComputedStyle(document.documentElement);
    const color = computedStyle.getPropertyValue('--hamburgerIcon-color').trim();
    setMenuColor(color);

    // Следим за изменением темы и обновляем цвет
    const updateMenuColor = () => {
      const updatedColor = getComputedStyle(document.documentElement).getPropertyValue('--hamburgerIcon-color').trim();
      setMenuColor(updatedColor);
    };

    // Добавляем обработчики смены темы
    window.matchMedia('(prefers-color-scheme: dark)').addListener(updateMenuColor);
    window.matchMedia('(prefers-color-scheme: light)').addListener(updateMenuColor);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeListener(updateMenuColor);
      window.matchMedia('(prefers-color-scheme: light)').removeListener(updateMenuColor);
    };
  }, []);

  return (
    <HamburgerMenu
      isOpen={isOpen}
      menuClicked={handleClick}
      width={30}
      height={20}
      strokeWidth={3}
      rotate={0}
      borderRadius={0}
      animationDuration={0.5}
      color={menuColor}
      className="menu-icon"
    />
  );
};

export default HamburgerIcon;
