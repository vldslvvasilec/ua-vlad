import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.scss';
import Home from './components/Home/Home';

function Main({ refs, backData }) {
  return (
    <div className="main">
        <Routes>
          <Route path="/" element={<Home refs={refs} backData={backData}/>} />
        </Routes>
    </div>
  );
}

export default Main;
