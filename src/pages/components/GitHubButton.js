import React from 'react';
import "./gitHubButton.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function GitHubButton() { 
    
const githubLink = 'https://github.com/nicoborrges/toktik-clone';

function handleButtonClick() {
  window.open(githubLink, "_blank");
}

return (
  <button className="github-button" onClick={handleButtonClick}>
    Get on Github 
    <GitHubIcon className='github-icon'/>
  </button>
);
}

export default GitHubButton