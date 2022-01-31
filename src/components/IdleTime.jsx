import React, {useRef} from 'react';
import IdleTimer from 'react-idle-timer';
import { useNavigate } from "react-router-dom";

function IdleTime() {
  let navigate = useNavigate();

    const idleTimerRef = useRef(null)
        const onIdle = () => {
          navigate("/");
            console.log("user was idle so is not being logged out")
        }
  return <div>
<IdleTimer ref={idleTimerRef} timeout={15 * 60 * 1000} onIdle={onIdle} >


</IdleTimer>

  </div>;
}

export default IdleTime;
