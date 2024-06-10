import { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const EventContext = createContext<any>(null);

const EventProvider: FC<{children: React.ReactNode}> = ({ children }) => {
    const { user, authToken } = useContext(AuthContext);
    const [eventsList, setEventsList] = useState<any>([]);

    const GetAllEvents = useCallback(async () => {
        if (!authToken) {
            return;
        }
    
        try {
            const response = await fetch("https://x2025unbored786979363000.francecentral.cloudapp.azure.com/events/lists", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + authToken.authToken
                },
            });
            const data = await response.json();
            setEventsList(data.events);
        } catch (error) {
            console.error("Failed to fetch events", error);
        }
    }, [authToken]);

    useEffect(() => {
        if (user) { 
            GetAllEvents();
        }
    }, [GetAllEvents, user]); 

    const contextData = {
        eventsList,
    };

    return (
        <EventContext.Provider value={contextData}>
            {children}
        </EventContext.Provider>
    );
}

export default EventProvider;
