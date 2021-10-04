import React from 'react';

import IdeasByBadge from './sections/IdeasByBadge'
import AboutMe from './sections/AboutMe';
import Usefulresources from './sections/UsefulResources';

const ScoutsView = () => {
    return (
        <div>
            <ul>
                <li>
                    <AboutMe/>
                </li>
                <li>
                    <IdeasByBadge/>
                </li>
                <li>
                    <Usefulresources/>
                </li>
            </ul>
        </div>
    )
}

export default ScoutsView;