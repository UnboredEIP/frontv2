import { useState } from "react";
import MultiSelect from "./multiSelector/Multi";

interface Option {
    label: string;
    value: string;
}

interface InputProps {
    type: string;
    placeholder?: string;
    title?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    handleMultiSelectChange?: (selectedOptions: Option[]) => void;
    value?: any;
    id?: string;
    selectOptions?: string[];
    multiSelectOptions?: any;
    actualSelectOptions?: any;
}

export const Input: React.FC<InputProps> = ({type, placeholder, title, onChange, value, id, selectOptions, multiSelectOptions, actualSelectOptions, handleMultiSelectChange}) => {
    const [viewable, setViewable] = useState<boolean>(false);

    if (type === 'multiple' && handleMultiSelectChange) {
        return (
            <div>
                <p className="my-0"> {title} </p>
                <MultiSelect options={multiSelectOptions} onChange={handleMultiSelectChange} actualSelectedOptions={actualSelectOptions} />
            </div>
        )
    }

    if (type === "selector") {
        return (
            <div>
                <p className="my-0"> {title} </p>
                <select id="sexe" className="CardSelect text-center mb-2" onChange={onChange} value={value}>
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