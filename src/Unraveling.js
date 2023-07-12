import React from 'react';
import HeadUnraveling from './components/HeadUnraveling';
import BodyUnraveling from './components/BodyUnraveling';
import './home.css';
function Unraveling(){
    return(
        <div>
            <HeadUnraveling/>
            <BodyUnraveling/>
        </div>
    );
}
export default Unraveling;