import './Button.css';

export const Button = ({type, text, link}) => {
    return (
        <a className={`buttonContainer${type}`} href={link} target='blank'>{text}</a>
    )
    
}
export default Button;