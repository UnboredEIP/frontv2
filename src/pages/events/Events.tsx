import React, { useContext } from "react";
import "./Events.css";
import { AuthContext } from "../../contexts/AuthContext";
import { EventContext } from "../../contexts/EventContext";
import Selectbar from "../../components/selectbar/Selectbar";
import EventCard from "./eventsCard/EventCard"; 
import Pagination from "../../components/pagination/Pagination";

export const Events = () => {
    const { user } = useContext(AuthContext);
    const { eventsList } = useContext(EventContext);

    const handleSelect = (selectedItem: string) => {
        console.log("Selected item:", selectedItem);
    };

    return (
        <div>
            Hello {user?.users?.username}
            <div className="col-10 mb-4 align-center mx-auto justify-content-center">
                <Selectbar onSelect={handleSelect} />
            </div>
            <div className="col-9 d-flex mx-auto flex-wrap justify-content-center pb-3">
                {eventsList.map((item: any, index: any) => (
                    <EventCard key={index} item={item} />
                ))}
            </div>
            <div className="col-10 mb-4 align-center mx-auto justify-content-center">
                <Pagination />
            </div>
        </div>
    );
};

export default Events;