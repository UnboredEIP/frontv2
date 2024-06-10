import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Selectbar from "../../components/selectbar/Selectbar";
import Button from "../../components/button/Button";
import { EventContext } from "../../contexts/EventContext";

import "./Home.css"

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

interface Picture {
    id: string;
    userId: string;
}

export const Home = () => {
    let { user } = useContext(AuthContext)
    let {eventsList, GetImage} = useContext(EventContext)

    console.log(eventsList)

    const handleSelect = (selectedItem: string) => {
        console.log("Selected item:", selectedItem);
    };

    return (
        <div className="col-12">
            { user ?
                <div>
                    Hello {user.users.username}

                    <div className="col-10 mb-4 align-center mx-auto justify-content-center">
                        <Selectbar onSelect={handleSelect} />
                    </div>
                    <div className="col-9 d-flex mx-auto flex-wrap justify-content-center">
                        {eventsList.map((item: Event, index: number) => {
                            return (
                                <div key={index} className="d-flex flex-column Card col-3 mx-1 my-1">
                                    <div className="CardTitle">
                                        {item.name}
                                    </div>
                                    <div className="flex-grow-1 d-flex justify-content-center">
                                        <img className="test align-self-center" src={"https://x2025unbored786979363000.francecentral.cloudapp.azure.com/getImage?imageName="+item.pictures[0].id} alt="" />
                                    </div>
                                    <div className="">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <p> {item.address} </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                :
                <div className="d-flex justify-content-center">
                    <div className="Card d-flex col-4 align-items-center flex-column py-auto mx-auto">
                        <div className='CardTitle my-1'>
                            <h1> Bienvenue sur UnBored </h1>
                            <p> L'application qui te satisfera de l'utilisation
                                de ton temps libre tout en prenant du fun
                                N'hésite pas à nous suivre sur instagram juste
                                en dessous pour être au courant de l'avancé du projet !
                            </p>
                        </div>
                        <div style={{height: "20vw"}} />
                        <Button backgroundColor="white" links="https://www.instagram.com/unbored_paris/" newPage={true} name="N'hésitez pas à nous suivre sur instagram !"></Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home;