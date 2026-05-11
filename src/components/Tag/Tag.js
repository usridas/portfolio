import './Tag.scss';

export const Tag = ({type, text, iconBool}) => {
    return (
        <div className={`tag${type}`}>{text}</div>
    )
    
}
export default Tag;