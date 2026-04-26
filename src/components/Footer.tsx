import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/khawajaacode" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/kh-babar-naseer/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Designed & built by <a href="https://github.com/khawajaacode" target="_blank" rel="noreferrer">Khawaja Babar Naseer</a> with 💜</p>
    </footer>
  );
}

export default Footer;
