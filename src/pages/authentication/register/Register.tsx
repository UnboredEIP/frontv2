import '../Auth.css'
import Button from '../../../components/button/Button';
import { useContext, useState } from 'react';
import Input from '../../../components/input/Input';
import { AuthContext } from '../../../contexts/AuthContext';

interface RegisterProps {
    pageType: string;
}

export const Register: React.FC<RegisterProps> = ({pageType}) => {
    const { Register } = useContext(AuthContext);

    const Title = {
        text: {
            register: "Crée toi un compte !",
            registerPro: "Crée toi un compte professionel !",
        },
        desc: {
            register: "Ou connecte-toi si tu en a déjà un",
            registerPro: "Ou connecte-toi si tu en a déjà un"
        },
        linkTo: {
            register: "login",
            registerPro: "login"
        },
        registerLink: {
            register: "/register",
            registerPro: "/register/pro"
        }
    }

    const selectOptions = ["Homme", "Femme", "Autre"];

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [sexe, setSexe] = useState<string>('Homme');

    const handleInput: { [key: string]: any } = {
        email: setEmail,
        password: setPassword,
        username: setUsername,
        sexe: setSexe,
        date: setDate
    }

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (username && email && password && date && sexe) {
            Register(username, email, password, date, sexe, Title.registerLink[pageType as keyof typeof Title.registerLink])
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInput[event.target.id](event.target.value);
    }


    return (
        <div className='d-flex justify-content-center'>
            <div className='Card d-flex col-4 align-items-center flex-column py-auto mx-auto'>
                <div className='CardTitle my-1'>
                    <h1> {Title.text[pageType as keyof typeof Title.text]} </h1>
                    <a href={Title.linkTo[pageType as keyof typeof Title.linkTo]}> {Title.desc[pageType as keyof typeof Title.desc]} </a>
                </div>
                
                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <Input id="username" title="Nom d'utilisateur" type="text" placeholder="Nom d'utilisateur" onChange={handleChange} value={username}></Input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <Input id="email" title="Email" type="email" placeholder='Email' onChange={handleChange} value={email}></Input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <Input id="password" title='Mot de passe' type="password" placeholder='Mot de passe' onChange={handleChange} value={password}></Input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <Input id="date" title='Date de naissance' type="date" placeholder='Date de naissance' onChange={handleChange} value={date}></Input>
                </div>

                <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                    <Input id="sexe" type="selector" title="Sexe" onChange={handleChange} selectOptions={selectOptions} value={sexe}></Input>
                </div>


                <div className='d-flex flex-row w-100 mb-2'>
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
