import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Event } from "../../../contexts/EventContext"

import TEST from "./Error.png"

interface EventCardProps {
    item: Event;
}

const EventCard: React.FC<EventCardProps> = ({ item }) => {
    const tooltip = (name: string) => (
        <Tooltip id="tooltip">
            {name}
        </Tooltip>
    );

    return (
        <div className="d-flex flex-column Card col-3 mx-1 my-1 h-50">
            <OverlayTrigger placement="top" overlay={tooltip(item.name)}>
                <div className="CardTitleEvent mb-2">{item.name}</div>
            </OverlayTrigger>
            <div className="flex-grow-1 d-flex justify-content-center mb-2">
                <img className="test align-self-center" 
                src={"https://x2025unbored786979363000.francecentral.cloudapp.azure.com/getImage?imageName=" + item?.pictures[0]?.id} 
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = TEST;
                }}
                alt=""/>
            </div>
        </div>
    );
};

export default EventCard;
