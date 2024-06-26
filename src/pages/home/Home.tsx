import Button from "../../components/button/Button";

import "./Home.css"


export const Home = () => {
    return (
        <div className="col-12">
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
        </div>
    )
}

export default Home;