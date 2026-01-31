import './Tag.css';
import 'material-icons/iconfont/material-icons.css';

export const Tag = ({type, text}) => {
    let icon = <span class="material-icons-outlined">design_services</span>;
    switch (type) {
        case 'Design':
            icon = <span class="material-icons-outlined">design_services</span>;
            break;
        case 'Software':
            icon = <span class="material-icons-outlined">code</span>;
            break;
        case 'Research':
        default:
            icon = <span class="material-icons-outlined">science</span>;
            break;
    }
    return (
        <div className={`tag${type}`}>{icon}{text}</div>
    )
    
}
export default Tag;