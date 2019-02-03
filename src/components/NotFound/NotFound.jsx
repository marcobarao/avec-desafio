import React from 'react';

import './NotFound.css';
import SadFace from '../../assets/icons/sad.svg';

const NotFound = () => (
  <section className="notfound-main">
    <div className="content">
      <img className="image" src={SadFace} alt="What a pity..." />
      <div className="speech-bubble">
        <h2 className="text">{'We couldn\'t find the content you\'re looking for...'}</h2>
      </div>
    </div>
  </section>
);

export default NotFound;
