import React, { useState } from 'react';

const Settings = () => {
    const [settings, setSettings] = useState({
        theme: 'light',
        notifications: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to save settings can be added here
        console.log('Settings saved:', settings);
    };

    return (
        <div>
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Theme:
                        <select name="theme" value={settings.theme} onChange={handleChange}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleChange}
                        />
                        Enable Notifications
                    </label>
                </div>
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;