import './Playlist.scss';
import { useState, useEffect, useMemo, useRef } from 'react';
import Vinyl from './Vinyl.js';
import { isMobile, secondsToTimestamp, videoGamePlaylist, casinoPlaylist, discoPlaylist, familyRoadTripPlaylist } from '../utils/utils.js';
import GradientBackground from '../components/GradientBackground/GradientBackground.js';

export const IndividualPlaylist = ({setTab, tab}) => {
    const isMobileVar = isMobile();
    const [isPaused, setIsPaused] = useState(true);
    const [progressPercentage, setProgressPercentage] = useState(0);

    const memoVideoGamePlaylist = useMemo(() => (videoGamePlaylist), []);
    const memoCasinoPlaylist = useMemo(() => (casinoPlaylist), []);
    const memoFamilyRoadTripPlaylist = useMemo(() => (familyRoadTripPlaylist), []);
    const memoDiscoPlaylist = useMemo(() => (discoPlaylist), []);
    let title;
    let currentPlaylist;

    switch (tab) {
        case 'VideoGameVibes':
            title = 'Video game vibes';
            currentPlaylist = memoVideoGamePlaylist;
            break;
        case 'ANightAtTheCasino':
            title = 'A night at the casino';
            currentPlaylist = memoCasinoPlaylist;
            break;
        case 'FamilyRoadTrip':
            title = 'Family road trip';
            currentPlaylist = memoFamilyRoadTripPlaylist;
            break;
        case 'LetsDisco':
            title = 'Let\'s disco';
            currentPlaylist = memoDiscoPlaylist;
            break;
        default:
            break;
    }
    

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentSong, setCurrentSong] = useState(currentPlaylist[currentSongIndex]);
    const glassRef = useRef(null);
    const [glassOffset, setGlassOffset] = useState(0);
    const [vinylAnimation, setVinylAnimation] = useState('vinylContainer1');
    const volumeSlider = document.getElementById('volumeSlider');

    document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); 
        if (isPaused) {
            currentSong.audio.volume = volumeSlider.value / 100;
            currentSong.audio.play();
            setIsPaused(false);
        }
        else {
            currentSong.audio.pause();
            setIsPaused(true);
        }
    }
    });

    volumeSlider?.addEventListener('input', function() {
        currentSong.audio.volume = this.value / 100;
    });

    useEffect(() => {
        document.body.style.backgroundColor = "transparent";
        //animate the glass highlight
        let start = glassOffset;
        let end = currentSongIndex * 90;
        let startTime;

        function animate(time) {
            if (!startTime) startTime = time;
            let elapsed = time - startTime;
            const duration = 400; // ms
            let progress = Math.min(elapsed / duration, 1);
            setGlassOffset(start + (end - start) * progress);
            if (progress < 1) requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);

        //restart vinyl animation
        function restartAnimation() {
            if (vinylAnimation === "vinylContainer1") {
                setVinylAnimation('vinylContainer2')
            } else {
                setVinylAnimation('vinylContainer1')
            }
        }
        restartAnimation();
        return () => {
            document.body.style.backgroundColor = ""; // restores the CSS rule
        };
    }, [currentSongIndex]);

    function timeUpdateFunction(e) {
        const currentTime = currentSong.audio.currentTime;
        const duration = currentSong.audio.duration;
        if (duration > 0) {
            setProgressPercentage((currentTime / duration) * 100);
        }
    }

    currentSong.audio.addEventListener('timeupdate', timeUpdateFunction);

    currentSong.audio.onended = function() {
        currentSong.audio.pause();
        currentSong.src = '';
        currentSong.audio.removeEventListener("timeupdate", timeUpdateFunction);
        currentSong.audio.addEventListener('timeupdate', timeUpdateFunction);
        setProgressPercentage(0);
        if (currentSongIndex === currentPlaylist.length - 1) {
            setCurrentSongIndex(0);
            setCurrentSong(currentPlaylist[0]);
            currentPlaylist[0].audio.volume = volumeSlider.value/100;
            setIsPaused(false);
        }
        else {
            let temp = currentSongIndex + 1;
            setCurrentSongIndex(temp);
            setCurrentSong(currentPlaylist[temp]);
            setIsPaused(false);
            currentPlaylist[temp].audio.volume = volumeSlider.value/100;
            currentPlaylist[temp].audio.play();
        }
    };

    

    const Song = ({title, artist, time}) =>
    {
        return (
            <div className={`titleArtistAndTime ${currentSong.title === title ? "currentSong" : ""}`}>
                <div className='titleAndArtist'>
                    <h3 style={{color: '#FFFFFF'}}>{title}</h3>
                    <h4 style={{color: '#FFFFFF'}}>{artist}</h4>
                </div>
                <h3 style={{color: '#FFFFFF'}}>{time}</h3>
            </div>
        );
    };

    const GlassContainer = () =>
    {
        return (
            <div id='glassContainer' ref={glassRef} className='currentSongLiquidGlassWrapper' style={{transform: `translateY(${glassOffset}px)`}}>
                <div className='currentSongLiquidGlassEffect'/>
                <div className='currentSongContainer'/>
            </div>
        )
    };

    const buttons =
    <div className='buttonContainer'>
        <button id='previousSongButton' className='previousSongButton'
            onClick={() => {
                currentSong.audio.pause();
                currentSong.src = '';
                setProgressPercentage(0);
                if (currentSongIndex === 0) {
                    setCurrentSongIndex(currentPlaylist.length - 1);
                    setCurrentSong(currentPlaylist[currentPlaylist.length - 1]);
                    setIsPaused(false);
                    currentPlaylist[currentPlaylist.length - 1].audio.currentTime = 0;
                    currentPlaylist[currentPlaylist.length - 1].audio.volume = volumeSlider.value/100;
                    currentPlaylist[currentPlaylist.length - 1].audio.play();
                }
                else {
                    let temp = currentSongIndex - 1;
                    setCurrentSongIndex(temp);
                    setCurrentSong(currentPlaylist[temp]);
                    setIsPaused(false);
                    currentPlaylist[temp].audio.currentTime = 0;
                    currentPlaylist[temp].audio.volume = volumeSlider.value/100;
                    currentPlaylist[temp].audio.play();
                }
            }}/>
        {isPaused ?
        <button id='playButton' className='playButton'
            onClick={() => {
                currentSong.audio.volume = volumeSlider.value / 100;
                currentSong.audio.play();
                setIsPaused(false);
            }}
        />:
        <button id='pauseButton' className='pauseButton'
            onClick={() => {
                currentSong.audio.pause();
                setIsPaused(true);
            }}
        />}
        <button id='nextSongButton' className='nextSongButton'
            onClick={()=> {
                currentSong.audio.pause();
                currentSong.src = '';
                setProgressPercentage(0);
                if (currentSongIndex === currentPlaylist.length - 1) {
                    setCurrentSongIndex(0);
                    setCurrentSong(currentPlaylist[0]);
                    setIsPaused(true);
                    currentPlaylist[0].audio.currentTime = 0;
                    currentPlaylist[0].audio.volume = volumeSlider.value/100;
                }
                else {
                    let temp = currentSongIndex + 1;
                    setCurrentSongIndex(temp);
                    setCurrentSong(currentPlaylist[temp]);
                    setIsPaused(false);
                    currentPlaylist[temp].audio.currentTime = 0;
                     currentPlaylist[temp].audio.volume = volumeSlider.value/100;
                    currentPlaylist[temp].audio.play();
                }
            }}
        />
    </div>

    const buttonsAndProgressContainer = 
        <div className='buttonsAndProgressContainer'>
            {buttons}
            <div className='progressBarContainer'>
                <div className='progressBar' style={{width: `${progressPercentage}%`}}/>
            </div>
            <div className='progressBarTimestampContainer'>
                <h4 style={{color: '#FFFFFF'}}>{secondsToTimestamp(currentSong.audio.currentTime ?? 0)}</h4>
                <h4 style={{color: '#FFFFFF'}}>{`-${secondsToTimestamp((currentSong.audio.duration - currentSong.audio.currentTime) ?? 0)}`}</h4>
            </div>
        </div>;

    const volumeContainer = 
        <div className='volumeContainer'>
            <div className='volumeIcon'/>
            <div className='volumeSlider'><input id='volumeSlider' className='volumeSlider' type="range" min="1" max="100" defaultValue={100}/></div>
        </div>;

    const playlistDetails = 
        <div className='playlistDetailsContainer'>
        <GlassContainer />
            {currentPlaylist?.map((song, index) => (
                <Song title={song.title} artist={song.artist} time={song.time} id={index}/>
            ))}
        </div>



    return (
        <>
        <GradientBackground />
        <div className={isMobileVar ? 'fullPageMobile' : 'fullPage'}>
            <button tabIndex={0} onClick={()=>{currentSong.audio.pause(); currentSong.src = ''; setProgressPercentage(0); currentSong.audio.currentTime = 0; setTab('Music');}} onKeyDown={(event)=>{if (event.key === 'Enter') {currentSong.audio.pause(); currentSong.src = ''; setProgressPercentage(0); currentSong.audio.currentTime = 0; setTab('Music');}}} style={{color: '#FFFFFF'}}>Back to playlists</button>
            <h1 className='individualPlaylistTitle'>{title}</h1>
            <div className='individualPlaylistContainer'>
                <div className='individualVinylAndMusicListContainer'>
                    <Vinyl songCover={currentSong.songCover} vinylAnimation={vinylAnimation} isPaused={isPaused}/>
                    {playlistDetails}
                </div>
                <div className='songAndButtonLiquidGlassWrapper'>
                    <div className='liquidGlassEffect'/>
                    <div className='individualPlaylistButtonContainer'>
                        <div className='mainTitleAndArtist'>
                            <h3 style={{color: '#FFFFFF'}}>{currentSong.title}</h3>
                            <h4 style={{color: '#FFFFFF'}}>{currentSong.artist}</h4>
                        </div>
                        {buttonsAndProgressContainer}
                        {volumeContainer}
                    </div>
                </div>  
            </div>
        </div>
        </>
    );
}

export default IndividualPlaylist;