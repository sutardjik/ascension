import React from 'react';
import { Helmet } from 'react-helmet';
function Head(){
    return(
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="noindex, nofollow" />
            <Helmet>
                <title>Ascension</title>
            </Helmet>
        </div>
    )
}
export default Head;