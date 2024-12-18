import React, { useEffect } from 'react';
import axios from 'axios';
import apiClient from './apiClient';

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
        const postResponse = import.meta.env.MODE === 'development'
        ? await axios.post(`${import.meta.env.VITE_IP_BACKEND_DEV}/api/user-information/`, responceData)
        : await apiClient.post(`/api/user-information/`, responceData);
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
