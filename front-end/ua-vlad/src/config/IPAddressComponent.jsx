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
        console.log(`${import.meta.env.VITE_IP_BACKEND}/api/user-information/`);
        console.log(responceData);
        console.log("test");
        const postResponse = await axios.post(`${import.meta.env.VITE_IP_BACKEND}/api/user-information/`, responceData);
        console.log("test after");
        console.log(postResponse);
        setResponseData(postResponse.data);
      } catch (error) {
        console.error('Error fetching IP data:', error);
        
      }
    };

    fetchIP();
  }, [setResponseData]);

  return null;
};

export default IPAddressComponent;
