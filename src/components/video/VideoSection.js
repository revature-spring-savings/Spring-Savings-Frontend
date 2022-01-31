import React from 'react';
import { ButtonVideo } from './ButtonVideo';
import './VideoSection.css';

function VideoSection() {
    return (
        <div className='video-container'>
            <video src="./assets/video/video.mp4" autoPlay loop muted></video>
            <div className='textOverlay'>
                <h1 className='videoH1'>Spring Savings</h1>
                <p className='videoP'>Let's Spark it up with some Spring Savings!</p>
                <div className='video-btns'>
                    <ButtonVideo 
                        className='btns' buttonStyle='btn--outline' 
                        buttonSize='btn--large'>
                        Thyme to Bank!
                    </ButtonVideo>
                </div>
            </div>
        </div>
    )
}

export default VideoSection