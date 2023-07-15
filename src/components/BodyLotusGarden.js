import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function BodyLotusGarden(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  const gotocrystalball=(event)=>{
    event.target.innerHTML='🔮';
  };
  const cbtodiamond=(event)=>{
    if(event.target.innerHTML!=='🔮'){
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
  const gotomoon=(event)=>{
    event.target.innerHTML='🌙';
  };
  const moontodiamond=(event)=>{
    if(event.target.innerHTML!=='🌙'){
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
  const gotogalaxy=(event)=>{
    event.target.innerHTML='🌌';
  };
  const galaxytodiamond=(event)=>{
    if(event.target.innerHTML!=='🌌'){
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
    const cb = document.getElementsByClassName('crystalball');
    const mw = document.getElementsByClassName('magicwand');
    const mn = document.getElementsByClassName('moon');
    const hg = document.getElementsByClassName('hourglass');
    const g = document.getElementsByClassName('galaxy');
    const c = document.getElementsByClassName('candle');
    for (let i = 0; i < l.length; i++) {
      l[i].addEventListener('mouseover', gotolotus);
      l[i].addEventListener('mouseout', lotustodiamond);
    }
    for(let j=0;j<wc.length;j++){
      wc[j].addEventListener('mouseover',gotowindchime);
      wc[j].addEventListener('mouseout',wctodiamond);
    }
    for(let k=0;k<cb.length;k++){
      cb[k].addEventListener('mouseover',gotocrystalball);
      cb[k].addEventListener('mouseout',cbtodiamond);
    }
    for(let l=0;l<mw.length;l++){
      mw[l].addEventListener('mouseover',gotomagicwand);
      mw[l].addEventListener('mouseout',mwtodiamond);
    }
    for(let m=0;m<mn.length;m++){
      mn[m].addEventListener('mouseover',gotomoon);
      mn[m].addEventListener('mouseout',moontodiamond);
    }
    for(let n=0;n<hg.length;n++){
      hg[n].addEventListener('mouseover',gotohg);
      hg[n].addEventListener('mouseout',hgtodiamond);
    }
    for(let o=0;o<g.length;o++){
      g[o].addEventListener('mouseover',gotogalaxy);
      g[o].addEventListener('mouseout',galaxytodiamond);
    }
    for(let p=0;p<c.length;p++){
      c[p].addEventListener('mouseover',gotocandle);
      c[p].addEventListener('mouseout',candletodiamond);
    }
  }, []);

    return(
        <div>
    <div class="content">
      <div class="content-container">
      <h1>Welcome, dear internet traveler.</h1>
      <h2 id="text">
        You must be tired from your journey.<br />Let the unraveling begin.&nbsp;&nbsp;🪷
      </h2>
        <div class="diamonds">
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="windchime" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
        </div>
        <div class="diamonds">
          <h2 class="crystalball" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
        </div>
        <div class="diamonds">
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="moon" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
        </div>
        <div class="diamonds">
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="magicwand" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
        </div>
        <div class="diamonds">
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="hourglass" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
        </div>
        <div class="diamonds">
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="galaxy" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
        </div>
        <div class="diamonds">
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="lotus" id="emoji">💠</h2>
          <h2 class="candle" id="emoji">💠</h2>
        </div>
      </div>
      <br />
      <h2 id="text">
        <span className="link"
          ><a href="https://sarahkinsley.komi.io/"
            >Lyrics by Sarah Kinsley</a
          ></span
        >
        <br />
        <span className="link">
          <a href="https://sutardjik.github.io/"
            >Built by &#x4b;&#x61;&#x72;&#x65;&#x6e;
            &#x53;&#x75;&#x74;&#x61;&#x72;&#x64;&#x6a;&#x69;</a
          ></span
        ><br />
        <span className="sign"><Link to="/">💠</Link></span>
      </h2>
      <br />
      <br />
    </div>
        </div>
    )
}
export default BodyLotusGarden;