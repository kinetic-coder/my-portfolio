import React from 'react';

import MenuAppBar from '../../components/MenuAppBar';

import '../standard.css';

import { Container, Typography, Avatar } from '@material-ui/core';

const Home = () => {
    return (

        <Container maxWidth="sm">
            <MenuAppBar/>
            <div className='page-body'>
                <Avatar alt='Oliver Bullock' src="static/images/oliver-bullock-avatar.png" />
                <Typography>
                    I've created this site to provide a brief overview of all that I 
                    have done or currently working on.
                </Typography>
            </div>
            <div className='page-footer'>
                Page created by Oliver Bullock
            </div>
        </Container>

    )
}

export default Home;