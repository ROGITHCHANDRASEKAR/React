import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, ButtonGroup, InputBase, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <AppBar position="static" style={{ backgroundColor: '#AF2655' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              style={{ color: 'white' }}
            />
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <div style={{textAlign:"center",width:"950px",fontSize:"40px",fontFamily:"Copperplate"}}> Eventrra</div>
          </div>
          <ButtonGroup variant="text" aria-label="text button group" sx={{marginRight:"70px"}}>
            <Link to='/' color='inherit'><Typography color='white'><Button color="inherit" href="#home">Home</Button></Typography></Link>
            <Link to='/About' color='inherit'><Typography color='white'><Button color="inherit" href="#about">About</Button></Typography></Link>
            <Link to='/Contact' color='inherit'><Typography color='white'><Button color="inherit" href="#contact">Contact</Button></Typography></Link>
            <Link to='/Login'><Button variant="outlined" >Login</Button></Link>
          </ButtonGroup>
            <Avatar sx={{ bgcolor: 'deepOrange[500]' }}><AccountCircleOutlinedIcon/></Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
