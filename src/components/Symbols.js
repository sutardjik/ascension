import { useEffect } from 'react';

function Symbols(){
  const gotosakura = (event) => {
      event.target.innerHTML='🌸';
  };
    
  const sakuratodiamond = (event) => {
    if (event.target.innerHTML !== '🌸') {
      event.target.innerHTML = '💠';
    }
  };
    
  const gotowindchime = (event) => {
    event.target.innerHTML='🎐';
  };
    
  const windchimetodiamond = (event) => {
    if(event.target.innerHTML!=='🎐'){
      event.target.innerHTML='💠';
    };
  };
    
  const gototelescope = (event) => {
    event.target.innerHTML='🔭';
  };
    
  const telescopetodiamond = (event) => {
    if(event.target.innerHTML!=='🔭'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotomagicwand = (event) => {
    event.target.innerHTML='🪄';
  };
    
  const magicwandtodiamond = (event) => {
    if(event.target.innerHTML!=='🪄'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotobutterfly = (event) => {
    event.target.innerHTML='🦋';
  };
    
  const butterflytodiamond = (event) => {
    if(event.target.innerHTML!=='🦋'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotohourglass = (event) => {
    event.target.innerHTML='⌛';
  };
    
  const hourglasstodiamond = (event) => {
    if(event.target.innerHTML!=='⌛'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotomirror = (event) => {
    event.target.innerHTML='🪞';
  };
    
  const mirrortodiamond = (event) => {
    if(event.target.innerHTML!=='🪞'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotocandle = (event) => {
    event.target.innerHTML='🕯️';
  };
    
  const candletodiamond = (event) => {
    if(event.target.innerHTML!=='🕯️'){
      event.target.innerHTML='💠';
    };
  };
    
  useEffect(()=>{
    const sakura = document.getElementsByClassName('sakura');
    const mirror = document.getElementsByClassName('mirror');
    const windchime = document.getElementsByClassName('windchime');
    const telescope = document.getElementsByClassName('telescope');
    const magicwand = document.getElementsByClassName('magicwand');
    const butterfly = document.getElementsByClassName('butterfly');
    const hourglass = document.getElementsByClassName('hourglass');
    const candle = document.getElementsByClassName('candle');
    
    for(let i=0; i<sakura.length; i++) {
      sakura[i].addEventListener('mouseover', gotosakura);
      sakura[i].addEventListener('mouseout', sakuratodiamond);
    }
      
    for(let j=0; j<windchime.length; j++){
      windchime[j].addEventListener('mouseover',gotowindchime);
      windchime[j].addEventListener('mouseout',windchimetodiamond);
    }
      
    for(let k=0; k<telescope.length; k++){
      telescope[k].addEventListener('mouseover',gototelescope);
      telescope[k].addEventListener('mouseout',telescopetodiamond);
    }
      
    for(let l=0; l<magicwand.length; l++){
      magicwand[l].addEventListener('mouseover',gotomagicwand);
      magicwand[l].addEventListener('mouseout',magicwandtodiamond);
    }
      
    for(let m=0; m<butterfly.length; m++){
      butterfly[m].addEventListener('mouseover',gotobutterfly);
      butterfly[m].addEventListener('mouseout',butterflytodiamond);
    }
      
    for(let n=0; n<hourglass.length; n++){
      hourglass[n].addEventListener('mouseover',gotohourglass);
      hourglass[n].addEventListener('mouseout',hourglasstodiamond);
    }
      
    for(let o=0; o<mirror.length; o++){
      mirror[o].addEventListener('mouseover',gotomirror);
      mirror[o].addEventListener('mouseout',mirrortodiamond);
    }
      
    for(let p=0; p<candle.length; p++){
      candle[p].addEventListener('mouseover',gotocandle);
      candle[p].addEventListener('mouseout',candletodiamond);
    }
  }, []);
}

export default Symbols;