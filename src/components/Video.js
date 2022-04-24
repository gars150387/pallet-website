import React from 'react';
import video from '../Video/video.mp4'

export const VideoWorkResult = ()=> {
    return (
            <video className='videoHomePage'
                src={ video }
                autoPlay
                loop 
                muted
            />
    );
};

