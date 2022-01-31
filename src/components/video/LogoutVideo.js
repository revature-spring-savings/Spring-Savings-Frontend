import React from 'react';
import { ButtonVideo } from './ButtonVideo'
import './VideoSection.css';

function LogoutVideo() {
    return (
        <div className='video-container'>
            <video src="./assets/video/videolog.mp4" autoPlay loop muted></video>
            <div className='textOverlay'>
                <h1 className='videoH1'>Wallet Got You in Checkmate? </h1>
                <h1 className='videoH1'>We can help.</h1>
                <p className='videoP'>Ditch FOMO and the hassle with Spring Savings!</p>
                
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