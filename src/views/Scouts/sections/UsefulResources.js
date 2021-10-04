import React from 'react';

import { Link } from '@material-ui/core';

const UsefulResources = () => {
    return (
        <div>
            Useful Resources
            <ul>
                <li>
                    <Link href="https://www.elizabethskitchendiary.co.uk/chocolate-orange-camp-fire-cake/">Chocolate Orange Camp Fire Cake</Link>
                </li>
                <li>
                    <Link href="https://bushcooking.com/recipes/bananas-in-coals/">Campfire Chocolate Bananas</Link>
                </li>
            </ul>
        </div>
    );
}

export default UsefulResources;