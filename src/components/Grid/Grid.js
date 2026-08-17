import { useScreenResolution } from '../../utils/ScreenSize.tsx';
import './Grid.scss';

export const Grid = ({gridProps, gridMargin, maxWidth='996px', snap=false, indexStart=0}) => {
    
    const { isXSmall, isSmall } = useScreenResolution();
    const isMobileVar = isXSmall || isSmall;

    function getClassName(rowType, divider, snap) {
        if (divider === 'none') {
            if (rowType === 'Column') {
                if (snap) {
                    return 'gridColumnSnap';
                }
                return 'gridColumn';
            }
            else if (snap) {
                return 'gridRowSnap';
            }
            else return 'gridRow';
        }
        else if (rowType === 'Column') {
            if (snap) {
                    return 'gridColumnWithDividerSnap';
                }
            return 'gridColumnWithDivider';
        }
        else if (snap) {
            return 'gridRowWithDividerSnap';
        }
        return 'gridRowWithDivider';        
    }
    
    return (
        <div className='gridContainer' style={{margin: gridMargin ? gridMargin : isMobileVar ? '24px' : '40px', maxWidth: maxWidth}}>
            <div className='grid'>
                {gridProps?.map((item, index) => (
                    <div key={index} id={`slide-${indexStart + index}`} className={getClassName(item.rowType, item.divider, snap)}>
                        {item.title && <h1 className={item.rowType === 'Column' ? 'topRow' : snap ? 'leftColSnap' : 'leftCol'}>{item.title}</h1>}
                        {item.titleContent && <div className={item.rowType === 'Column' ? 'topRow' : snap ? 'leftColSnap' : 'leftCol'}>{item.titleContent}</div>}
                        {item.content && <div className={item.rowType === 'Column' ? 'bottomRow' : snap ? 'rightColSnap' : 'rightCol'}>{item.content}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid;