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
                <Typography>
                    It was important to our District Commisioner, Andy Lewis that in a COVID appopriate way that Beavers had a Christingle to mark
                    the start of the seasonal period.

                    As Duty group for Chorley Distict, Euxton Methodist had the privelliage and honor of hosting this years Christingle 
                    at St Georges church in Chorley.

                    My role in this was to make the Christingle as special and fun for the Beavers as possible with the help
                    and support of my fellow leaders and District Team. 

                </Typography>
                <Typography>
                    For part 1, I lead a discussion on what a computer was and where could we find them.
                    The young people mentioned that a computer is something like a laptop or tablet but then we
                    talked about smaller computers such as those found in washing machines or traffic lights, etc.
                </Typography>
                <Typography>
                    For the next part, the young people designed a character (aka sprite) for a game they came up with
                    and got an opportunity to share this with the other Beavers.Their ideas were really good and very creative: )
                </Typography>
                <Typography>
                    For the final part, I provided a grid of 12 squares on a A4 sheet of paper and provided cutout objects such as a
                    Scout, Rocks, camp fire and tent and challenged the beavers to use compass points to direct their team member
                    from the starting point, around the obsticles to arrive at either the fire or tent.

                    Once the instructions were written out, another Beaver would follow the instructions to make sure that they worked.

                    They all really enjoyed it and we as leaders had the pleasure of awarding the badges out.
                </Typography>
            </div>
        </Container>
    );

}

export default DistrictChristingleNews;