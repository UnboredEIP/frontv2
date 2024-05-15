import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export const Home = () => {
    let { user } = useContext(AuthContext)
    
    return (
        <div>
            { user ?
                <div>
                    stp
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
                    </div>
                    <div style={{height: "40vw"}} />
                </div>
            }
        </div>
    )
}

export default Home;