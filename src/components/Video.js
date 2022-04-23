import React from 'react';
import { Ratio } from 'react-bootstrap';

export default props => {
    return (
        <Ratio aspectRatio={ 50 }>
            <video
                playsInline
                controls
                // poster="/assets/poster.png"
                src={require('../Video/video.mp4').default}
            />
        </Ratio>

    );
};

//src\Video\WhatsApp Video 2022-04-20 at 11.14.50 AM.mp4