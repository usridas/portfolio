import './Button.scss';

export const Button = ({type, text, link, onClick, fullWidth=false}) => {
    if (link) {
        return (
            <a tabIndex={0} className={`buttonContainer${type} hover-target`} style={{width: fullWidth ? 'stretch' : 'min-content'}} href={link} target='blank'>{text}</a>
        )
    }
    else {
        return (
            <button tabIndex={0} className={`buttonContainer${type} hover-target`} style={{width: fullWidth ? 'stretch' : 'min-content'}} onClick={onClick} onKeyDown={(event)=>{if (event.key === 'Enter') {onClick()}}} target='blank'>{text}</button>
        )
    }
    
}
export default Button;