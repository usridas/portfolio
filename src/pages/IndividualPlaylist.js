import './Playlist.css';
import { useState, useEffect, useMemo, useRef } from 'react';
import Vinyl from './Vinyl.js';
import sleepItOffCover from './images/SleepItOff.png';
import puzzlesCover from './images/Puzzles.png';
import hotTeaAndFirmwareUpdatesCover from './images/HotTeaAndFirmwareUpdates.png';
import oneSummerDayCover from './images/OneSummerDay.png';
import songOfStormsCover from './images/SongOfStorms.png';
import lovelyCItyCover from './images/LovelyCity.png';
import baDaBaCover from './images/BaDaBa.png';
import sleepItOffFile from './music/sleepitoff.mp3';
import puzzlesFile from './music/Puzzles.mp3';
import hotTeaAndFirmwareUpdatesFile from './music/HotTeaAndFirmwareUpdates.mp3';
import oneSummersDayFile from './music/OneSummersDay.mp3';
import songOfStormsRemixFile from './music/SongofStormsRemix.mp3';
import lovelyCityFile from './music/LovelyCity.mp3';
import baDaBaFile from './music/BaDaBa.mp3';

export const IndividualPlaylist = ({setTab}) => {
    const [isPaused, setIsPaused] = useState(true);
    const [progressPercentage, setProgressPercentage] = useState(0);

    const audioObjects = useMemo(() => ({
        sleepitoff: new Audio(sleepItOffFile),
        puzzles: new Audio(puzzlesFile),
        hotTea: new Audio(hotTeaAndFirmwareUpdatesFile),
        oneSummer: new Audio(oneSummersDayFile),
        songOfStorms: new Audio(songOfStormsRemixFile),
        lovelyCity: new Audio(lovelyCityFile),
        baDaBa: new Audio(baDaBaFile),
    }), []);

    const videoGamePlaylist = 
    [
        {title: 'sleep it off', artist: 'leon chang', time: '3:46', audio: audioObjects.sleepitoff, songCover: sleepItOffCover},
        {title: 'Puzzles', artist: 'Tomohito Nishiura', time: '1:54', audio: audioObjects.puzzles, songCover: puzzlesCover},
        {title: 'Hot Tea & Firmware Updates', artist: 'DJ Cutman', time: '3:13', audio: audioObjects.hotTea, songCover: hotTeaAndFirmwareUpdatesCover},
        {title: 'One Summer Day', artist: 'Joe Hisaishi', time: '3:09', audio: audioObjects.oneSummer, songCover: oneSummerDayCover},
        {title: 'Song of Storms', artist: 'MikEL, GameChops', time: '3:37', audio: audioObjects.songOfStorms, songCover: songOfStormsCover},
        {title: 'Lovely City', artist: 'Calum Bowen', time: '2:42', audio: audioObjects.lovelyCity, songCover: lovelyCItyCover},
        {title: 'Ba-Da-Ba', artist: '2 Mello', time: '3:56', audio: audioObjects.baDaBa, songCover: baDaBaCover}
    ];

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentSong, setCurrentSong] = useState(videoGamePlaylist[currentSongIndex]);
    const glassRef = useRef(null);
    const [glassOffset, setGlassOffset] = useState(0);
    const [vinylAnimation, setVinylAnimation] = useState('vinylContainer1');

    useEffect(() => {
        //animate the glass highlight
        let start = glassOffset;
        let end = currentSongIndex * 77;
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
            console.log("vinylanimation: ",vinylAnimation);
        }
        restartAnimation();
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
        if (currentSongIndex === videoGamePlaylist.length -1) {
            setCurrentSongIndex(0);
            setCurrentSong(videoGamePlaylist[currentSongIndex.index]);
            setIsPaused(false);
        }
        else {
            let temp = currentSongIndex + 1;
            setCurrentSongIndex(temp);
            setCurrentSong(videoGamePlaylist[temp]);
            setIsPaused(false);
            videoGamePlaylist[temp].audio.play();
        }
    };

    const Song = ({title, artist, time}) =>
    {
        return (
            <div className={`titleArtistAndTime ${currentSong.title === title ? "currentSong" : ""}`}>
                <div className='titleAndArtist'>
                    <div className='songTitle'>{title}</div>
                    <div className='songArtistOrTime'>{artist}</div>
                </div>
                <div className='songArtistOrTime'>{time}</div>
            </div>
        );
    };

    const GlassContainer = ({}) =>
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
                    setCurrentSongIndex(videoGamePlaylist.length - 1);
                    setCurrentSong(videoGamePlaylist[videoGamePlaylist.length - 1]);
                    setIsPaused(false);
                    videoGamePlaylist[videoGamePlaylist.length - 1].audio.time = 0;
                    videoGamePlaylist[videoGamePlaylist.length - 1].audio.play();
                }
                else {
                    let temp = currentSongIndex - 1;
                    setCurrentSongIndex(temp);
                    setCurrentSong(videoGamePlaylist[temp]);
                    setIsPaused(false);
                    videoGamePlaylist[videoGamePlaylist.length - 1].audio.time = 0;
                    videoGamePlaylist[temp].audio.play();
                }
            }}/>
        {isPaused ?
        <button id='playButton' className='playButton'
            onClick={() => {
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
                if (currentSongIndex === videoGamePlaylist.length - 1) {
                    setCurrentSongIndex(0);
                    setCurrentSong(videoGamePlaylist[0]);
                    setIsPaused(true);
                }
                else {
                    let temp = currentSongIndex + 1;
                    setCurrentSongIndex(temp);
                    setCurrentSong(videoGamePlaylist[temp]);
                    setIsPaused(false);
                    videoGamePlaylist[temp].audio.currentTime = 0;
                    videoGamePlaylist[temp].audio.play();
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
        </div>;

    

    const playlistDetails = 
        <div className='playlistDetailsContainer'>
        <GlassContainer />
            {videoGamePlaylist?.map((song, index) => (
                <Song title={song.title} artist={song.artist} time={song.time} id={index}/>
            ))}
        </div>



    return (
        <div className='fullPage'>
            <a onClick={()=>{setTab('Music'); currentSong.audio.pause(); currentSong.src = '';}} className='link'>Back to playlists</a>
            <div className='titleText'>Video game vibes</div>
            <div className='individualPlaylistContainer'>
                <div className='individualVinylAndMusicListContainer'>
                    <Vinyl songCover={currentSong.songCover} vinylAnimation={vinylAnimation} isPaused={isPaused}/>
                    {playlistDetails}
                </div>
                <div className='songAndButtonLiquidGlassWrapper'>
                    <div className='liquidGlassEffect'/>
                    <div className='individualPlaylistButtonContainer'>
                        <div className='mainTitleAndArtist'>
                            <div className='songTitle'>{currentSong.title}</div>
                            <div className='songArtistOrTime'>{currentSong.artist}</div>
                        </div>
                        {buttonsAndProgressContainer}
                        {/* <div className='volumeContainer'>
                            <div className='volumeButton'/>
                        </div> */}
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default IndividualPlaylist;