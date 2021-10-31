import React from 'react';
import { useHistory } from 'react-router-dom';

import MenuAppBar from '../../components/MenuAppBar';

import '../standard.css';

import { Container, Grid, Typography } from '@material-ui/core';
import NewsPreview from '../../components/NewsPreview';

const Home = () => {

    const history = useHistory();

    // Used to create a teaser with a set limit and then include dot dot dot :)
    const createTeaser = (description, length) => {
        let newTeaser = description.toString();
        newTeaser = newTeaser.substring(0, length)
        newTeaser += '...';
        return newTeaser;
    }

    const STANDARD_TEASER_LENGTH = 100;

    const newsItems = [
        { 
            subject: 'The Boys Network', 
            description: createTeaser('Monthly mentoring session with highschool lads from year 11 and year 12', STANDARD_TEASER_LENGTH), 
            img: 'static/images/TheBoysNetwork.jpg', 
            pageUrl: '/TheBoysNetwork' 
        },
        { 
            subject: 'Scouts Digital Makes Badge', 
            description: createTeaser('Scouts night talking about computers in the real world and a basic programming night.',STANDARD_TEASER_LENGTH), 
            img: 'static/images/scouts.jpg', 
            pageUrl: '/DigitalMakersNews' 
        },
        { 
            subject: 'Every</body> Event - hands on workshop', 
            description: createTeaser('I had the pleasure of providing a beginners workshop on web development in partnership with Code Nation. This session focused on the basics of HTML including the history of the web as we known it today.',STANDARD_TEASER_LENGTH), 
            img: 'static/images/conference.jpg', 
            pageUrl: '/DigitalMakersNews' 
        },
        { 
            subject: 'The.Girl.Code Event - host', 
            description: createTeaser('As part of the The.Girl.Code, I hosted the event which was held at Code Nation. The evening comprised a number of great talks followed by a Q &amp; A session with a selection of experienced professionals.',STANDARD_TEASER_LENGTH), 
            img: 'static/images/conference.jpg', 
            pageUrl: '/DigitalMakersNews' 
        },
        { 
            subject: 'Code Club', 
            description: createTeaser('Provided a basic web development class covering the basics of HTML, JavaScript and CSS to a group of 30 people who had never coded before.', STANDARD_TEASER_LENGTH), 
            img: 'static/images/code-school.jpg', 
            pageUrl: '/code-club' 
        },
        { 
            subject: 'Projects', 
            description: createTeaser('Sample applications I have created in my spare time.', STANDARD_TEASER_LENGTH), 
            img: 'static/images/home-work.jpg', 
            pageUrl: '/projects ' 
        },
    ]

    const navigateTo = (url) => {
        history.push(url);
    }

    return (
        <Container maxWidth="lg">
            <MenuAppBar title="My Portfolio" />
            <div className='page-body'>
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
                <Grid container spacing={10} className="news-grid">
                    {
                        newsItems.map((newsItem) => 
                            <Grid item xs={6}>
                                <NewsPreview
                                    subjectImage={newsItem.img}
                                    subject={newsItem.subject}
                                    description={newsItem.description}
                                    nextActionText="read more"
                                    nextAction={() => navigateTo(newsItem.pageUrl)}
                                    tooltip={newsItem.description}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </div>
            <div className='page-footer'>
                Page created by Oliver Bullock
            </div>
        </Container>

    )
}

export default Home;
