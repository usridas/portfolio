import { useNavigate } from 'react-router-dom';
import GradientBackground from '../components/GradientBackground/GradientBackground.js';
import { isMobile } from '../utils/utils';
import './Playlist.scss';
import { useState, useEffect } from 'react';

export const PlaylistHome = () => {
    const isMobileVar = isMobile();
    const [hoverText, setHoverText] = useState('Choose a playlist');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = "transparent";
        return () => {
            document.body.style.backgroundColor = ""; // restores the CSS rule
        };
    }, []);

    return (
        <>
        <GradientBackground />
        <div className={isMobileVar ? 'fullPageMobile' : 'fullPage'}>
            <button tabIndex={0} className='backToProjects' onClick={()=>{navigate('/Projects')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Projects')}}}>Back to my portfolio</button>
            <h1 className='individualPlaylistTitle'>{hoverText}</h1>
            <div className='playlistArrayContainer'>
                <div tabIndex={0} className='liquidGlassWrapper' onMouseEnter={()=> setHoverText('Video game vibes')} onMouseLeave={()=> setHoverText('Choose a playlist')} onClick={()=>navigate('/VideoGameVibes')} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/VideoGameVibes')}}}>
                    <div className='liquidGlassEffect'/>
                    <h3 className='playlistTitle'>VIDEO GAME VIBES</h3>
                    <svg>
                        <filter id='glassDistortion'>
                            <feTurbulence
                                type='fractalNoise'
                                baseFrequency='0.005 0.005'
                                numOctaves='1'
                                result='turbulence'
                            />
                            <feDisplacementMap
                                in='SourceGraphic'
                                scale='200'
                                result='displacement'
                            />
                            <feSpecularLighting
                                result="spotlight"
                                specularConstant="0.02"
                                specularExponent="1000"
                                lighting-color="white">
                                <fePointLight x="10" y="10" z="40" />
                            </feSpecularLighting>
                            <feComposite
                                in="displacement" in2="spotlight" operator="lighter" result="composited"/>
                        </filter>
                    </svg>
                </div>
                <div tabIndex={0} className='liquidGlassWrapper' onMouseEnter={()=> setHoverText('A night at the casino')} onMouseLeave={()=> setHoverText('Choose a playlist')} onClick={()=>navigate('/ANightAtTheCasino')} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/ANightAtTheCasino')}}}>
                    <div className='liquidGlassEffect'></div>
                    <h3 className='playlistTitle'>A NIGHT AT THE CASINO</h3>
                </div>  
                <div tabIndex={0} className='liquidGlassWrapper' onMouseEnter={()=> setHoverText('Family road trip')} onMouseLeave={()=> setHoverText('Choose a playlist')} onClick={()=>navigate('/FamilyRoadTrip')} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/FamilyRoadTrip')}}}>
                    <div className='liquidGlassEffect'></div>
                    <h3 className='playlistTitle'>FAMILY ROAD TRIP</h3>
                </div>  
                <div tabIndex={0} className='liquidGlassWrapper' onMouseEnter={()=> setHoverText('Let\'s disco')} onMouseLeave={()=> setHoverText('Choose a playlist')} onClick={()=>navigate('/LetsDisco')} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/LetsDisco')}}}>
                    <div className='liquidGlassEffect'></div>
                    <h3 className='playlistTitle'>LET'S DISCO</h3>
                </div>   
            </div>
        </div>
        </>
    );
}

export default PlaylistHome;