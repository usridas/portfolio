import './Tag.css';

export const Tag = ({type, text, iconBool}) => {
    return (
        <div className={`tag${type}`}>{text}</div>
    )
    
}
export default Tag;