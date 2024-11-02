import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartLoader from './config/StartLoader';
import { StrictMode, useState, useRef, useEffect } from 'react';
import IPAddressComponent from './config/IPAddressComponent';
import ThemeLoader from './config/ThemeLoader';
import BackToTop from './config/BackToTop';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import HexagonGrid from './config/HexagonGrid';
import './app.scss';

function App() {
  console.log("Hello App")
  const [responseData, setResponseData] = useState(null);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactsRef = useRef();
  const refs = {
    homeRef,
    servicesRef,
    portfolioRef,
    testimonialsRef,
    contactsRef,
  };

  useEffect(() => {
    if (responseData) {
      const timer = setTimeout(() => {
        setIsLoaderVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [responseData]);

  return (
    <>
      <HexagonGrid/>
      <IPAddressComponent setResponseData={setResponseData} />
      <StrictMode>
        {isLoaderVisible ? (
          <StartLoader />
        ) : (
          <Router>
            
            <ThemeLoader />
            <Header refs={refs} />
            <Main refs={refs} backData={responseData} /> 
            <Footer />
            <BackToTop />
          </Router>
        )}
      </StrictMode>
    </>
  );
}

export default App;
