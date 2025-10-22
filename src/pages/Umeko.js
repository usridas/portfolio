import ColorBoxSection from '../components/ProjectDetails/ColorBoxSection';
import FontBoxSection from '../components/ProjectDetails/FontBoxSection';
import ImageBoxSection from '../components/ProjectDetails/ImageBoxSection';
import LargeContent from '../components/Content/LargeContent.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide.js';
import logo1 from './images/Umeko/logo1.png';
import logo2 from './images/Umeko/logo2.png';
import logo3 from './images/Umeko/logo3.png';
import brandAsset1 from './images/Umeko/brandAsset1.png';
import brandAsset2 from './images/Umeko/brandAsset2.png';
import brandAsset3 from './images/Umeko/brandAsset3.png';
import mockup1 from './images/Umeko/mockup1.png';
import mockup2 from './images/Umeko/mockup2.png';
import mockup3 from './images/Umeko/mockup3.png';
import mockup4 from './images/Umeko/mockup4.png';
import mockup5 from './images/Umeko/mockup5.png';

export const Umeko = ({}) => {

  const { isLarge } = useScreenResolution();
  const content = 'Umeko is a fun, light-hearted Japanese style cafe which sources tea from Japan. They serve classic teas, as well as unique blends, and boba to cater to both younger and older aficionados. The pastel, calm aesthetic is inspired by the Japanese plum (ume) and blossom. Umeko means ‘plum child’ in Japanese and plum blossoms are associated with good fortune and health.\n\n*This is a fictional business project made for design purposes.';
  const titleContent = isLarge ? <LargeContent title={'UMEKO'} content={<p>{content}</p>}/> : <SmallContent title={'UMEKO'} content={<p>{content}</p>}/>;

  const colors = [
    {colorName: 'CHERRY BLOSSOM', color: '#FDDBDA', text: 'Hex Code: #FDDBDA\nRGB: 253 219 218\nCMYK: 0% 16.29% 7.55% 0%'},
    {colorName: 'KIRBY', color: '#F693B0', text: 'Hex Code: #F693B0\nRGB: 246 17 176\nCMYK: 0% 53.08% 8.67% 0%'},
    {colorName: 'RISING SUN', color: '#F53A31', text: 'Hex Code: #F53A31\nRGB: 245 58 49\nCMYK: 0% 91.28% 86.97% 0%'},
    {colorName: 'PLUM', color: '#5440AC', text: 'Hex Code: #5440AC\nRGB: 84 64 172\nCMYK: 79.3% 84.8% 0% 0%'},
  ];

  const fonts = [
    {fontName: 'RAMPART ONE REGULAR', fontSubtitle: 'Primary font', fontFamily: `"rampart-one", sans-serif`, fontWeight: '400', fontStyle: 'normal', fontSize: '32'},
    {fontName: 'ROUNDED M+ 1C MEDIUM', fontSubtitle: 'Secondary font', fontFamily: `"m-plus-rounded-1c", sans-serif`, fontWeight: '500', fontStyle: 'normal', fontSize: '32'}  
  ]

  const imagePaths = [
    logo1,
    logo2,
    logo3,
    brandAsset1,
    brandAsset2,
    brandAsset3,
    mockup1,
    mockup2,
    mockup3,
    mockup4,
    mockup5
  ];

  const titles = [
    "PRIMARY LOGO",
    "SECONDARY LOGO",
    "TERTIARY LOGO",
    "BRAND ASSET 1",
    "BRAND ASSET 2",
    "ILLUSTRATIONS",
    "MOCKUP",
    "MOCKUP",
    "MOCKUP",
    "MOCKUP",
    "MOCKUP"
  ]

  const imageSlide = <ImageSlide imagePaths={imagePaths} titles={titles}/>;

  return (
        <div className="sectionContainer">
            {titleContent}
            <hr className='divider'/>
            <ColorBoxSection number={'1'} title={'COLORS'} text={'Used cute, romantic pastels to create an inviting aesthetic. Pinks and purples will pay homage to the plum and plum blossom and give almost a 90s anime/vaporwave feel.'} isLarge={isLarge} colors = {colors}/>
            <FontBoxSection number={'2'} title={'TYPEFACES'} text={'These typefaces are bubbly, yet easy to read, to welcome an audience of all ages. The typeface also pairs well with the cute cat logo.'} isLarge={isLarge} fonts={fonts}/>
            <ImageBoxSection number={'3'} title={'IMAGES'} text={'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'} content={imageSlide} isLarge={isLarge}/>
        </div>
    );
}

export default Umeko;
