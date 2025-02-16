import React from 'react';

const Profile = ({ user, onEdit }) => {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {"user"}</p>
            <p>Email: {"user.email"}</p>
            <button onClick={onEdit}>Edit Profile</button>
        </div>
    );
};

export default Profile;