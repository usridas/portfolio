import ColorBoxSection from '../components/ProjectDetails/ColorBoxSection';
import FontBoxSection from '../components/ProjectDetails/FontBoxSection';
import ImageBoxSection from '../components/ProjectDetails/ImageBoxSection';
import LargeContent from '../components/Content/LargeContent.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/Content/SmallContent.js';

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
    {fontName: 'RAMPART ONE REGULAR', fontSubtitle: 'Use for all text', fontFamily: 'Rampart One', fontSize: '32'}
  ]

  return (
        <div className="sectionContainer">
            {titleContent}
            <hr className='divider'/>
            <ColorBoxSection title={'COLORS'} text={'Used cute, romantic pastels to create an inviting aesthetic. Pinks and purples will pay homage to the plum and plum blossom and give almost a 90s anime/vaporwave feel.'} isLarge={isLarge} colors = {colors}/>
            <FontBoxSection title={'TYPEFACES'} text={'These typefaces are bubbly, yet easy to read, to welcome an audience of all ages. The typeface also pairs well with the cute cat logo.'} isLarge={isLarge} fonts={fonts}/>
            <ImageBoxSection title={'IMAGES'} text={'These typefaces are bubbly, yet easy to read, to welcome an audience of all ages. The typeface also pairs well with the cute cat logo.'} isLarge={isLarge}/>
        </div>
    );
}

export default Umeko;
