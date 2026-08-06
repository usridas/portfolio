import './Grid.scss';

export const Grid = ({gridProps, gridMargin='0px 24px'}) => {

    function getClassName(rowType, divider) {
        if (divider === 'none') {
            if (rowType === 'Column') {
                return 'gridColumn';
            }
            else return 'gridRow';
        }
        else if (rowType === 'Column') {
            return 'gridColumnWithDivider';
        }
        else return 'gridRowWithDivider';        
    }
    
    return (
        <div className='gridContainer' style={{margin: gridMargin}}>
            <div className='grid'>
                {gridProps?.map((item, index) => (
                    <div key={index} className={getClassName(item.rowType, item.divider)}>
                        {item.titleType !== 'small' && item.title && <h1 className={item.rowType === 'Column' ? 'topRow' : 'leftCol'}>{item.title}</h1>}
                        {item.titleType === 'small' && item.title && <h2 className={item.rowType === 'Column' ? 'topRow' : 'leftCol'}>{item.title}</h2>}
                        {item.content && <div className={item.rowType === 'Column' ? 'bottomRow' : 'rightCol'}>{item.content}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid;