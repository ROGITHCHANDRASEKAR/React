import React from 'react';
import { Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import './Eventbox.css';
const EventBox = ({ title, description }) => {
  return (
    <Grid item>
      <Card className="Card" style={{ marginBottom: '20px' }}>
          <CardActionArea>
        <CardContent >
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default EventBox;
