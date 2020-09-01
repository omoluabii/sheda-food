import React from 'react';
import UserNavbar from '../components/Navbar/UserNavbar'
import UserShowcase from '../components/Homepage/UserShowcase'
import Account from '../components/Account/Account'
import Transaction from '../components/Transaction/Transaction'

const UserAccount = () => {
    return ( 
        <>
        <UserNavbar/>
        <UserShowcase/>
        <Account/>
        <Transaction/>
        </>
     );
}
 
export default UserAccount;
