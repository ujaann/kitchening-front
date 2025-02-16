import React, { useState } from 'react';
import Profile from './user/Profile';
import YourRecipes from './user/YourRecipes';
import Settings from './user/Settings';
import Sidebar from '../global/Sidebar';

const UserDashboard = () => {
   

    return (
        <div className='flex gap-8'>
            <Sidebar/>
            <div>
                Main data
            </div>
        </div>
    );
};

export default UserDashboard;