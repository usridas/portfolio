import './ProjectGrid.scss';
import { useScreenResolution } from '../../utils/ScreenSize.tsx';
import Button from '../Button/Button.js';
import Resume from '../../assets/documents/Resume.pdf';

export const ProjectGrid = ({gridProps, removeBio=false}) => {
    const { isLarge, isMedium } = useScreenResolution();

    return (
        <div className='projectGrid-gridContainer'>
            {(isLarge || isMedium) && !removeBio &&
            <div className='projectGrid-rowOuter'>
                <div className='projectGrid-stickyRow'>
                    <h1 className='projectGrid-leftCol'>{'ABOUT ME'}</h1>
                    <div className='projectGrid-rightCol'>
                        <p style={{marginBottom: '24px'}}>{'After graduating from my undergrad, I moved to San Diego, California to start work as a software engineer. Through work, I was able to explore my love for development, design, and management. I love the intersection between art and technology and aim to be a bridge between these two fields.\n\n​I am currently in a Masters program for User Experience Design and am searching for work in the UI/UX field.'}</p>
                        <Button type='Primary' text='VIEW MY RESUME' link={Resume}/>
                    </div>
                </div>
            </div>}
            {gridProps?.map((item, index) => (
                <div className='projectGrid-stickyRow'>
                    <h1 className='projectGrid-leftCol'>{item.title}</h1>
                    <div className='projectGrid-rightCol'>
                        {item.content}
                    </div>
                </div>
                
            ))}
        </div>
    );
}

export default ProjectGrid;