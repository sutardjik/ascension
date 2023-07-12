import React from 'react';
import HeadLotusGarden from './components/HeadLotusGarden';
import BodyLotusGarden from './components/BodyLotusGarden';
import './home.css';
function LotusGarden(){
    return(
        <div>
            <HeadLotusGarden/>
            <BodyLotusGarden/>
        </div>
    );
}
export default LotusGarden;