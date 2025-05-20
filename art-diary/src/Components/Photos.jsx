import React, { useEffect, useState } from 'react';

import './Photos.css';
import love from '../assets/Love.png';
import radhaKrishna from '../assets/radhaKrishna.png';
import kalamkari from '../assets/Kalamkari 1.png';
import clock from '../assets/Clock 1.png';
import birds from '../assets/Birds 1.png';
import radhaKrishna1 from '../assets/RadhaKrishna 1.png';
import anniversary from '../assets/Anniversary 1.png';
import poem from '../assets/Poem 1.png';
import glass from '../assets/glass.png';
import mamta from '../assets/mamta.png';
import butterfly from '../assets/butterfly.png';
import pencil from '../assets/pencil.png';
import an from '../assets/An 1.png';
import mandala from '../assets/mandala.png';
import peacock from '../assets/peacock.png';
import madhubani from '../assets/Madhubani 1.png';
import maa from '../assets/maa.png';
import mammi from '../assets/mammi.png';
import srk from '../assets/Srk.png';
import sk from '../assets/sk.png';
import scenery from '../assets/Scenery 1.png';
import ticket from '../assets/Ticket crafts 1.png';
import varun from '../assets/Varun.png';
import warli from '../assets/Warli art 1.png';
import raksha from '../assets/Raksha bandhan 1.png';
import manuscript from '../assets/Manuscript 1.png';
import dance from '../assets/dance.png';
import ocean from '../assets/ocean.png';
import mine from '../assets/mine.png';
import jasmine from '../assets/jasmine.png';
import him from '../assets/him.png';
import dreamy from '../assets/dreamy.png';
import meet from '../assets/meet.png';
import cute from '../assets/cute.png';


const Photos = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`photos-wrapper ${animate ? 'slide-in' : ''}`}>
      <div class="container">
        <div><img src={love} alt=''/></div>
        <div><img src={birds}/></div>
        <div><img src={ticket}/></div>
        <div><img src={radhaKrishna1}/></div>
        <div><img src={kalamkari}/></div>
        <div><img src={anniversary}/></div>
        <div><img src={radhaKrishna}/></div>
        <div><img src={poem}/></div>
        <div><img src={pencil}/></div>
        <div><img src={maa}/></div>
        <div><img src={an}/></div>
        <div><img src={scenery}/></div>
        <div><img src={mamta}/></div>
        <div><img src={manuscript}/></div>
         <div><img src={peacock}/></div>
        <div><img src={mandala}/></div>
          <div><img src={glass}/></div>
        <div><img src={varun}/></div>
        <div><img src={sk}/></div>
        <div><img src={srk}/></div>
        <div><img src={mammi}/></div>
        <div><img src={butterfly}/></div>
        <div><img src={raksha}/></div>
        <div><img src={warli}/></div>
         <div><img src={dreamy}/></div>
        <div><img src={jasmine}/></div>
        <div><img src={clock}/></div>
        <div><img src={him}/></div>
        <div><img src={meet}/></div>
        <div><img src={ocean}/></div>
        <div><img src={dance}/></div>
        <div><img src={cute}/></div>
        <div><img src={madhubani}/></div>

   </div>
    </div>
  );
};

export default Photos;


