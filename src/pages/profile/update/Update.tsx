import { useContext, useEffect, useState } from "react"
import Input from "../../../components/input/Input"
import { ProfileContext } from "../../../contexts/ProfileContext"
import Button from "../../../components/button/Button"

export const Update = () => {
    const { userInfos } = useContext(ProfileContext)

    console.log(userInfos)

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [sexe, setSexe] = useState<string>('Homme');
    const [initialDate, setInitialDate] = useState<string>('');

    const handleInput: { [key: string]: any } = {
        email: setEmail,
        password: setPassword,
        username: setUsername,
        sexe: setSexe,
        date: setDate
    }

    useEffect(() => {
        setUsername(userInfos?.username || '');
        setEmail(userInfos?.email || '');
        setDate(userInfos?.birthdate || '');
        setDate(userInfos?.birthdate)
        const formattedDate = userInfos?.birthdate ? new Date(userInfos.birthdate).toISOString().split('T')[0] : '';
        setDate(formattedDate);
        setInitialDate(formattedDate);
        setSexe(userInfos?.gender || 'Homme');
    }, [userInfos]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInput[event.target.id](event.target.value);
    }

    return (
        <div className="col-12">
            <div className="d-flex justify-content-center">
                <div className="Card d-flex col-4 align-items-center flex-column py-auto mx-auto">
                    <div className='CardTitle my-1'>
                        <h1> Modifie ton profile ! </h1>
                    </div>

                    <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                        <Input id="username" title="Nom d'utilisateur" type="text" placeholder="Nom d'utilisateur" onChange={handleChange} value={username}></Input>
                    </div>

                    <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                        <Input id="email" title="Email" type="email" placeholder="Email" onChange={handleChange} value={email} ></Input>
                    </div>

                    <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                        <Input id="password" title='Mot de passe' type="password" placeholder='Mot de passe'  onChange={handleChange} value={password} ></Input>
                    </div>

                    <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                        <Input id="confirmpassword" title='Confirmer Mot de passe' type="password" placeholder='Confirmer Mot de passe'></Input>
                    </div>

                    <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                        <Input id="sexe" type="selector" title="Sexe" selectOptions={["Homme", "Femme", "Autre"]}  onChange={handleChange} value={sexe} ></Input>
                    </div>

                    <div className='d-flex CardContent justify-content-start w-100 px-1 flex-column text-start'>
                        <Input id="date" title='Date de naissance' type="date" placeholder='Date de naissance'  onChange={handleChange} value={date}></Input>
                    </div>
                    <Button className="mb-1" disabled={ (username === userInfos?.username && email === userInfos?.email && sexe === userInfos?.gender && date === initialDate) || userInfos === null } name="Changer" backgroundColor='#e1604d' hooverColor="#DC5F00" shadowColor='#FFBF78' textColor='white'/>
                </div>
            </div>
        </div>
    )
}