import { useState } from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    title?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    value?: any;
    id?: string;
    selectOptions?: string[];
}

export const  Input: React.FC<InputProps> = ({type, placeholder, title, onChange, value, id, selectOptions}) => {
    const [viewable, setViewable] = useState<boolean>(false);
    if (type === "selector") {
        return (
            <div>
                <p className="my-0"> {title} </p>
                <select id="sexe" className="CardSelect text-center" onChange={onChange} value={value}>
                    {selectOptions?.map((item, index) => {
                        return (
                            <option value={item} key={index}> {item} </option>
                        )
                    })}
                </select>
            </div>
        )
    }
    if (type === "password") {
        const handleIconClick = () => {
            setViewable(!viewable);
        };

        return (
            <div>
                <p className='my-0'> {title} </p>
                <div className='position-relative'>
                    <input id={id} className='CardInput mb-2' type={viewable === true ? 'text' : type}  placeholder={placeholder} onChange={onChange} value={value} >
                    </input>
                    <i className={`fa-solid ${viewable === true ? 'fa-eye-slash' : 'fa-eye'} passwordIcon`} onClick={handleIconClick}> </i>
                </div>
            </div>
        )
    }
    return (
        <div>
            <p className="my-0"> { title } </p>
            <input id={id} className="CardInput mb-2" type={type} placeholder={placeholder} onChange={onChange} value={value}>
            </input>
        </div>
    )
}

export default Input;