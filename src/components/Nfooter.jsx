import React from 'react';
import { Container, Typography, List, ListItem, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px' }}>
      <Container>
        <Typography variant="h5" gutterBottom style={{color:"#FF4B91"}}>
          We are the No.1 Ranking Event Organizers in Coimbatore.We deliver our best & We make sure you get the best.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <List className="social-icons" style={{ display: 'flex', padding: 0 }}>
              <ListItem>
                <Link href="https://www.facebook.com/" target="_blank" color="inherit">
                  Facebook
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.linkedin.com/" target="_blank" color="inherit">
                  LinkedIn
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.instagram.com/" target="_blank" color="inherit">
                  Instagram
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{marginRight:"200px"}}>
              Services We Offer
            </Typography>
            <List className="services-list" style={{ padding: 0 }}>
              <ListItem>Gallery</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Feedback</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Reach Us (International)
            </Typography>
            <Typography variant="body1" gutterBottom>
              Event Office : 2nd floor Surya Garden,RS Puram,Coimbatore- 641 002,Tamil Nadu.
            </Typography>
            <Typography variant="body1" gutterBottom>
              +91 99941 *****
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:sundar16pandian@gmail.com" color="inherit">
                srrisanjay9704@gmail.com
              </Link>
            </Typography>
          </Grid>
          
        </Grid>
        
      </Container>
      <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#333', color: '', textAlign: 'center' }}>
        <p>&copy; 2023 Your Event Management. All rights reserved.</p>
      </footer>
    </footer>
  );
};

export default Footer;
