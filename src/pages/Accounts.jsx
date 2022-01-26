import React from 'react';
import AccountNavbar from '../components/navbar/AccountNavBar';

const Accounts = () => {
  return (
    <div className='page-container'>
      <AccountNavbar/>
      This is the Account Page<br/>
      should we change this to the profile page? or settings?<br/>
      move the navbar to Home page
    </div>
  )
};

export default Accounts;
