import './Grid.scss';

export const Grid = ({gridProps}) => {

    function getClassName(rowType, divider) {
        if (divider === 'none') {
            if (rowType === 'Column') {
                return 'gridColumn';
            }
            else return 'gridRow';
        }
        else if (divider === 'gray') {
            if (rowType === 'Column') {
                return 'gridColumnWithGrayDivider';
            }
            else return 'gridRowWithGrayDivider';
        }
        else if (rowType === 'Column') {
            return 'gridColumnWithDivider';
        }
        else return 'gridRowWithDivider';        
    }
    
    return (
        <div className='gridContainer'>
            <div className='grid'>
                {gridProps?.map((item, index) => (
                    <div key={index} className={getClassName(item.rowType, item.divider)}>
                        {item.titleType !== 'small' && <h1 className='leftCol'>{item.title}</h1>}
                        {item.titleType === 'small' && <h2 className='leftCol'>{item.title}</h2>}
                        {item.content && <div className='rightCol'>{item.content}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid;