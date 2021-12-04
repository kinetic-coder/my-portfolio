import { Typography, Container } from '@material-ui/core';
import React from 'react';

import MenuAppBar from '../../components/MenuAppBar';

const DistrictChristingleNews = () => {
    return (
        <Container maxWidth="lg">
            <MenuAppBar title="My Portfolio"/>
            <div className='page-body'>
                <Typography variant="h3">
                    Chorley District Christingle - 2nd December 2021
                </Typography>
                
                <Typography variant="body1">
                    I am an assistant Section Leader in my local Beaver group who are aged between 6 and 8 years old. COVID has restricted
                    what the Scouts are able to do. This has not stopped our group who have embraced technology providing kids with all sorts
                    of fun activities from scavanger hunts, quizes, cooking sessions and celebrating St Andrews day creating bagpipes out of
                    paper and making "lovely" music together :).
                </Typography>

                <Typography variant="body1">
                    It was important to our District Commisioner, Andy Lewis that in a COVID appopriate way that Beavers had a Christingle to mark
                    the start of the seasonal period.

                    As Duty group for Chorley Distict, Euxton Methodist had the privelliage and honor of hosting this years Christingle 
                    at St Georges church in Chorley.

                    My role in this was to make the Christingle as special and fun for the Beavers as possible with the help
                    and support of my fellow leaders and District Team. 
                </Typography>

                <Typography variant="body1">
                    I worked with the Chorley District team and my colleagues at Euxton Methodist Beavers section to plan,
                    confirm and make the service work.
                </Typography>
            </div>
        </Container>
    );

}

export default DistrictChristingleNews;