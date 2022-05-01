import React from 'react';
import videoPool from '../Video/pool.mp4'

export const VideoWorkResul2 = ()=> {
    return (
            <video className='videoHomePage'
                src={ videoPool }
                autoPlay
                loop 
                muted
            />
    );
};