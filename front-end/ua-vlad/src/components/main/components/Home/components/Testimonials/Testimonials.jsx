import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Rating from '@mui/material/Rating';
import ClipLoader from 'react-spinners/ClipLoader';
import Coments from './Coments';
import useTypingEffect from '../../../../../../config/useTypingEffect';
import axios from 'axios';
import './Testimonials.scss';

export default function Testimonials({ refProp, coments }) {
  const { t, i18n } = useTranslation();
  const userLang = i18n.language;

  // Состояния для формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [value, setValue] = useState(0);
  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (field) => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
    if (!validateField(field)) {
      setErrors((prev) => ({ ...prev, [field]: t('testimonials-form-error') }));
    }
  };

  const validateField = (field) => {
    switch (field) {
      case 'name':
        return name.trim() !== '';
      case 'email':
        return validateEmail(email);
      case 'message':
        return message.trim() !== '';
      default:
        return true;
    }
  };

  const handleChange = (field, value) => {
    if (field === 'name') setName(value);
    if (field === 'email') setEmail(value);
    if (field === 'message') setMessage(value);
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };

  const isSubmitDisabled = !name.trim() || !validateEmail(email) || !message.trim() || !value;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');
    setIsError(false);

    const reviewData = {
      author: name,
      email,
      lang: userLang,
      text: message,
      rating: value,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_IP_BACKEND}/api/reviews/`, reviewData);
      
      // Обработка успешного ответа
      if (response.data && response.data.succes === 'OK') {
        setStatusMessage(t('testimonials-message_delivered', { name }));
        setIsSubmitted(true);
        setIsError(false);
        
        // Очистка формы
        setName('');
        setEmail('');
        setValue(0);
        setMessage('');
        setIsTouched({ name: false, email: false, message: false });
      } else {
        setStatusMessage(t('testimonials-email_not_exist', { name, email }));
        setIsError(true);
      }
    } catch (error) {
      setStatusMessage(t('testimonials-error_sending'));
      setIsError(true);
    } finally {
      setIsLoading(false);
      // Очистка сообщения через 5 секунд
      setTimeout(() => {
        setIsSubmitted(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <div className='testimonials' ref={refProp}>
      <h2 id='testimonialsTittle'>{useTypingEffect(t('testimonials-tittle'), 1500, 'testimonialsTittle')}</h2>
      <Coments coments={coments} />
      
      <section className="testimonials-users">
        <h2 id='testimonials-tittle-form' className='testimonials-tittle'>{useTypingEffect(t('testimonials-form-tittle'), 1500, 'testimonials-tittle-form')}</h2>
        
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
            <ClipLoader color='var(--loader-contacts-color)' loading={isLoading} size={150} />
          </div>
        ) : (
          (isSubmitted || isError) ? (
            <div className={`testimonials-form-error ${isError ? 'error' : 'success'}`}>
              <span>{statusMessage}</span>
            </div>
          ) : (
            <form className='testimonials-form' onSubmit={handleSubmit}>
              <section className="testimonials-form-details">
                <section className="testimonials-details-details">
                  <section className="testimonials-details-item">
                    <label htmlFor="name_comments">{t('testimonials-form-name')}</label>
                    <input
                      type="text"
                      id="name_comments"
                      name="name"
                      required
                      placeholder={t('testimonials-form-placeholder-name')}
                      value={name}
                      onBlur={() => handleBlur('name')}
                      onChange={(e) => handleChange('name', e.target.value)}
                      style={{ borderColor: isTouched.name && !validateField('name') ? 'red' : 'initial' }}
                    />
                    {isTouched.name && errors.name && <p className='testimonials-form-error-input'>{errors.name}</p>}
                  </section>
                  <section className="testimonials-details-item">
                    <label htmlFor="email_comments">{t('testimonials-form-email')}</label>
                    <input
                      type="email"
                      id="email_comments"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder={t('testimonials-form-placeholder-email')}
                      value={email}
                      onBlur={() => handleBlur('email')}
                      onChange={(e) => handleChange('email', e.target.value)}
                      style={{ borderColor: isTouched.email && !validateField('email') ? 'red' : 'initial' }}
                    />
                    {isTouched.email && errors.email && <p className='testimonials-form-error-input'>{errors.email}</p>}
                  </section>
                </section>
                <section className="testimonials-form-text">
                  <label htmlFor="message_comments">{t('testimonials-form-subject')}</label>
                  <textarea
                    rows={5}
                    id="message_comments"
                    name="message"
                    required
                    placeholder={t('testimonials-form-placeholder-subject')}
                    value={message}
                    onBlur={() => handleBlur('message')}
                    onChange={(e) => handleChange('message', e.target.value)}
                    style={{ borderColor: isTouched.message && !validateField('message') ? 'red' : 'initial' }}
                  ></textarea>
                  {isTouched.message && errors.message && <p className='testimonials-form-error-input'>{errors.message}</p>}
                </section>
              </section>
              <Rating
                value={value}
                precision={1}
                max={5}
                onChange={handleRatingChange}
                className="comments-form-rating"
              />
              <button type="submit" disabled={isSubmitDisabled}>
                {t('testimonials-form-submit')}
              </button>
            </form>
          )
        )}
      </section>
    </div>
  );
}
