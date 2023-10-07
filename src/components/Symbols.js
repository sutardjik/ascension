import { useEffect } from 'react';

function Symbols(){
  const gotolotus = (event) => {
      event.target.innerHTML='🪷';
  };
    
  const lotustodiamond = (event) => {
    if (event.target.innerHTML !== '🪷') {
      event.target.innerHTML = '💠';
    }
  };
    
  const gotowindchime=(event)=>{
    event.target.innerHTML='🎐';
  };
    
  const wctodiamond=(event)=>{
    if(event.target.innerHTML!=='🎐'){
      event.target.innerHTML='💠';
    };
  };
    
  const gototelescope=(event)=>{
    event.target.innerHTML='🔭';
  };
    
  const tstodiamond=(event)=>{
    if(event.target.innerHTML!=='🔭'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotomagicwand=(event)=>{
    event.target.innerHTML='🪄';
  };
    
  const mwtodiamond=(event)=>{
    if(event.target.innerHTML!=='🪄'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotoheart=(event)=>{
    event.target.innerHTML='🫀';
  };
    
  const hearttodiamond=(event)=>{
    if(event.target.innerHTML!=='🫀'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotohg=(event)=>{
    event.target.innerHTML='⌛';
  };
    
  const hgtodiamond=(event)=>{
    if(event.target.innerHTML!=='⌛'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotostar=(event)=>{
    event.target.innerHTML='🌠';
  };
    
  const startodiamond=(event)=>{
    if(event.target.innerHTML!=='🌠'){
      event.target.innerHTML='💠';
    };
  };
    
  const gotocandle=(event)=>{
    event.target.innerHTML='🕯️';
  };
    
  const candletodiamond=(event)=>{
    if(event.target.innerHTML!=='🕯️'){
      event.target.innerHTML='💠';
    };
  };
    
  useEffect(()=>{
    const l = document.getElementsByClassName('lotus');
    const wc = document.getElementsByClassName('windchime');
    const ts = document.getElementsByClassName('telescope');
    const mw = document.getElementsByClassName('magicwand');
    const h = document.getElementsByClassName('heart');
    const hg = document.getElementsByClassName('hourglass');
    const s = document.getElementsByClassName('star');
    const c = document.getElementsByClassName('candle');
    
    for(let i=0; i<l.length; i++) {
      l[i].addEventListener('mouseover', gotolotus);
      l[i].addEventListener('mouseout', lotustodiamond);
    }
      
    for(let j=0; j<wc.length; j++){
      wc[j].addEventListener('mouseover',gotowindchime);
      wc[j].addEventListener('mouseout',wctodiamond);
    }
      
    for(let k=0; k<ts.length; k++){
      ts[k].addEventListener('mouseover',gototelescope);
      ts[k].addEventListener('mouseout',tstodiamond);
    }
      
    for(let l=0; l<mw.length; l++){
      mw[l].addEventListener('mouseover',gotomagicwand);
      mw[l].addEventListener('mouseout',mwtodiamond);
    }
      
    for(let m=0; m<h.length; m++){
      h[m].addEventListener('mouseover',gotoheart);
      h[m].addEventListener('mouseout',hearttodiamond);
    }
      
    for(let n=0; n<hg.length; n++){
      hg[n].addEventListener('mouseover',gotohg);
      hg[n].addEventListener('mouseout',hgtodiamond);
    }
      
    for(let o=0; o<s.length; o++){
      s[o].addEventListener('mouseover',gotostar);
      s[o].addEventListener('mouseout',startodiamond);
    }
      
    for(let p=0; p<c.length; p++){
      c[p].addEventListener('mouseover',gotocandle);
      c[p].addEventListener('mouseout',candletodiamond);
    }
  }, []);
}

export default Symbols;