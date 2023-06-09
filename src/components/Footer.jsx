import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles.css';

const Footer = () => {
  return (
    <div className='footer bg-flashWhite'>
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/thembamasilela/"><LinkedInIcon /></a>
          <a href="https://github.com/ThembaMasilela"><GitHubIcon /></a>
          <a href="mailto:thembanmasilela@gmail.com"><EmailIcon /></a>
      </div>
      <p> &copy; Themba Masilela 2023</p>
    </div>
  )
}

export default Footer