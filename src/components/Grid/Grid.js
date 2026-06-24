import './Grid.scss';
import { useScreenResolution } from '../../utils/ScreenSize.tsx';

export const Grid = ({gridProps, removeBio=false}) => {
    const { isLarge, isMedium } = useScreenResolution();
    
    return (
        <div className='gridContainer'>
            <div className="grid">
                {gridProps?.map((item, index) => (
                    <div key={index} className='row'>
                        {(isLarge || isMedium) && <h1>{item.title}</h1>}
                        {!isLarge && !isMedium && <h2>{item.title}</h2>}
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid;