import './Grid.scss';
import { useScreenResolution } from '../../utils/ScreenSize.tsx';
import Button from '../Button/Button.js';
import Resume from '../../assets/documents/Resume.pdf';

export const Grid = ({gridProps, removeBio=false}) => {
    const { isLarge, isMedium } = useScreenResolution();
    
    return (
        <div className='gridContainer'>
            {(isLarge || isMedium) && !removeBio &&
            <div className='grid'>
                <div className="rowLast">
                    {(isLarge || isMedium) && <h1>{'ABOUT ME'}</h1>}
                    {!isLarge && !isMedium && <h2>{'ABOUT ME'}</h2>}
                    <div>
                        <p style={{marginBottom: '24px'}}>{'After graduating from my undergrad, I moved to San Diego, California to start work as a software engineer. Through work, I was able to explore my love for development, design, and management. I love the intersection between art and technology and aim to be a bridge between these two fields.\n\n​I am currently in a Masters program for User Experience Design and am searching for work in the UI/UX field.'}</p>
                        <Button type='Primary' text='VIEW MY RESUME' link={Resume}/>
                    </div>
                </div>
            </div>}
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