import React from 'react';
import { useHistory } from 'react-router-dom';

import MenuAppBar from '../../components/MenuAppBar';

import '../standard.css';

import { Avatar, Container, Grid, Typography } from '@mui/material';
import NewsPreview from '../../components/NewsPreview/NewsPreview';

const Home = () => {

    const history = useHistory();

    const navigateTo = (url) => {
        history.push(url);        
    }

    return (

        <Container maxWidth="lg">
            <MenuAppBar title="My Portfolio"/>
            <div className='page-body'>
                <Avatar alt='Oliver Bullock' src="static/images/oliver-bullock-avatar.png" />
                <Typography>
                    I've created this site to provide a brief overview of all that I
                    have done or currently working on.
                </Typography>
                <Grid container spacing={10} className="news-grid">
                    <Grid item xs={6}>
                        <NewsPreview
                            subjectImage="static/images/scouts.jpg"
                            subject="Scouts Digital Makes Badge"
                            description="Scouts night talking about computers in the real world and a basic programming night."
                            nextActionText="read more"
                            nextAction={() => navigateTo('/DigitalMakersNews')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <NewsPreview
                            subjectImage="static/images/conference.jpg"
                            subject="Every</body> Event - hands on workshop"
                            description="I had the pleasure of providing a beginners workshop on web development 
                                        in partnership with Code Nation. This session focused on the basics of HTML 
                                        including the history of the web as we known it today."
                            nextActionText="read more"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <NewsPreview
                            subjectImage="static/images/code-school.jpg"
                            subject="The.Girl.Code Event - host"
                            description="As part of the The.Girl.Code, I hosted the event which was held at Code Nation. 
                                        The evening comprised a number of great talks followed by a Q &amp; A session 
                                        with a selection of experienced professionals."
                            nextActionText="read more"
                            nextAction=""
                        />
                    </Grid>

                    <Grid item xs={6}>
                    <NewsPreview
                            subjectImage="static/images/code-school.jpg"
                            subject="Code Club"
                            description="Provided a basic web development class covering the basics of HTML, JavaScript and CSS to 
                                        a group of 30 people who had never coded before."
                            nextActionText="read more"
                            nextAction=""
                        />
                    </Grid>
                </Grid>
            </div>
            <div className='page-footer'>
                Page created by Oliver Bullock
            </div>
        </Container>

    )
}

export default Home;