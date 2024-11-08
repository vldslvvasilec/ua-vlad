import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ContactUs.scss';

export default function ContactUs({refs, scrollToSection}) {
  const { t } = useTranslation();
  const handleContactsClick = (e) => {
    e.preventDefault();
    scrollToSection(refs.contactsRef);
  };
  return (
    <section className="contactUs">
      <Link onClick={handleContactsClick} to="#">{t('contact us')}</Link>
    </section>
  )
}
