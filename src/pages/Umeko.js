import ColorBoxSection from '../components/ProjectDetails/ColorBoxSection';
import FontBoxSection from '../components/ProjectDetails/FontBoxSection';
import ImageBoxSection from '../components/ProjectDetails/ImageBoxSection';
import LargeContent from '../components/LargeContent';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/SmallContent.js';

export const Umeko = ({}) => {

  const { isLarge } = useScreenResolution();
  const content = 'Umeko is a fun, light-hearted Japanese style cafe which sources tea from Japan. They serve classic teas, as well as unique blends, and boba to cater to both younger and older aficionados. The pastel, calm aesthetic is inspired by the Japanese plum (ume) and blossom. Umeko means ‘plum child’ in Japanese and plum blossoms are associated with good fortune and health.\n\n*This is a fictional business project made for design purposes.';
  const titleContent = isLarge ? <LargeContent title={'UMEKO'} content={<p>{content}</p>}/> : <SmallContent title={'UMEKO'} content={<p>{content}</p>}/>;
  return (
        <div className="largeSectionContainer">
            {titleContent}
            <hr className='divider'/>
            <ColorBoxSection title={'COLORS'} text={'Used cute, romantic pastels to create an inviting aesthetic. Pinks and purples will pay homage to the plum and plum blossom and give almost a 90s anime/vaporwave feel.'} isLarge={isLarge}/>
            <FontBoxSection title={'TYPEFACES'} text={'These typefaces are bubbly, yet easy to read, to welcome an audience of all ages. The typeface also pairs well with the cute cat logo.'}/>
            <ImageBoxSection title={'IMAGES'} text={'These typefaces are bubbly, yet easy to read, to welcome an audience of all ages. The typeface also pairs well with the cute cat logo.'}/>
        </div>
    );
}

export default Umeko;
