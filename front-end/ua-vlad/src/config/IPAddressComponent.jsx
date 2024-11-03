import React, { useEffect } from 'react';
import axios from 'axios';

const IPAddressComponent = ({ setResponseData }) => {
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io?token=${import.meta.env.VITE_IPINFO_API_KEY}`);
        const ipAddress = response.data.ip;
        const userLanguage = navigator.language || navigator.userLanguage;
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const uniqueBrowserIdentifier = `${userAgent}-${userLanguage}-${platform}`;
        
        const responceData = {
          ip_address: ipAddress,
          browser_language: userLanguage,
          user_agent: userAgent,
          platform: platform,
          unique_identifier: uniqueBrowserIdentifier,
        };

        console.log(`Sending to ${import.meta.env.VITE_IP_BACKEND}/api/user-information/`);
        console.log('Data to send:', responceData);

        const postResponse = await axios.post(`${import.meta.env.VITE_IP_BACKEND}/api/user-information/`, responceData);
        console.log('Response from server:', postResponse.data);
        setResponseData(postResponse.data);
      } catch (error) {
        console.error('Error fetching IP data:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
        } else {
          console.error('Error message:', error.message);
        }
      }
    };

    fetchIP();
  }, [setResponseData]);

  return null;
};

export default IPAddressComponent;
