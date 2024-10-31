import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUserCheck, FaAward, FaGlobe } from "react-icons/fa6";
import { FaCode, FaTabletAlt, FaServer, FaSearch } from "react-icons/fa";
import { useIntersectionObserver } from '../../../../../../config/useIntersectionObserver';
import useTypingEffect from '../../../../../../config/useTypingEffect';
import './Services.scss';

export default function Services ({ refProp }) {
  const { t } = useTranslation();
  const itemsRef = useIntersectionObserver(0.1);

  return (
    <div id='services' ref={refProp} className="services">
      <h2 id="services-tittle" className="services-tittle">
        {useTypingEffect(t('choose-us-tittle'), 1500, 'services-tittle')}
      </h2>
      <ul className="services-list">
        {[
          { icon: <FaUserCheck />, title: t('choose-us-personalized-approach-tittle'), description: t('choose-us-personalized-approach-description') },
          { icon: <FaCode />, title: t('choose-us-modern-technologies-tittle'), description: t('choose-us-modern-technologies-description') },
          { icon: <FaTabletAlt />, title: t('choose-us-responsive-design-tittle'), description: t('choose-us-responsive-design-description') },
          { icon: <FaGlobe />, title: t('choose-us-multilingual-support-tittle'), description: t('choose-us-multilingual-support-description') },
          { icon: <FaServer />, title: t('choose-us-reliable-hosting-tittle'), description: t('choose-us-reliable-hosting-description') },
          { icon: <FaSearch />, title: t('choose-us-SEO-optimization-tittle'), description: t('choose-us-SEO-optimization-description') },
          { icon: <FaAward />, title: t('choose-us-expertise-and-professionalism-tittle'), description: t('choose-us-expertise-and-professionalism-description') },
        ].map((service, index) => (
          <li className="services-item" key={index} ref={el => itemsRef.current[index] = el}>
            <section className="svg-wrap">
              {service.icon}
            </section>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
