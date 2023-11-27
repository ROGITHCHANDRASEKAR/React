// AboutUs.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Nfooter';
import { useEffect } from 'react';
const AboutUs = () => {
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
    <div>
      <Navbar />
      <Container maxWidth="xl" style={{ marginTop: '20px', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img src="https://wallpapercave.com/wp/wp8250276.jpg" alt="Event Image" style={{ width: '100%', height: 'auto' }} />
            
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom color="#F5E8C7">
              What Do We Do :
            </Typography>
            <Typography variant="body2" color="white">
              <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                <li><h3>Weddings and Destination Weddings</h3></li>
                <li><h3>Social Events</h3></li>
                <li><h3>Film Festivals</h3></li>
                <li><h3>Event Travel Services</h3></li>
                <li><h3>Exhibitions Stall Designing</h3></li>
                <li><h3>Corporate Calendar Events</h3></li>
                <li><h3>Event Marketing – Outdoor Media, Radio, Mall Display, Product Branding</h3></li>
                <li><h3>Brand Affiliations & Acquisitions</h3></li>
                <li><h3>Historical Events</h3></li>
                <li><h3>Marathons</h3></li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body8" paragraph>
          Feel free to reach out to us for all your event planning needs. We look forward to turning your visions into reality!
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
