import {
    SleepItOffCover,
    PuzzlesCover,
    HotTeaCover,
    OneSummerDayCover,
    SongOfStormsCover,
    LovelyCityCover,
    BaDaBaCover,
    TheVillainIAppearToBeCover,
    CasinoNightZoneCover,
    BlueMoonCover,
    StillAliveCover,
    ItsBeenALongLongTimeCover,
    SingSingSingCover,
    FeelingGoodCover,
    OhPrettyWomanCover,
    AmericanPieCover,
    ChiquititaCover,
    IkoIkoCover,
    TheGamblerCover,
    NineToFiveCover,
    IJustCalledToSayILoveYouCover,
    RosmarinaCover,
    PeurDesFillesCover,
    GetLuckyCover,
    LetsGrooveCover,
    AceOfAcesCover,
    DaddyCoolCover,
    CalifasCover
} from '../assets/images'

import {
    AceOfAcesMusic,
    AmericanPieMusic,
    BaDaBaMusic,
    BlueMoonMusic,
    CalifasMusic,
    CasinoNightZoneMusic,
    ChiquititaMusic,
    DaddyCoolMusic,
    FeelingGoodMusic,
    GetLuckyMusic,
    HotTeaMusic,
    ILoveYouMusic,
    IkoIkoMusic,
    LongTimeMusic,
    LetsGrooveMusic,
    LovelyCityMusic,
    NineToFiveMusic,
    OhPrettyWomanMusic,
    OneSummerDayMusic,
    PeurDesFillesMusic,
    PuzzlesMusic,
    RosmarinaMusic,
    SingSingSingMusic,
    SleepItOffMusic,
    SongOfStormsMusic,
    StillAliveMusic,
    TheGamblerMusic,
    TheVillainIAppearToBeMusic
} from '../assets/music'


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
        {title: 'sleep it off', artist: 'leon chang', time: '3:46', audio: new Audio(SleepItOffMusic), songCover: SleepItOffCover},
        {title: 'Puzzles', artist: 'Tomohito Nishiura', time: '1:54', audio: new Audio(PuzzlesMusic), songCover: PuzzlesCover},
        {title: 'Hot Tea & Firmware Updates', artist: 'DJ Cutman', time: '3:13', audio: new Audio(HotTeaMusic), songCover: HotTeaCover},
        {title: 'One Summer Day', artist: 'Joe Hisaishi', time: '3:09', audio: new Audio(OneSummerDayMusic), songCover: OneSummerDayCover},
        {title: 'Song of Storms', artist: 'MikEL, GameChops', time: '3:37', audio: new Audio(SongOfStormsMusic), songCover: SongOfStormsCover},
        {title: 'Lovely City', artist: 'Calum Bowen', time: '2:42', audio: new Audio(LovelyCityMusic), songCover: LovelyCityCover},
        {title: 'Ba-Da-Ba', artist: '2 Mello', time: '3:56', audio: new Audio(BaDaBaMusic), songCover: BaDaBaCover}
    ];

export const casinoPlaylist = 
    [
        {title: 'The Villain I Appear To Be', artist: 'Connor Spiotto, Molly Pease', time: '3:06', audio: new Audio(TheVillainIAppearToBeMusic), songCover: TheVillainIAppearToBeCover},
        {title: 'Casino Night Zone', artist: 'The 8-Bit Big Band', time: '3:48', audio: new Audio(CasinoNightZoneMusic), songCover: CasinoNightZoneCover},
        {title: 'Blue Moon', artist: 'Billy Holiday', time: '3:26', audio: new Audio(BlueMoonMusic), songCover: BlueMoonCover},
        {title: 'Still Alive', artist: 'The 8-Bit Big Band', time: '3:17', audio: new Audio(StillAliveMusic), songCover: StillAliveCover},
        {title: 'It\'s Been a Long, Long Time', artist: 'Kitty Kallen, Harry James & His Orchestra', time: '3:25', audio: new Audio(LongTimeMusic), songCover: ItsBeenALongLongTimeCover},
        {title: 'Sing, Sing, Sing', artist: 'Benny Goodman, His Orchestra', time: '8:42', audio: new Audio(SingSingSingMusic), songCover: SingSingSingCover},
        {title: 'Feeling Good', artist: 'Nina Simone', time: '3:02', audio: new Audio(FeelingGoodMusic), songCover: FeelingGoodCover}
    ];

export const familyRoadTripPlaylist = 
    [
        {title: 'Oh, Pretty Woman', artist: 'Roy Orbison', time: '2:57', audio: new Audio(OhPrettyWomanMusic), songCover: OhPrettyWomanCover},
        {title: 'American Pie', artist: 'Don McLean', time: '8:32', audio: new Audio(AmericanPieMusic), songCover: AmericanPieCover},
        {title: 'Chiquitita', artist: 'ABBA', time: '5:26', audio: new Audio(ChiquititaMusic), songCover: ChiquititaCover},
        {title: 'Iko Iko', artist: 'The Belle Stars', time: '2:59', audio: new Audio(IkoIkoMusic), songCover: IkoIkoCover},
        {title: 'The Gambler', artist: 'Kenny Rogers', time: '3:31', audio: new Audio(TheGamblerMusic), songCover: TheGamblerCover},
        {title: '9 to 5', artist: 'Dolly Parton', time: '3:01', audio: new Audio(NineToFiveMusic), songCover: NineToFiveCover},
        {title: 'I Just Called To Say I Love You', artist: 'Stevie Wonder', time: '4:22', audio: new Audio(ILoveYouMusic), songCover: IJustCalledToSayILoveYouCover}
    ];

export const discoPlaylist = 
    [
        {title: 'Rosmarina', artist: 'Rosmarina, Moorea Masa & the Mood, Swatkins', time: '4:19', audio: new Audio(RosmarinaMusic), songCover: RosmarinaCover},
        {title: 'Peur des filles (Montmartre Remix)', artist: 'L\'Impératrice', time: '2:46', audio: new Audio(PeurDesFillesMusic), songCover: PeurDesFillesCover},
        {title: 'Get Lucky', artist: 'Daft Punk, Pharrell Williams, Nile Rodgers', time: '4:09', audio: new Audio(GetLuckyMusic), songCover: GetLuckyCover},
        {title: 'Let\'s Groove', artist: 'Earth, Wind & Fire', time: '5:40', audio: new Audio(LetsGrooveMusic), songCover: LetsGrooveCover},
        {title: 'Ace of Aces', artist: 'The Fearless Flyers', time: '2:05', audio: new Audio(AceOfAcesMusic), songCover: AceOfAcesCover},
        {title: 'Daddy Cool', artist: 'Boney M.', time: '3:28', audio: new Audio(DaddyCoolMusic), songCover: DaddyCoolCover},
        {title: 'Califas', artist: 'Miramar', time: '3:36', audio: new Audio(CalifasMusic), songCover: CalifasCover}
    ];