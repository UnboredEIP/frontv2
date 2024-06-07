import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Selectbar from "../../components/selectbar/Selectbar";
import Button from "../../components/button/Button";


export const Home = () => {
    let { user } = useContext(AuthContext)
    
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
                    <div className="col-9 d-flex mx-auto justify-content-between">
                        <div className="col-3 Card">
                            <div className='CardTitle my-1'>
                                coucou
                            </div>
                        </div>
                        <div className="col-2 Card">
                            coucou
                        </div>

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