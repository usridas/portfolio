import './Button.scss';

export const Button = ({type, text, link, onClick}) => {
    if (link) {
        return (
            <a tabIndex={0} className={`buttonContainer${type}`} href={link} target='blank'>{text}</a>
        )
    }
    else {
        return (
            <button tabIndex={0} className={`buttonContainer${type}`} onClick={onClick} onKeyDown={(event)=>{if (event.key === 'Enter') {onClick()}}} target='blank'>{text}</button>
        )
    }
    
}
export default Button;