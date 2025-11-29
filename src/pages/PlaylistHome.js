import './Playlist.css';
import { useState } from 'react';

export const PlaylistHome = ({setTab}) => {
    const [hoverText, setHoverText] = useState('Choose a playlist');

    return (
        <div className='fullPage'>
            <a onClick={()=>{setTab('Projects')}} className='link'>Back to my portfolio</a>
            <div className='titleText'>{hoverText}</div>
            <div className='playlistArrayContainer'>
                <div className='liquidGlassWrapper' onMouseEnter={()=> setHoverText('Video game vibes')} onMouseLeave={()=> setHoverText('Choose a playlist')} onClick={()=>setTab('VideoGameVibes')}>
                    <div className='liquidGlassEffect'/>
                    <div className='randomText'>Video game vibes</div>
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
                <div className='liquidGlassWrapper' onMouseEnter={()=> setHoverText('A night at the casino')} onMouseLeave={()=> setHoverText('Choose a playlist')}>
                    <div className='liquidGlassEffect'></div>
                    <div className='randomText'>A night at the casino</div>
                </div>  
                <div className='liquidGlassWrapper' onMouseEnter={()=> setHoverText('Oldies')} onMouseLeave={()=> setHoverText('Choose a playlist')}>
                    <div className='liquidGlassEffect'></div>
                    <div className='randomText'>Oldies</div>
                </div>  
                <div className='liquidGlassWrapper' onMouseEnter={()=> setHoverText('Let\'s disco')} onMouseLeave={()=> setHoverText('Choose a playlist')}>
                    <div className='liquidGlassEffect'></div>
                    <div className='randomText'>Let's disco</div>
                </div>   
            </div>
        </div>
    );
}

export default PlaylistHome;