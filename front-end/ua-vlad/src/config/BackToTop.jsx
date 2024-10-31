import React from 'react';
import { BiArrowToTop } from "react-icons/bi";
import { BiSolidToTop } from "react-icons/bi";
import './backToTop.scss';

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Плавная прокрутка
        });
      };
  return (
    <section className="backToTop" onClick={scrollToTop}>
        <BiSolidToTop />
    </section>
  )
}
