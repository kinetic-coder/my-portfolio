import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import MenuAppBar from '../../../components/MenuAppBar';

import '../../standard.css';

import { Container, Grid, Typography } from '@material-ui/core';
import NewsPreview from '../../../components/NewsPreview';

const Achievements = () => {

    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        console.log("Use Effect has been triggered");

        const headerOptions = {
            'Access-Control-Allow-Origin': '*'
        }

        fetch('https://ob-portfolio-api.herokuapp.com/achievements', headerOptions)
            .then(async response => {
                const data = await response.json();
                setAchievements(data);
            })
            .catch(err => console.log('CL:' + err));
    }, [])

    const history = useHistory();

    // Used to create a teaser with a set limit and then include dot dot dot :)
    const createTeaser = (description, length) => {
        let newTeaser = description.toString();
        newTeaser = newTeaser.substring(0, length)
        newTeaser += '...';
        return newTeaser;
    }

    const STANDARD_TEASER_LENGTH = 100;

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
                        achievements.map((item, index) =>
                            <Grid item xs={6}>
                                <NewsPreview
                                    key={index}
                                    subjectImage={item.img}
                                    subject={item.subject}
                                    description={item.description}
                                    nextActionText="read more"
                                    nextAction={() => navigateTo(item.pageUrl)}
                                    tooltip={item.description}
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

export default Achievements;
