import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './Home';
import Login from './Login';
import RegistrationForm from './Register';
import SocialEvent from './Socialevent';
import WeddingEvent from './Wedding';
import CorporateEvent from './Corporateevent';
import SportingEvent from './Sportingevent';
import AboutUs from './About';
import Contact from './Contact';
import Concerts from './Conserts';
import HolidayEvent from './Holiday';
    
    const route = createBrowserRouter([
      
            
            
                {path: '/', element: <Navbar/>},
                {path: '/Login', element:<Login/> },
                {path: '/Register', element:<RegistrationForm/>},
                {path: '/Socialevent', element:<SocialEvent/>},
                {path: '/Weddingevent', element:<WeddingEvent/>},
                {path: '/Corporate', element:<CorporateEvent/>},
                {path: '/Sporting', element:<SportingEvent/>},
                {path: '/About', element:<AboutUs/>},
                {path: '/Contact', element:<Contact/>},
                {path: '/Concerts', element:<Concerts/>},
                {path: '/Holi', element:<HolidayEvent/>}
                
           
       
        
        
    ]);


export default route;