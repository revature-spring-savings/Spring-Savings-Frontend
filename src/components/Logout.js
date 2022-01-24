import React from 'react';
import Navbar from '../../../Navbar';
import { Button } from '../../../buttons/Button';
import './Logout.css';
import '../../../../App.css';
import LogoutVideo from '../../../videos/LogoutVideo';
function Logout() {
    // sessionStorage.setItem('name', newName);
    // sessionStorage.setItem('username', uname);
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('username');
    return (
       <>
       <Navbar/>
       <LogoutVideo/>
       <Button/>
       </>
    )
}

export default Logout