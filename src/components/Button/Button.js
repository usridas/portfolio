import './Button.css';

export const Button = ({type, text, link, onClick}) => {
    if (link) {
        return (
            <a className={`buttonContainer${type}`} href={link} target='blank'>{text}</a>
        )
    }
    else {
        return (
            <a className={`buttonContainer${type}`} onClick={onClick} target='blank'>{text}</a>
        )
    }
    
}
export default Button;