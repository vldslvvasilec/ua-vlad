import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import team from "/src/assets/Images/team.jpg";
import Team from './Team';
import ContactForm from './ContactForm';
import './Contacts.scss';
import useTypingEffect from '../../../../../../config/useTypingEffect';
import { useIntersectionObserver } from '../../../../../../config/useIntersectionObserver';

export default function Contacts({ refProp, users }) {
  const { t } = useTranslation();
  const itemsRef = useIntersectionObserver(0.1);

  const aboutUsRef = itemsRef.current[4]; // Предположим, это 5-й элемент

  useEffect(() => {
    if (aboutUsRef && aboutUsRef.classList.contains('visible')) {
      return; // Если элемент уже виден, ничего не делаем
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Добавляем класс для анимации
        }
      });
    }, { threshold: 0.1 });

    if (aboutUsRef) {
      observer.observe(aboutUsRef); // Наблюдаем за элементом
    }

    return () => {
      if (aboutUsRef) {
        observer.unobserve(aboutUsRef); // Отключаем наблюдение
      }
    };
  }, [aboutUsRef]);

  const contactLinks = [
    {
      className: 'fa-whatsapp',
      icon: <IoLogoWhatsapp />,
      label: 'WhatsApp',
      href: "https://chat.whatsapp.com/FbxU5aQf9lB5NoGLm2j0ND"
    },
    {
      className: 'fa-telegram',
      icon: <SiTelegram />,
      label: 'Telegram',
      href: "https://t.me/+oJYqXNzwvARiMzBk"
    },
    {
      className: 'fa-linkedin',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: "https://www.linkedin.com/groups/13102312/"
    },
    {
      className: 'fa-envelope',
      icon: <MdEmail />,
      label: 'Email',
      href: "mailto:ua-vlad@ua-vlad.com"
    }
  ];

  return (
    <div ref={refProp} className='contacts'>
      <h2 id='contacts-tittle' className='contacts-tittle'>
        {useTypingEffect(t('contacts-tittle'), 1500, 'contacts-tittle')}
      </h2>
      <section className="contacts-icons">
        {contactLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            target="_blank" 
            className={`contacts-block ${link.className}`} 
            ref={el => itemsRef.current[index] = el}
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </section>
      <div className="about-us">
        <h2 id='about-as-tittle' className="about-as-tittle">
          {useTypingEffect(t('about-us-tittle'), 1400, 'about-as-tittle')}
        </h2>
        <section className="about-us-our-team" ref={el => itemsRef.current[4] = el}>
          <img className='about-us-img' src={team} alt="" />
          <p className='about-us-description'>{t('about-us-ourTeam')}</p>
        </section>
        <Team team={users} />
      </div>
      <ContactForm />
    </div>
  )
}
