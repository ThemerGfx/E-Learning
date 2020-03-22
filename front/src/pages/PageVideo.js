import React from 'react';
import { Player } from 'video-react';

import "./PageVideo.css"; 



const PageVideo = () => {
    return (
        
      
        <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
       
        
      );


}

export default PageVideo
  
