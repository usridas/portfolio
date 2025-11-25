import './Playlist.css';

export const Vinyl = ({}) => {
    const hello = <div className='vinylContainer'>
                        <div className='vinylLiquidGlassWrapper'>
                            <div className='vinylLiquidGlassEffect'></div>
                            <div className='centerImage'>
                                <div className='vinylContainer'>
                                    <div className='vinylLiquidGlassWrapper'>
                                        <div className='vinylLiquidGlassEffect'></div>
                                        <div className='centerImage'>
                                            <div className='vinylContainer'>
                                                <div className='vinylLiquidGlassWrapper'>
                                                    <div className='vinylLiquidGlassEffect'></div>
                                                    <div className='centerImage'>
                                                        <div className='vinylContainer'>
                                                           <div className='vinylLiquidGlassWrapper'>
                                                            <div className='vinylLiquidGlassEffect'></div>
                                                            <div className='centerImage'><div className='finalCenterImage'/></div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

    return (
        <div className='vinylContainer'>
            <div className='vinylLiquidGlassWrapper'>
                <div className='vinylLiquidGlassEffect'></div>
                <div className='centerImage'>
                    {hello}
                </div>
                <svg>
                    <filter id='glassDistortion'>
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='0.002 0.002'
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
                            <fePointLight x="150" y="150" z="20" />
                        </feSpecularLighting>
                        <feComposite
                            in="displacement" in2="spotlight" operator="lighter" result="composited"/>
                    </filter>
                </svg>
            </div>
        </div>
    );
}

export default Vinyl;