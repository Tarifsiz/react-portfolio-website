import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQFGY6SyCmBj7w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710409452712?e=1775088000&v=beta&t=hr1UEc-g_40QcaJWSX-n_FIyQR-dHX_4zCBMvSh9OlY" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/tarifsiz" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/enderyurdakoc/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ender Yurdakoc</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/tarifsiz" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/enderyurdakoc/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;