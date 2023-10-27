import React from 'react';
import HeadSakura from './components/HeadSakura';
import BodySakura from './components/BodySakura';
import './style.css';

function SakuraGarden(){
    return(
        <div>
            <HeadSakura/>
            <BodySakura/>
        </div>
    );
}

export default SakuraGarden;