import React from 'react';

import './Creepy.css';
import { CreepyButtonConst } from './CreepyButton';

function Creepy() {
    return (
        <div className='piggy'>
        <div className='piggy-video-container'>
            {/* <img src="../../../public/assets/images/haunted.jpg"></img> */}
            <div className='ctextOverlay'>
                <h1 className='cvideoH1'>Scaaarrry Piggy Time!!!</h1>
                <p className='cvideoP'>It's super creepy!</p>
                <p className='cvideoP'>for real. </p>
                <div className='video-btns'>
                    <CreepyButtonConst 
                        className='cbtns' buttonStyle='cbtn--outline' 
                        buttonSize='cbtn--large'>
                        Return to home
                    </CreepyButtonConst>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Creepy;