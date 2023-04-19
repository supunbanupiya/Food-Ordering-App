import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/> <Twitter/> <Facebook /> <LinkedInIcon/>
        </div>
        <p> &Copy rights 2023</p>
    </div>
  );
}

export default Footer