import './Projects.scss';

export const Projects = ({setTab}) => {
    return (
    <div>
        <h1 id='projects'>
            Projects
        </h1>
        <div className='projectButtonsContainer'>
            <button onClick={() => {setTab('elfsterRedesign')}}>Elfster Redesign</button>
            <button onClick={() => {setTab('myViasatApp')}}>My Viasat App</button>
            <button onClick={() => {setTab('serotoninVideoGame')}}>Serotonin Video Game</button>
            <button onClick={() => {setTab('visualAudioAmalgamations')}}>Visual-Audio Amalgamations</button>
            <button onClick={() => {setTab('seniorDesign')}}>Senior Design: COVID-19 Project</button>
            <button onClick={() => {setTab('sriLankaTeaProject')}}>Sri Lanka Tea Project</button>
        </div>
    </div>
    )
}