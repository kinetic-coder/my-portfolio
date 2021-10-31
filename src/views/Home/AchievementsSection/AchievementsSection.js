import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid } from '@mui/material';

import NewsPreview from '../../../components/NewsPreview';

const AchievementsSection = () => {

    const [achievements, setAchievements] = useState([]);
    const history = useHistory();

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
    }, []);

    const navigateTo = (url) => {
        history.push(url);
    }

    return (
        <>
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
        </>
    )
}

export default AchievementsSection;