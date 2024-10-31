import React from 'react';
import { FaTelegram, FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './team.scss';

const UserContacts = ({ userContacts }) => {
  return (
    <section className="user-contacts">
      {userContacts.userTelegram && (
        <a href={`https://t.me/${userContacts.userTelegram}`} target="_blank" rel="noopener noreferrer">
          <FaTelegram className="contact-icon fa-telegram" />
        </a>
      )}
      {userContacts.userFB && (
        <a href={`https://facebook.com/${userContacts.userFB}`} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="contact-icon fa-facebook" />
        </a>
      )}
      {userContacts.userInst && (
        <a href={`https://instagram.com/${userContacts.userInst}`} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="contact-icon fa-instagram" />
        </a>
      )}
      {userContacts.userWhatsApp && (
        <a href={`https://wa.me/${userContacts.userWhatsApp}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="contact-icon fa-whatsapp" />
        </a>
      )}
      {userContacts.userLinkedIn && (
        <a href={`https://linkedin.com/in/${userContacts.userLinkedIn}`} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon fa-linkedin" />
        </a>
      )}
      {userContacts.userEmail && (
        <a href={`mailto:${userContacts.userEmail}`}>
          <FaEnvelope className="contact-icon fa-envelope" />
        </a>
      )}
    </section>
  );
};

export default UserContacts;
