import React from 'react';

import MenuAppBar from '../../components/MenuAppBar';

import AchievementsSection from './AchievementsSection/AchievementsSection';

import '../standard.css';

import { Container, Typography } from '@material-ui/core';


const Home = () => {

    return (
        <Container maxWidth="lg">
            <MenuAppBar title="My Portfolio" />
            <img src="static/images/oliver-bullock-avatar.png" alt="author" style={{ width: '15%', height: '15%' }} />
            <Typography variant="h3">
                Oliver Bullock
            </Typography>
            <Typography variant="h5">
                Software Engineering Team Leader
            </Typography>
            <Typography variant="h5" color="light blue">
                Welcome to my portfolio site. I will have put this together to share
                some of my achievements, interests and projects.
            </Typography>
            <AchievementsSection />
            <div className='page-footer'>
                Page created by Oliver Bullock
            </div>
        </Container>
    )
}

export default Home;
