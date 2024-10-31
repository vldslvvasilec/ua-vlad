import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ClipLoader from 'react-spinners/ClipLoader';
import useTypingEffect from '../../../../../../config/useTypingEffect';
import axios from 'axios';
import './Contacts.scss';

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const userLang = i18n.language;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isTouched, setIsTouched] = useState({
    name: false,
    email: false,
    message: false
  });
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

    if (field === 'name' && !name.trim()) {
      setErrors((prev) => ({ ...prev, name: t('about-us-form-error') }));
    }

    if (field === 'email' && !validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: t('about-us-form-error-email') }));
    }

    if (field === 'message' && !message.trim()) {
      setErrors((prev) => ({ ...prev, message: t('about-us-form-error') }));
    }
  };

  const handleChange = (field, value) => {
    if (field === 'name') {
      setName(value);
      setErrors((prev) => ({ ...prev, name: '' }));
    }

    if (field === 'email') {
      setEmail(value);
      setErrors((prev) => ({ ...prev, email: '' }));
    }

    if (field === 'message') {
      setMessage(value);
      setErrors((prev) => ({ ...prev, message: '' }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setStatusMessage('');
  //   setIsError(false);

  //   // Имитация отправки данных на сервер
  //   setTimeout(() => {
  //     const isValidEmail = validateEmail(email);

  //     if (isValidEmail && name.trim() && message.trim()) {
  //       setStatusMessage(t('about-us-message_delivered', { name }));
  //       setIsSubmitted(true);
  //       setIsError(false);
  //       setName('');
  //       setEmail('');
  //       setMessage('');
        
  //       // Сбрасываем состояние isTouched
  //       setIsTouched({
  //         name: false,
  //         email: false,
  //         message: false
  //       });
  //     } else if (!isValidEmail) {
  //       setStatusMessage(t('about-us-email_not_exist', { name, email }));
  //       setIsError(true);
  //     } else {
  //       setStatusMessage(t('about-us-error_sending'));
  //       setIsError(true);
  //     }

  //     setIsLoading(false);

  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //       setIsError(false);
  //     }, 5000);
  //   }, 3000); // Имитация задержки в 3 секунды для демонстрации загрузки
  // };

  const isSubmitDisabled = !name.trim() || !validateEmail(email) || !message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');
    setIsError(false);

    const contactsData = {
      name,
      email,
      lang: userLang,
      message,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_IP_BACKEND}/api/contacts/`, contactsData);
      
      // Обработка успешного ответа
      if (response.data && response.data.succes === 'OK') {
        setStatusMessage(t('about-us-message_delivered', { name }));
        setIsSubmitted(true);
        setIsError(false);
        
        // Очистка формы
        setName('');
        setEmail('');
        setMessage('');
        setIsTouched({ name: false, email: false, message: false });
      } else {
        setStatusMessage(t('about-us-email_not_exist', { name, email }));
        setIsError(true);
      }
    } catch (error) {
      setStatusMessage(t('about-us-error_sending'));
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
    <section id='contacts-form-id' className="contacts-form-wrap">
      <h2 id='contacts-form-tittle' className="contacts-form-tittle">
      {useTypingEffect(t('about-us-form-tittle'), 1500, 'contacts-form-tittle')}
      </h2>

      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <ClipLoader color='var(--loader-contacts-color)' loading={isLoading} size={150} />
        </div>
      ) : (
        isSubmitted || isError ? (
          <div className={`contacts-form-error ${isError ? 'error' : statusMessage ? 'success' : ''}`}>
            <span>{statusMessage}</span>
          </div>
        ) : (
          <form className='contacts-form' onSubmit={handleSubmit}>
            <section className="form-details">
              <section className="contacts-details-details">
                <section className="contacts-details-item">
                  <label htmlFor="name">{t('about-us-form-name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t('about-us-form-placeholder-name')}
                    value={name}
                    onBlur={() => handleBlur('name')}
                    onChange={(e) => handleChange('name', e.target.value)}
                    style={{ borderColor: isTouched.name && !name ? 'red' : 'initial' }}
                  />
                  {isTouched.name && errors.name && <p className='contacts-form-error-input'>{errors.name}</p>}
                </section>
                <section className="contacts-details-item">
                  <label htmlFor="email">{t('about-us-form-email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder={t('about-us-form-placeholder-email')}
                    value={email}
                    onBlur={() => handleBlur('email')}
                    onChange={(e) => handleChange('email', e.target.value)}
                    style={{ borderColor: isTouched.email && !validateEmail(email) ? 'red' : 'initial' }}
                  />
                  {isTouched.email && errors.email && <p className='contacts-form-error-input'>{errors.email}</p>}
                </section>
              </section>
              <section className="contacts-form-text">
                <label htmlFor="message">{t('about-us-form-subject')}</label>
                <textarea
                  rows={5}
                  id="message"
                  name="message"
                  required
                  placeholder={t('about-us-form-placeholder-subject')}
                  value={message}
                  onBlur={() => handleBlur('message')}
                  onChange={(e) => handleChange('message', e.target.value)}
                  style={{ borderColor: isTouched.message && !message ? 'red' : 'initial' }}
                ></textarea>
                {isTouched.message && errors.message && <p className='contacts-form-error-input'>{errors.message}</p>}
              </section>
            </section>
            <button type="submit" disabled={isSubmitDisabled}>
              {t('about-us-form-submit')}
            </button>
          </form>
        )
      )}
    </section>
  );
}
