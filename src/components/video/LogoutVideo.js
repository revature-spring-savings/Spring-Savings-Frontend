import React from 'react';
import { ButtonVideo } from './ButtonVideo'
import './VideoSection.css';

function LogoutVideo() {
    return (
        <div className='video-container'>
            <video src="./assets/video/videolog.mp4" autoPlay loop muted></video>
            <div className='textOverlay'>
                <h1 className='videoH1'>Banking doesn't have to be a tough cookie!</h1>
                <p className='videoP'>FOMO no more with our mobile app and save with Spring Savings!</p>
                <p className='videoP'>Just add a glass of milk. </p>
                <div className='video-btns'>
                    <ButtonVideo 
                        className='btns' buttonStyle='btn--outline' 
                        buttonSize='btn--large'>
                        Return to home
                    </ButtonVideo>
                </div>
            </div>
        </div>
    )
}

export default LogoutVideo;