import { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const EventContext = createContext<any>(null);

interface Picture {
    id: string;
    userId: string;
}

export interface Event {
    _id: string;
    name: string;
    address: string;
    description: string;
    defaultPicture: any[];
    rate: any[];
    pictures: Picture[];
    categories: string[];
    start_date: string;
    creator: string;
    end_date: string;
    private: boolean;
    participants: any[];
    price: string;
    age: string;
    phone: string;
    email: string;
    end: boolean;
    rewards: any[];
}

const EventProvider: FC<{children: React.ReactNode}> = ({ children }) => {
    const { user, authToken } = useContext(AuthContext);
    const navigation = useNavigate();
    const location = useLocation();
    const [eventsList, setEventsList] = useState<Event[]>([]);
    const [loading, setLoading] = useState(false);
    const pageSize = 6;
    const [total, setTotal] = useState<number>(0);
    const query = new URLSearchParams(location.search);
    const initialPage = Number(query.get("page")) || 1;
    const [page, setPage] = useState<number>(initialPage);

    const GetAllEvents = useCallback(async () => {
        if (!authToken) {
            return;
        }
        setLoading(true)
        try {
            const response = await fetch(`https://x2025unbored786979363000.francecentral.cloudapp.azure.com/events/lists/all?pageSize=${pageSize}&page=${page}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + authToken.authToken
                },
            });
            const data = await response.json();
            setEventsList(data.events);
            setTotal(data.total);
        } catch (error) {
            console.error("Failed to fetch events", error);
        } finally {
            setLoading(false);
        }
    }, [authToken, page]);

    useEffect(() => {
        if (user) { 
            GetAllEvents();
        }
    }, [GetAllEvents, user]); 

    useEffect(() => {
        if (user && location.pathname === '/events') {
            navigation(`?page=${page}`);
        }
    }, [page, navigation, location.pathname, user]);

    const contextData = {
        eventsList,
        page,
        pageSize,
        setPage,
        loading,
        total
    };

    return (
        <EventContext.Provider value={contextData}>
            {children}
        </EventContext.Provider>
    );
}

export default EventProvider;
