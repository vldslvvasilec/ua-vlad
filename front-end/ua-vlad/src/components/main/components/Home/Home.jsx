import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import Portfolios from './components/Portfolios/Portfolios';
import Contacts from './components/Contacts/Contacts';
import Testimonials from './components/Testimonials/Testimonials';
import './Home.scss';

export default function Home({ refs, backData }) {
  return (
    <>
      <HomePage refProp={refs.homeRef} />
      <Services refProp={refs.servicesRef} />
      <Portfolios refProp={refs.portfolioRef} portItems={backData.portfolios} />
      <Contacts refProp={refs.contactsRef} users={backData.team_users}/>
      <Testimonials refProp={refs.testimonialsRef} coments={backData.comments} />
    </>
  )
}
