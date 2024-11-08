import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ContactUs.scss';

export default function ContactUs({handleContactsClick}) {
  const { t } = useTranslation();
  return (
    <section className="contactUs">
      <Link to="#">{t('contact us')}</Link>
    </section>
  )
}
