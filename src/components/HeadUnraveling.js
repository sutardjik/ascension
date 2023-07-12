import React from 'react';
import { Helmet } from 'react-helmet';
function HeadUnraveling(){
    return(
        <div>
            <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <link rel="stylesheet" href="unraveling.css" />
    <Helmet>
        <title>Unraveling</title>
    </Helmet>
        </div>
    )
}
export default HeadUnraveling;