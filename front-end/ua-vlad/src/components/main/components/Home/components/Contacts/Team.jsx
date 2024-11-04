import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import UserContacts from './UserContacts';
import './team.scss';

export default function Team({ team }) {
  const { i18n } = useTranslation();

  return (
    <div className="team-cards">
      {team.map((user, index) => {
        const userContacts = {
          userEmail: user.userEmail,
          userFB: user.userFB,
          userInst: user.userInst,
          userLinkedIn: user.userLinkedIn,
          userTelegram: user.userTelegram,
          userWhatsApp: user.userWhatsApp,
        };

        const userNames = {
          userName_cs: user.userName_cs,
          userName_en: user.userName_en,
          userName_ru: user.userName_ru,
          userName_uk: user.userName_uk,
        };

        const userSkills = {
          userSkills_cs: user.userSkills_cs,
          userSkills_en: user.userSkills_en,
          userSkills_ru: user.userSkills_ru,
          userSkills_uk: user.userSkills_uk,
        };

        const userName = userNames[`userName_${i18n.language}`] || userNames.userName_en || 'Имя не указано';

        const skillsKey = `userSkills_${i18n.language}`;
        const skillsList = userSkills[skillsKey] ? userSkills[skillsKey].split('.').filter(skill => skill.trim() !== '') : [];
        const userImage = user.userFoto.replace('/media/', '');
        return (
          <div key={index} className="user-card">
            <section className="user-content">
              <img
                src={`../../../${userImage}`}
                alt={`${userName} фото`}
                className="user-photo"
              />
              <section className="user-info">
                <h3>{userName}</h3>
                <p>{user.userJob}</p>
                <UserContacts userContacts={userContacts} />
              </section>
            </section>
            <UserSkills skillsList={skillsList} />
          </div>
        );
      })}
    </div>
  );
}

const UserSkills = ({ skillsList }) => {
  const { t } = useTranslation();
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className='about-us-button-wrap'>
      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? t('about-us-button-of') : t('about-us-button-on')}
      </button>
      {showSkills && (
        <ul className="user-skills">
          {skillsList.map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
