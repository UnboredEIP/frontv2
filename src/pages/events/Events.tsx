import { useContext } from "react";
import "./Events.css";
import { AuthContext } from "../../contexts/AuthContext";
import { EventContext } from "../../contexts/EventContext";
import Selectbar from "../../components/selectbar/Selectbar";

interface Picture {
    id: string;
    userId: string;
}

interface Event {
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

export const Events = () => {
    let { user } = useContext(AuthContext);
    let { eventsList } = useContext(EventContext);

    const handleSelect = (selectedItem: string) => {
        console.log("Selected item:", selectedItem);
    };

    return (
        <div>
            Hello {user.users.username}
            <div className="col-10 mb-4 align-center mx-auto justify-content-center">
                <Selectbar onSelect={handleSelect} />
            </div>
            <div className="col-9 d-flex mx-auto flex-wrap justify-content-center">
                {eventsList.map((item: Event, index: number) => {
                    return (
                        <div key={index} className="d-flex flex-column Card col-3 mx-1 my-1">
                            <div className="CardTitle">{item.name}</div>
                            <div className="flex-grow-1 d-flex justify-content-center">
                                <img className="test align-self-center" src={"https://x2025unbored786979363000.francecentral.cloudapp.azure.com/getImage?imageName=" + item.pictures[0].id} alt=""/>
                            </div>
                            <div className="">
                                <i className="fa-solid fa-location-dot"></i>
                                <p> {item.address} </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Events;
