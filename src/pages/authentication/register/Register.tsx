import '../Auth.css'
import Button from '../../../components/button/Button';

export const Register = () => {
    const handleClick = async () => {
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='Card d-flex col-4 align-items-center flex-column py-auto mx-auto'>
                <div className='CardTitle my-1'>
                    <h1> Crée toi un compte ! </h1>
                    <a href="/login"> Ou connecte-toi si tu en a déjà un </a>
                </div>
                
                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <p className='my-0'>Nom d'utilisateur</p>
                    <input className='CardInput mb-2' placeholder="Nom d'utilisateur"></input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <p className='my-0'>Email</p>
                    <input className='CardInput mb-2' placeholder='Email'></input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <p className='my-0'> Mot de passe </p>
                    <input className='CardInput mb-2' type="password" placeholder='Mot de passe '></input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <p className='my-0'> Date de naissance </p>
                    <input className='CardInput mb-2' type="date" placeholder='Date de naissance'></input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <p className='my-0'> Sexe </p>
                    <select className='CardSelect text-center'>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>


                <div className='d-flex flex-row w-100 mb-2'>
                    {/* <div className='col-3 text-start w-50'>
                        <input type="checkbox" />
                        Se souvenir de moi
                    </div> */}
                    <div className='col-3 text-end w-100'>
                        Mot de passe oublié ?
                    </div>
                </div>
                <Button className="mb-1" onClick={handleClick} name="Se connecter" backgroundColor='#e1604d' textColor='white'/>
            </div>
        </div>
    )
}

export default Register;
