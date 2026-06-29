import './ProjectGrid.scss';

export const ProjectGrid = ({gridProps}) => {

    return (
        <div className='projectGrid-gridContainer'>
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