import './Button.css'

interface ButtonProps {
    name: string;
    backgroundColor?: string
    textColor?: string
    links?: string
    onClick?: any;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ name, backgroundColor, textColor, onClick, links, className }) => {
    return (
        <div style={{backgroundColor: backgroundColor}} className={`Button mx-1 ${className}`} onClick={onClick}>
            <a style={{color: textColor}} href={links} className='my-0 BtnText'>
                {name}
            </a>
        </div>
    )
}

export default Button;