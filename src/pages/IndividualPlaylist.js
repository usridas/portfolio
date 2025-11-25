import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Playlist.css';
import { useState } from 'react';
import Vinyl from './Vinyl.js';
import PlayButton from './images/PlayButton.png';
import FastforwardButton from './images/FastforwardButton.png';
import RewindButton from './images/RewindButton.png';
import NextSongButton from './images/NextSongButton.png';
import PreviousSongButton from './images/PreviousSongButton.png';
import VolumeButton from './images/VolumeButton.png';

export const IndividualPlaylist = ({}) => {
    const { isLarge } = useScreenResolution();

    const videoGamePlaylist = 
    [
        {title: 'sleep it off', artist: 'leon chang', time: '4:08'},
        {title: 'sleep it off', artist: 'leon chang', time: '4:08'},
        {title: 'One Summer Day', artist: 'Joe Hisaishi', time: '4:08'},
        {title: 'sleep it off', artist: 'leon chang', time: '4:08'},
        {title: 'sleep it off', artist: 'leon chang', time: '4:08'},
        {title: 'sleep it off', artist: 'leon chang', time: '4:08'}
    ];

    const Song = ({title, artist, time}) =>
    {
        return (
            <div className='titleArtistAndTime'>
                <div className='titleAndArtist'>
                    <div className='songTitle'>{title}</div>
                    <div className='songArtistOrTime'>{artist}</div>
                </div>
                <div className='songArtistOrTime'>{time}</div>
            </div>
        );
    };

    const CurrentSong = ({title, artist, time}) =>
    {
        return (
            <div className='currentSongLiquidGlassWrapper'>
                <div className='liquidGlassEffect'/>
                <div className='currentSongContainer'>
                    <div className='titleAndArtist'>
                        <div className='songTitle'>{title}</div>
                        <div className='songArtistOrTime'>{artist}</div>
                    </div>
                    <div className='songArtistOrTime'>{time}</div>
                </div>
            </div>
        )
    };

    const buttons =
    <div className='buttonContainer'>
        <div style={{backgroundImage: `url(${PreviousSongButton})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '100%', width: '20px', height: '20px'}}/>
        <div style={{backgroundImage: `url(${RewindButton})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '100%', width: '32px', height: '20px'}}/>
        <div style={{backgroundImage: `url(${PlayButton})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '100%', width: '40px', height: '40px'}}/>
        <div style={{backgroundImage: `url(${FastforwardButton})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '100%', width: '32px', height: '20px'}}/>
        <div style={{backgroundImage: `url(${NextSongButton})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '100%', width: '20px', height: '20px'}}/>
    </div>

    

    const playlistDetails = 
        <div className='playlistDetailsContainer'>
          {videoGamePlaylist?.map(song => (
            song.title === 'One Summer Day' ?
            <CurrentSong title={song.title} artist={song.artist} time={song.time}/>:
            <Song title={song.title} artist={song.artist} time={song.time}/>
          ))}
        </div>;

    return (
        <div className='fullPage'>
            <div className='titleText'>Video game vibes</div>
            <div className='individualPlaylistContainer'>
                <div className='individualVinylAndMusicListContainer'>
                    <Vinyl />
                    {playlistDetails}
                </div>
                <div className='currentSongLiquidGlassWrapper'>
                    <div className='liquidGlassEffect'/>
                    <div className='individualPlaylistButtonContainer'>
                        <div className='titleAndArtist'>
                            <div className='songTitle'>{'One Summer Day'}</div>
                            <div className='songArtistOrTime'>{'Joe Hisaishi'}</div>
                        </div>
                        {buttons}
                        <div style={{backgroundImage: `url(${VolumeButton})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '100%', width: '24px', height: '24px'}}/>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default IndividualPlaylist;