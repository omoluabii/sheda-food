import React from 'react';
import UserShowcase from '../components/Homepage/UserShowcase'
import Account from '../components/Account/Account'
import Transaction from '../components/Transaction/Transaction'

const UserAccount = () => {
    return ( 
        <>
        <UserShowcase/>
        <Account/>
        <Transaction/>
        </>
     );
}
 
export default UserAccount;
