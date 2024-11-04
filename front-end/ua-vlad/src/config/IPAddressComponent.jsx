import React, { useEffect } from 'react';
import apiClient from './apiClient';

const IPAddressComponent = ({ setResponseData }) => {
  useEffect(() => {
    const fetchIP = async () => {
      try {
        // Запрос для получения IP-адреса с использованием apiClient
        const response = await apiClient.get(`https://ipinfo.io?token=${import.meta.env.VITE_IPINFO_API_KEY}`);
        
        if (response.data && response.data.ip) {
          const ipAddress = response.data.ip;
          const userLanguage = navigator.language || navigator.userLanguage;
          const userAgent = navigator.userAgent;
          const platform = navigator.platform;
          const uniqueBrowserIdentifier = `${userAgent}-${userLanguage}-${platform}`;
          
          // Подготовка данных для POST-запроса
          const requestData = {
            ip_address: ipAddress,
            browser_language: userLanguage,
            user_agent: userAgent,
            platform: platform,
            unique_identifier: uniqueBrowserIdentifier,
          };

          // Отправка данных на ваш API с помощью apiClient
          const postResponse = await apiClient.post(`/user-information/`, requestData);
          setResponseData(postResponse.data);
        } else {
          console.error('IP address not found');
        }
      } catch (error) {
        console.error('Error fetching IP data:', error);
        setResponseData(null);
      }
    };

    fetchIP();
  }, [setResponseData]);

  return null;
};

export default IPAddressComponent;
