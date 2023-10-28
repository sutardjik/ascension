import React from 'react';
import HeadGarden from './components/HeadGarden';
import BodyGarden from './components/BodyGarden';
import './style.css';

function Garden(){
    return(
        <div>
            <HeadGarden/>
            <BodyGarden/>
        </div>
    );
}

export default Garden;