import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Body(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div>
      <div className="content">
        <div className="content-container">
          <span className="link"><h1><a href="https://sarahkinsley.lnk.to/Ascension">Ascension</a></h1></span>
          <h2 id="hidden">You loved me&nbsp;&nbsp;💠</h2>
          <br />
          <h2 id="hidden"><em>You loved me </em>&nbsp;&nbsp;💠</h2>
          <br />
          <h2 id="hidden">For a moment&nbsp;&nbsp;💠</h2>
          <br />
          <h2 id="hidden">
            Just a&nbsp;&nbsp;💠
            <span className="emphasize"><br />moment in time</span>
          </h2>
          <br />
          <h2 id="hidden">
            What<br />happens<br />
            next?&nbsp;&nbsp;💠
          </h2>
          <br />
          <h2 id="hidden"><span className="emphasize">Regardless</span>&nbsp;&nbsp;💠</h2>
          <br />
          <h2 id="hidden">You loved me&nbsp;&nbsp;💠</h2>
          <br />
          <h2 id="hidden">For a moment&nbsp;&nbsp;💠<br />you <em>did</em></h2>
          <br />
          <h2 id="hidden">And I <em>die</em><br />to stay here&nbsp;&nbsp;💠</h2>
          <br />
          <h2 id="hidden">
            I can <span className="emphasize">still</span><br />taste the memory
            <br />of&nbsp;&nbsp;you&nbsp;&nbsp;💠<br />on my tongue
          </h2>
          <br />
          <h2 id="hidden">
            When we stood<br />so &nbsp;
            <span className="emphasize">close</span>&nbsp;&nbsp;💠
          </h2>
          <br />
          <h2 id="hidden">
            I could hear&nbsp;&nbsp;💠<br />your mind &nbsp;<span className="script">running</span>
          </h2>
          <br />
          <h2 id="hidden">
            With the &nbsp;&nbsp;&nbsp;<span className="script">speed</span><br />of
            someone <br />being in &nbsp;<span className="script">love</span>&nbsp;&nbsp;💠
          </h2>
          <br />
          <h2 id="hidden">
            So &nbsp;<span className="emphasize">why</span>&nbsp;&nbsp;💠<br />can’t I stay
            here?
          </h2>
          <br />
          <h2 id="hidden">Barely <em>alive</em>&nbsp;&nbsp;💠 <br />barely <em>awake</em></h2>
          <br />
          <h2 id="hidden">In my bed<br />too &nbsp;<span className="emphasize">big</span>&nbsp;&nbsp;💠</h2>
          <br />
          <h2 id="hidden">And I stay&nbsp;&nbsp;💠<br />on my side</h2>
          <br />
          <h2 id="hidden">Wondering if it was<br /><span className="emphasize">real</span>&nbsp;&nbsp;💠</h2>
          <br />
          <h2 id="hidden">Am I the &nbsp;<span className="script">dream</span>&nbsp;&nbsp;💠</h2>
          <br />
          <h2 id="hidden">
            Or is this <br /><span className="emphasize">how it is?</span>&nbsp;&nbsp;<span className="symbol"><Link to="/garden">🌸</Link></span>
          </h2>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Body;