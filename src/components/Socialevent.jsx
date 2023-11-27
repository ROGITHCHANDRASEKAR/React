// SocialEvent.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Navbar from './Navbar';
import EventBox from './Eventbox';
import Footer from './Nfooter';
import { useEffect } from 'react';
const SocialEvent = () => {
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
    <div style={{ minHeight: '10vh' }}>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: 'rgba(126,126,126,0.9)', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  }}>
        <Typography variant="h4" gutterBottom >
          Social Events
        </Typography>
        <Typography variant="body5" paragraph>
          Explore and plan your social events with ease. From birthday parties to anniversary celebrations, we've got you covered.
        </Typography>
        <Grid container spacing={1}>
          <EventBox title="Anniversary Celebrations" description="Make your anniversaries memorable with our special event arrangements." />
          <EventBox title="Graduation Parties" description="Celebrate academic achievements with unforgettable graduation parties." />
          <EventBox title="Birthday Parties" description="Celebrate the joyous occasion of birthdays with our expert event planning services." />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default SocialEvent;
