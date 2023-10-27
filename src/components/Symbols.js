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
    
  const gotobutterfly=(event)=>{
    event.target.innerHTML='🦋';
  };
    
  const butterflytodiamond=(event)=>{
    if(event.target.innerHTML!=='🦋'){
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
    
  const gotomirror=(event)=>{
    event.target.innerHTML='🪞';
  };
    
  const mirrortodiamond=(event)=>{
    if(event.target.innerHTML!=='🪞'){
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
    const l = document.getElementsByClassName('sakura');
    const m = document.getElementsByClassName('mirror');
    const wc = document.getElementsByClassName('windchime');
    const ts = document.getElementsByClassName('telescope');
    const mw = document.getElementsByClassName('magicwand');
    const b = document.getElementsByClassName('butterfly');
    const hg = document.getElementsByClassName('hourglass');
    const c = document.getElementsByClassName('candle');
    
    for(let i=0; i<l.length; i++) {
      l[i].addEventListener('mouseover', gotosakura);
      l[i].addEventListener('mouseout', sakuratodiamond);
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
      
    for(let m=0; m<b.length; m++){
      b[m].addEventListener('mouseover',gotobutterfly);
      b[m].addEventListener('mouseout',butterflytodiamond);
    }
      
    for(let n=0; n<hg.length; n++){
      hg[n].addEventListener('mouseover',gotohg);
      hg[n].addEventListener('mouseout',hgtodiamond);
    }
      
    for(let o=0; o<m.length; o++){
      m[o].addEventListener('mouseover',gotomirror);
      m[o].addEventListener('mouseout',mirrortodiamond);
    }
      
    for(let p=0; p<c.length; p++){
      c[p].addEventListener('mouseover',gotocandle);
      c[p].addEventListener('mouseout',candletodiamond);
    }
  }, []);
}

export default Symbols;