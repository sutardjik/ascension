import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Body(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return(
        <div>
    <div className="content">
      <h1>Ascension</h1>
      <h2>You loved me&nbsp;&nbsp;💠</h2>
      <br />
      <h2><em>You loved me </em>&nbsp;&nbsp;💠</h2>
      <br />
      <h2>For a moment&nbsp;&nbsp;💠</h2>
      <br />
      <h2>
        Just a&nbsp;&nbsp;💠
        <em><br />moment in time</em>
      </h2>
      <br />
      <h2>
        What<br />happens<br />
        next?&nbsp;&nbsp;💠
      </h2>
      <br />
      <h2><em>Regardless</em>&nbsp;&nbsp;💠</h2>
      <br />
      <h2>You loved me&nbsp;&nbsp;💠</h2>
      <br />
      <h2>For a moment&nbsp;&nbsp;💠<br />you <em>did</em></h2>
      <br />
      <h2>And I <em>die</em><br />to stay here&nbsp;&nbsp;💠</h2>
      <br />
      <h2>
        I can &nbsp;<span className="stretch">sstill</span><br />taste the memory
        <br />of&nbsp;&nbsp;you&nbsp;&nbsp;💠<br />on my tongue
      </h2>
      <br />
      <h2>
        When<br />we<br />stood<br />so<br />
        <span className="stretch">cclose</span>&nbsp;&nbsp;💠
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
        So &nbsp;<span className="stretch">whyy</span>&nbsp;&nbsp;💠<br />can’t I stay
        here?
      </h2>
      <br />
      <h2>Barely <em>alive</em>&nbsp;&nbsp;💠 <br />barely <em>awake</em></h2>
      <br />
      <h2>In my bed<br />too &nbsp;<span className="stretch">bbigg</span>&nbsp;&nbsp;💠</h2>
      <br />
      <h2>And I stay&nbsp;&nbsp;💠<br />on my side</h2>
      <br />
      <h2>Wondering if it was<br /><span className="stretch">rreal</span>&nbsp;&nbsp;💠</h2>
      <br />
      <h2>Am I the &nbsp;<span className="script">dream</span>&nbsp;&nbsp;💠</h2>
      <br />
      <h2>
        Or is this <br /><em>how it is?</em>&nbsp;&nbsp;<span className="sign"><Link to="/lotusgarden">🪷</Link></span>
      </h2>
      <br />
      <br />
      <br />
    </div>
        </div>
    );
}
export default Body;