import { Typography, Container } from '@material-ui/core';
import React from 'react';

import MenuAppBar from '../../components/MenuAppBar';

const DigitalMakerNews = () => {
    return (
        <Container maxWidth="lg">
            <MenuAppBar title="My Portfolio"/>
            <div className='page-body'>
                <Typography variant="h3">
                    Digital Makers Badge
                </Typography>
                <Typography variant="body1">
                    I am an assistant Section Leader in my local Beaver group who are aged between 6 and 8 years old.Beavers have a
                    fantastic selection of badges that are designed to challenge the young people to get involved in various
                    skills, activities and adventures.One of these badges is the Digital Makers badge.
                </Typography>
                <Typography>
                    As part of the badge, Beavers are expected to complete the following:

                    <ol>
                        <li>
                            Show that you know what a computer is and understand
                            that there are lots of uses for digital technology in everyday life.
                        </li>
                        <li>
                            Create a graphic for a computer game, app, or website.
                        </li>
                        <li>
                            Write clear instructions for a computer or person to follow to complete a task.
                        </li>
                    </ol>

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

export default DigitalMakerNews;