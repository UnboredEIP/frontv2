import '../Auth.css'
import Button from '../../../components/button/Button';
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext, useState } from 'react';

export const Login = () => {
    const { Log } = useContext(AuthContext);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [stay, setStay] = useState<boolean>(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleStayChange = () => {
        setStay(!stay);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (email && password) {
            email.length > 0 && Log(email, password, stay);
        }
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='Card d-flex col-4 align-items-center flex-column py-auto mx-auto'>
                <div className='CardTitle my-1'>
                    <h1> Connecte toi ! </h1>
                    <a href="/register"> Ou crée ton compte si tu n'en as pas encore </a>
                </div>
                
                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <p className='my-0'>Email</p>
                    <input id="email" className='CardInput mb-2' type="email" placeholder='Email' onChange={handleEmailChange} value={email}></input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <p className='my-0'> Mot de passe </p>
                    <input id="password" className='CardInput mb-2' type="password" placeholder='Mot de passe' onChange={handlePasswordChange} value={password} ></input>
                </div>


                <div className='d-flex flex-row w-100 mb-2 px-2'>
                    <div className='col-3 text-start w-50'>
                        <input type="checkbox" onChange={handleStayChange}/>
                        Se souvenir de moi
                    </div>
                    <div className='col-3 text-end w-50'>
                        Mot de passe oublié ?
                    </div>
                </div>
                <Button className="mb-1" onClick={handleClick} name="Se connecter" backgroundColor='#e1604d' textColor='white'/>
            </div>
        </div>
    )
}

export default Login;
