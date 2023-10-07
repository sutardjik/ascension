import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Symbols from "./Symbols";

function BodyLotusGarden(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div>
      <div className="content">
      <Symbols/>
        <div className="content-container">
          <h1>Welcome, dear internet traveler.</h1>
          <h2 id="desc">
            You must be tired from your journey.<br />Let the unraveling begin.
          </h2>
          <div className="diamonds">
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
          </div>
          <div className="diamonds">
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="windchime" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
          </div>
          <div className="diamonds">
            <h2 className="telescope" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
          </div>
          <div className="diamonds">
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="heart" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
          </div>
          <div className="diamonds">
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="magicwand" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
          </div>
          <div className="diamonds">
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="hourglass" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
          </div>
          <div className="diamonds">
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="star" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
          </div>
          <div className="diamonds">
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="candle" id="emoji">💠</h2>
          </div>
          <div className="diamonds">
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
            <h2 className="lotus" id="emoji">💠</h2>
          </div>
          <br />
          <h2 id="desc">
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
    </div>
  );
}

export default BodyLotusGarden;