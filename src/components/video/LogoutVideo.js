import React from 'react';
import { ButtonVideo } from './ButtonVideo'
import './VideoSection.css';

function LogoutVideo() {
    return (
        <div className='video-container'>
            <video src="./assets/video/videolog.mp4" autoPlay loop muted></video>
            <div className='textOverlay'>
                <h1 className='videoH1'>Saving money like my cookies!</h1>
                <p className='videoP'>Checkmate said my wallet.</p>
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