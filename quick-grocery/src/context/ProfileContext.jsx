import { createContext, useState } from 'react';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
    const [profile, setProfile] = useState();
    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

export { ProfileContext, ProfileProvider };