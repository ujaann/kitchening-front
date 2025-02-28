import React, { useState } from 'react';
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