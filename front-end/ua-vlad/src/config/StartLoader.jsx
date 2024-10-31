import React from 'react';
import RingLoader from 'react-spinners/RingLoader';
import DotLoader from 'react-spinners/DotLoader';
import './startLoader.scss';

export default function StartLoader() {
  return (
    <div className='start-loader'>
        <RingLoader color="var(--loader-color)" loading={true} size={150} />
        <p className="loading-dots">
        Loading
        </p>
    </div>
  )
}
