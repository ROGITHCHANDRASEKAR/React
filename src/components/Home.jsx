
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Avatar, Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import image from './event1.jpg'

// import eventImage from 'E:\\event-planning3-edited.jpg'; 
import EventBox from './Eventbox';
import Footer from './Nfooter';

import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    // Save original body background style
    const originalBackground = document.body.style.background;
    const originalBackgroundSize = document.body.style.backgroundSize;

    // Set new body background style
    document.body.style.background =
      "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9a17937-8c0d-4a78-b75b-d9847af5b606/dg7ssyw-c79f2b26-1b69-4633-8cd6-4256bcca93eb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YTE3OTM3LThjMGQtNGE3OC1iNzViLWQ5ODQ3YWY1YjYwNlwvZGc3c3N5dy1jNzlmMmIyNi0xYjY5LTQ2MzMtOGNkNi00MjU2YmNjYTkzZWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EO5d-A_h03cUY0q0fAsM8qlGBnPxiT2hybyl1VHA1ws) repeat";
    document.body.style.backgroundSize = "cover";

    // Reset to original body background style on component unmount
    return () => {
      document.body.style.background = originalBackground;
      document.body.style.backgroundSize = originalBackgroundSize;
    };
  }, []);
  return (
    <div style={{ minHeight: '10vh', backgroundColor: '' }}>
      <Navbar/>
      <Container width="md" style={{ marginTop: '20px', padding: '10px', backgroundColor: 'rgba(255,255,255,0.5) ', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
        
        <img src={image} alt="Event Management" style={{ width: '100%', marginBottom: '20px', borderRadius: '8px' }} />

        <Typography variant="h4" gutterBottom>
          Welcome to our Platform.
        </Typography>
        <Typography variant="body8" paragraph>
          Plan and book your events with ease.
        </Typography>
        <Typography variant="body1" paragraph>
          <h2><center>Book our services and make your Event Unforgettable!</center></h2>
        </Typography>
        <Grid sx = {{padding : '50px'}} container rowSpacing={2} columnSpacing={3} columnGap={5} alignItems={'center'} justifyContent={'space-around'} >
          <Link to='/Socialevent'>
            <Button>

            <EventBox title="Social Event" description="Birthday parties,Anniversary celebrations,Graduation parties" />
            </Button>
            </Link>
          <Link to='/Weddingevent'><Button><EventBox title="Wedding" description="Ceremony,Reception,Engagement party,Bridal shower etc.." /></Button></Link>
          <Link to='/Corporate'><Button><EventBox title="Corporate Events" description="Conferences, Seminars, Workshops, Product launches etc.." /></Button></Link>
          <Link to='/Sporting'><Button><EventBox title="Sporting Events" description="Tournaments, Cricket Matches, Sports day events and etc.." /></Button></Link>
          <Link to='/Concerts'><Button><EventBox title="Concerts and Performances" description="Music concerts., Dance performances, Classical music etc.." /></Button></Link>
          <Link to='/Holi'><Button><EventBox title="Holiday Events" description="Christmas parties,New Year's Eve celebrations, Diwali etc.." /></Button></Link>
        </Grid>
      </Container>
      <Footer/>
      
    </div>
  );
};

export default Home;
