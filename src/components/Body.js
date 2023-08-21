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
          <h2>You loved me&nbsp;&nbsp;💠</h2>
          <br />
          <h2><em>You loved me </em>&nbsp;&nbsp;💠</h2>
          <br />
          <h2>For a moment&nbsp;&nbsp;💠</h2>
          <br />
          <h2>
            Just a&nbsp;&nbsp;💠
            <span className="emphasize"><br />moment in time</span>
          </h2>
          <br />
          <h2>
            What<br />happens<br />
            next?&nbsp;&nbsp;💠
          </h2>
          <br />
          <h2><span className="emphasize">Regardless</span>&nbsp;&nbsp;💠</h2>
          <br />
          <h2>You loved me&nbsp;&nbsp;💠</h2>
          <br />
          <h2>For a moment&nbsp;&nbsp;💠<br />you <em>did</em></h2>
          <br />
          <h2>And I <em>die</em><br />to stay here&nbsp;&nbsp;💠</h2>
          <br />
          <h2>
            I can <span className="emphasize">still</span><br />taste the memory
            <br />of&nbsp;&nbsp;you&nbsp;&nbsp;💠<br />on my tongue
          </h2>
          <br />
          <h2>
            When we stood<br />so &nbsp;
            <span className="emphasize">close</span>&nbsp;&nbsp;💠
          </h2>
          <br />
          <h2>
            I could hear&nbsp;&nbsp;💠<br />your mind &nbsp;<span className="script">running</span>
          </h2>
          <br />
          <h2>
            With the &nbsp;&nbsp;&nbsp;<span className="script">speed</span><br />of
            someone <br />being in &nbsp;<span className="script">love</span>&nbsp;&nbsp;💠
          </h2>
          <br />
          <h2>
            So &nbsp;<span className="emphasize">why</span>&nbsp;&nbsp;💠<br />can’t I stay
            here?
          </h2>
          <br />
          <h2>Barely <em>alive</em>&nbsp;&nbsp;💠 <br />barely <em>awake</em></h2>
          <br />
          <h2>In my bed<br />too &nbsp;<span className="emphasize">big</span>&nbsp;&nbsp;💠</h2>
          <br />
          <h2>And I stay&nbsp;&nbsp;💠<br />on my side</h2>
          <br />
          <h2>Wondering if it was<br /><span className="emphasize">real</span>&nbsp;&nbsp;💠</h2>
          <br />
          <h2>Am I the &nbsp;<span className="script">dream</span>&nbsp;&nbsp;💠</h2>
          <br />
          <h2>
            Or is this <br /><span className="emphasize">how it is?</span>&nbsp;&nbsp;<span className="sign"><Link to="/lotusgarden">🪷</Link></span>
          </h2>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Body;