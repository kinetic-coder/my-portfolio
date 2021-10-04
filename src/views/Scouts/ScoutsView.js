import React from 'react';

import IdeasByBadge from './sections/IdeasByBadge'
import AboutMe from './sections/AboutMe';
import Usefulresources from './sections/UsefulResources';

import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import MenuAppBar from '../../components/MenuAppBar';

const ScoutsView = () => {
    return (
        <Container maxWidth="lg">
            <MenuAppBar title="My Portfolio" />
            <div className='page-body'>
                <Avatar alt='Oliver Bullock' src="static/images/oliver-bullock-avatar.png" />

                <ul>
                    <li>
                        <AboutMe />
                    </li>
                    <li>
                        <IdeasByBadge />
                    </li>
                    <li>
                        <Usefulresources />
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default ScoutsView;