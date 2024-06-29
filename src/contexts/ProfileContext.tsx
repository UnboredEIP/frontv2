import React, { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const ProfileContext = createContext<any>(null);

const ProfileProvider: FC<{children: React.ReactNode}> = ({children}) => {
    
    const {authToken} = useContext(AuthContext);
    const [userInfos, setUserInfos] = useState<any>(null)

    const Profile = useCallback(async () => {
        try {
            await fetch('https://x2025unbored786979363000.francecentral.cloudapp.azure.com/profile', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+ authToken.authToken
                },
            }).then(response => response.json())
            .then(data => {
                setUserInfos(data.user);
            })
        } catch (error) {
            console.error("Failed to fetch profile", error)
        }
    }, [authToken])

    const UpdateProfile = async (test: any) => {
        try {
            await fetch('https://x2025unbored786979363000.francecentral.cloudapp.azure.com/profile/update', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+ authToken.authToken
                },
                body: JSON.stringify(test)
            }).then(response => response.json())
            .then(data => {
                setUserInfos(data.user);
            })
        } catch (error) {
            console.error("Failed to fetch profile", error)
        }
    }

    useEffect(() => {
        if (authToken) {
            Profile()
        }
    }, [Profile, authToken])

    const contextData = {
        userInfos,
        UpdateProfile,
    }

    return (
        <ProfileContext.Provider value={contextData}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;