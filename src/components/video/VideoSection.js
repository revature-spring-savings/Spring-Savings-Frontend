import React from 'react';
import { ButtonVideo } from './ButtonVideo';
import './VideoSection.css';
import { useAuth0 } from "@auth0/auth0-react";







function VideoSection() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='video-container'>
            <video src="./assets/video/video.mp4" autoPlay loop muted></video>
            <div className='textOverlay'>
                <h1 className='videoH1'>Spring Banking</h1>
                <p className='videoP'>Let's Spark it up with some Spring Banking!</p>
                <div className='video-btns'>
                    <ButtonVideo 
                        className='btns' buttonStyle='btn--outline' 
                        buttonSize='btn--large'>
                        Thyme to Bank!
                    </ButtonVideo>
                </div>
                <div>
            <button onClick={() => loginWithRedirect()}>Log In</button>;

                </div>
            </div>
        </div>
    )
}

export default VideoSection