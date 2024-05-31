import '../Auth.css'
import Button from '../../../components/button/Button';
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext, useState } from 'react';
import Input from '../../../components/input/Input';

interface LoginProps {
    pageType: string;
}

export const Login: React.FC<LoginProps> = ({pageType}) => {
    const { Log } = useContext(AuthContext);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [stay, setStay] = useState<boolean>(false);

    const handleInput: { [key: string]: (value: string) => void } = {
        email: setEmail,
        password: setPassword,
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInput[event.target.id](event.target.value);
    }

    const handleStayChange = () => {
        setStay(!stay);
    };

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (email && password) {
            email.length > 0 && Log(email, password, stay);
        }
    };

    const Title = {
        text: {
            login: "Connecte toi !",
            loginPro: "Tu est un professionel ?"
        },
        desc: {
            login: "Ou crée ton compte si tu n'en as pas encore un !",
            loginPro: "Ou crée toi ton compte pro"
        },
        linkTo: {
            login: "/register",
            loginPro: "/pro/register"
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='Card d-flex col-4 align-items-center flex-column py-auto mx-auto'>
                <div className='CardTitle my-1'>
                    <h1> {Title.text[pageType as keyof typeof Title.text]} </h1>
                    <a href={Title.linkTo[pageType as keyof typeof Title.linkTo]}> {Title.desc[pageType as keyof typeof Title.desc]} </a>
                </div>
                
                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <Input id="email" title="Email" type="email" placeholder='Email' onChange={handleChange} value={email}></Input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <Input id="password" title='Mot de passe' type="password" placeholder='Mot de passe' onChange={handleChange} value={password}></Input>
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
