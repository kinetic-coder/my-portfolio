import React from 'react';

import { Container, Avatar } from '@mui/material';
import MenuAppBar from '../../components/MenuAppBar';


const TheBoysNetworkView = () => {
    return (
        <Container maxWidth="lg">
        <MenuAppBar title="My Portfolio" />
        <div className='page-body'>
            <Avatar alt='Oliver Bullock' src="static/images/oliver-bullock-avatar.png" />

            {/* <ul>
                <li>
                    <AboutMe />
                </li>
                <li>
                    <IdeasByBadge />
                </li>
                <li>
                    <Usefulresources />
                </li>
            </ul> */}
        </div>
    </Container>
    );
}

export default TheBoysNetworkView;
