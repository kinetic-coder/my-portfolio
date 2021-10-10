import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardMedia';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';

import './NewsPreview.css';

// Properties include:
// description
// subject
// subjectImage
// nextActionText
// nextAction

export default function NewsPreview (props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.subjectImage}
          alt="green iguana"
        />
        <CardContent tooltip={props.description} tooltipsStyle="primary">
          <Typography  variant="h5" component="div" className="newsTitle">
            {props.subject}
          </Typography>
          <Typography variant="body2" className="newsDescription">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.nextAction}>
          {props.nextActionText}
        </Button>
      </CardActions>
    </Card>
  );
}
