import sleepItOffCover from '../pages/images/SleepItOff.png';
import puzzlesCover from '../pages/images/Puzzles.png';
import hotTeaAndFirmwareUpdatesCover from '../pages/images/HotTeaAndFirmwareUpdates.png';
import oneSummerDayCover from '../pages/images/OneSummerDay.png';
import songOfStormsCover from '../pages/images/SongOfStorms.png';
import lovelyCityCover from '../pages/images/LovelyCity.png';
import baDaBaCover from '../pages/images/BaDaBa.png';
import sleepItOffFile from '../pages/music/sleepitoff.mp3';
import puzzlesFile from '../pages/music/Puzzles.mp3';
import hotTeaAndFirmwareUpdatesFile from '../pages/music/HotTeaAndFirmwareUpdates.mp3';
import oneSummersDayFile from '../pages/music/OneSummersDay.mp3';
import songOfStormsRemixFile from '../pages/music/SongofStormsRemix.mp3';
import lovelyCityFile from '../pages/music/LovelyCity.mp3';
import baDaBaFile from '../pages/music/BaDaBa.mp3';


export function debounce(func, waitTime) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func();
            }, waitTime);
        };
    };

export function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

export function secondsToTimestamp(time) {
    if (!time) {
        return '0:00';
    }
    const roundedTime = Math.round(time);
    const minutes = Math.floor(roundedTime/60);
    const seconds = roundedTime - (minutes * 60);
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;
    
    return (`${minutes}:${secondsString}`);
}

export const videoGamePlaylist = 
    [
        {title: 'sleep it off', artist: 'leon chang', time: '3:46', audio: new Audio(sleepItOffFile), songCover: sleepItOffCover},
        {title: 'Puzzles', artist: 'Tomohito Nishiura', time: '1:54', audio: new Audio(puzzlesFile), songCover: puzzlesCover},
        {title: 'Hot Tea & Firmware Updates', artist: 'DJ Cutman', time: '3:13', audio: new Audio(hotTeaAndFirmwareUpdatesFile), songCover: hotTeaAndFirmwareUpdatesCover},
        {title: 'One Summer Day', artist: 'Joe Hisaishi', time: '3:09', audio: new Audio(oneSummersDayFile), songCover: oneSummerDayCover},
        {title: 'Song of Storms', artist: 'MikEL, GameChops', time: '3:37', audio: new Audio(songOfStormsRemixFile), songCover: songOfStormsCover},
        {title: 'Lovely City', artist: 'Calum Bowen', time: '2:42', audio: new Audio(lovelyCityFile), songCover: lovelyCityCover},
        {title: 'Ba-Da-Ba', artist: '2 Mello', time: '3:56', audio: new Audio(baDaBaFile), songCover: baDaBaCover}
    ];