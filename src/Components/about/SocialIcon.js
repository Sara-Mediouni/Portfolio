import React from 'react';

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
           <i aria-hidden="true">{icon}</i> 
        </a>
    );
}

export default SocialIcon;