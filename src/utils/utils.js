import sleepItOffCover from '../pages/images/SleepItOff.png';
import puzzlesCover from '../pages/images/Puzzles.png';
import hotTeaAndFirmwareUpdatesCover from '../pages/images/HotTeaAndFirmwareUpdates.png';
import oneSummerDayCover from '../pages/images/OneSummerDay.png';
import songOfStormsCover from '../pages/images/SongOfStorms.png';
import lovelyCityCover from '../pages/images/LovelyCity.png';
import baDaBaCover from '../pages/images/BaDaBa.png';
import theVillainIAppearToBeCover from '../pages/images/TheVillainIAppearToBe.png';
import casinoNightZoneCover from '../pages/images/CasinoNightZone.png';
import blueMoonCover from '../pages/images/BlueMoon.png';
import stillAliveCover from '../pages/images/StillAlive.png';
import itsBeenALongLongTimeCover from '../pages/images/ItsBeenALongLongTime.png';
import singSingSingCover from '../pages/images/SingSingSing.png';
import feelingGoodCover from '../pages/images/FeelingGood.png';
import ohPrettyWomanCover from '../pages/images/OhPrettyWoman.png';
import americanPieCover from '../pages/images/AmericanPie.png';
import chiquititaCover from '../pages/images/Chiquitita.png';
import ikoIkoCover from '../pages/images/IkoIko.png';
import theGamblerCover from '../pages/images/TheGambler.png';
import nineToFiveCover from '../pages/images/9to5.png';
import iJustCalledToSayILoveYouCover from '../pages/images/IJustCalledToSayILoveYou.png';
import rosmarinaCover from '../pages/images/Rosmarina.png';
import peurDesFillesCover from '../pages/images/PeurDesFilles.png';
import getLuckyCover from '../pages/images/GetLucky.png';
import iWillSurviveCover from '../pages/images/IWillSurvive.png';
import aceOfAcesCover from '../pages/images/AceOfAces.png';
import daddyCoolCover from '../pages/images/DaddyCool.png';
import califasCover from '../pages/images/Califas.png';
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

export const casinoPlaylist = 
    [
        {title: 'The Villain I Appear To Be', artist: 'Connor Spiotto, Molly Pease', time: '3:08', audio: new Audio(sleepItOffFile), songCover: theVillainIAppearToBeCover},
        {title: 'Casino Night Zone', artist: 'The 8-Bit Big Band', time: '3:36', audio: new Audio(puzzlesFile), songCover: casinoNightZoneCover},
        {title: 'Blue Moon', artist: 'Billy Holiday', time: '3:28', audio: new Audio(hotTeaAndFirmwareUpdatesFile), songCover: blueMoonCover},
        {title: 'Still Alive', artist: 'The 8-Bit Big Band', time: '3:11', audio: new Audio(oneSummersDayFile), songCover: stillAliveCover},
        {title: 'It\'s Been a Long, Long Time', artist: 'Kitty Kallen, Harry James & His Orchestra', time: '3:24', audio: new Audio(songOfStormsRemixFile), songCover: itsBeenALongLongTimeCover},
        {title: 'Sing, Sing, Sing', artist: 'Benny Goodman, His Orchestra', time: '8:40', audio: new Audio(lovelyCityFile), songCover: singSingSingCover},
        {title: 'Feeling Good', artist: 'Nina Simone', time: '2:58', audio: new Audio(baDaBaFile), songCover: feelingGoodCover}
    ];

export const oldiesPlaylist = 
    [
        {title: 'Oh, Pretty Woman', artist: 'Roy Orbison', time: '2:57', audio: new Audio(sleepItOffFile), songCover: ohPrettyWomanCover},
        {title: 'American Pie', artist: 'Don McLean', time: '8:34', audio: new Audio(puzzlesFile), songCover: americanPieCover},
        {title: 'Chiquitita', artist: 'ABBA', time: '5:26', audio: new Audio(hotTeaAndFirmwareUpdatesFile), songCover: chiquititaCover},
        {title: 'Iko Iko', artist: 'The Belle Stars', time: '2:59', audio: new Audio(oneSummersDayFile), songCover: ikoIkoCover},
        {title: 'The Gambler', artist: 'Kenny Rogers', time: '3:35', audio: new Audio(songOfStormsRemixFile), songCover: theGamblerCover},
        {title: '9 to 5', artist: 'Dolly Parton', time: '2:47', audio: new Audio(lovelyCityFile), songCover: nineToFiveCover},
        {title: 'I Just Called To Say I Love You', artist: 'Stevie Wonder', time: '4:22', audio: new Audio(baDaBaFile), songCover: iJustCalledToSayILoveYouCover}
    ];

export const discoPlaylist = 
    [
        {title: 'Rosmarina', artist: 'Rosmarina, Moorea Masa & the Mood, Swatkins', time: '4:19', audio: new Audio(sleepItOffFile), songCover: rosmarinaCover},
        {title: 'Peur des filles (Montmartre Remix)', artist: 'L\'Impératrice', time: '2:46', audio: new Audio(puzzlesFile), songCover: peurDesFillesCover},
        {title: 'Get Lucky', artist: 'Daft Punk, Pharrell Williams, Nile Rodgers', time: '6:10', audio: new Audio(hotTeaAndFirmwareUpdatesFile), songCover: getLuckyCover},
        {title: 'I Will Survive', artist: 'Gloria Gaynor', time: '4:21', audio: new Audio(oneSummersDayFile), songCover: iWillSurviveCover},
        {title: 'Ace of Aces', artist: 'The Fearless Flyers', time: '2:05', audio: new Audio(songOfStormsRemixFile), songCover: aceOfAcesCover},
        {title: 'Daddy Cool', artist: 'Boney M.', time: '3:29', audio: new Audio(lovelyCityFile), songCover: daddyCoolCover},
        {title: 'Califas', artist: 'Miramar', time: '3:37', audio: new Audio(baDaBaFile), songCover: califasCover}
    ];