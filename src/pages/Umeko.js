import './Pages.scss';
import ImageSlide from '../components/Images/ImageSlide.js';
import Button from '../components/Button/Button.js';
import {
  UmekoLogo1,
  UmekoLogo2,
  UmekoLogo3,
  UmekoBrandAsset1,
  UmekoBrandAsset2,
  UmekoBrandAsset3,
  UmekoMockup1,
  UmekoMockup2,
  UmekoMockup3,
  UmekoMockup4,
  UmekoMockup5
} from '../assets/images';
import ColorPalette from '../components/ProjectDetails/ColorPalette.js';
import Fonts from '../components/ProjectDetails/Fonts.js';
import Grid from '../components/Grid/Grid.js';

export const Umeko = () => {

  const content = <div className='columnWith24Gap'>
    <p style={{marginBottom: '24px'}}>{'Umeko is a fun, light-hearted Japanese style cafe which sources tea from Japan. They serve classic teas, as well as unique blends, and boba to cater to both younger and older aficionados. The pastel, calm aesthetic is inspired by the Japanese plum (ume) and blossom. Umeko means ‘plum child’ in Japanese and plum blossoms are associated with good fortune and health.\n\n*This is a fictional business project made for design purposes.'}</p>
    <Button type='Primary' text='See full project on Behance' link={'https://www.behance.net/gallery/242576285/Umeko-Brand-Identity-and-Guidelines'}/>
  </div>

  const colors = [
    {colorName: 'Cherry blossom', color: '#FDDBDA', text: 'Hex Code: #FDDBDA\nRGB: 253 219 218\nCMYK: 0% 16.29% 7.55% 0%'},
    {colorName: 'Kirby', color: '#F693B0', text: 'Hex Code: #F693B0\nRGB: 246 17 176\nCMYK: 0% 53.08% 8.67% 0%'},
    {colorName: 'Rising sun', color: '#F53A31', text: 'Hex Code: #F53A31\nRGB: 245 58 49\nCMYK: 0% 91.28% 86.97% 0%', textColor: 'light'},
    {colorName: 'Plum', color: '#5440AC', text: 'Hex Code: #5440AC\nRGB: 84 64 172\nCMYK: 79.3% 84.8% 0% 0%', textColor: 'light'},
  ];

  const fonts = [
    {fontName: 'Rampart One Regular', fontSubtitle: 'Primary font', fontFamily: `"rampart-one", sans-serif`, fontWeight: '400', fontStyle: 'normal', fontSize: '32'},
    {fontName: 'Rounded M+ 1C Medium', fontSubtitle: 'Secondary font', fontFamily: `"m-plus-rounded-1c", sans-serif`, fontWeight: '500', fontStyle: 'normal', fontSize: '32'}  
  ];

  const imageSlideProps = [
    {imagePath: UmekoLogo1, title: "Primary logo"},
    {imagePath: UmekoLogo2, title: "Secondary logo"},
    {imagePath: UmekoLogo3, title: "Tertiary logo"},
    {imagePath: UmekoBrandAsset1, title: "Brand asset 1"},
    {imagePath: UmekoBrandAsset2, title: "Brand asset 2"},
    {imagePath: UmekoBrandAsset3, title: "Illustrations"},
    {imagePath: UmekoMockup1, title: "Mockup"},
    {imagePath: UmekoMockup2, title: "Mockup"},
    {imagePath: UmekoMockup3, title: "Mockup"},
    {imagePath: UmekoMockup4, title: "Mockup"},
    {imagePath: UmekoMockup5, title: "Mockup"},
  ];

  const imageSlide = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}><ImageSlide imageSlideProps={imageSlideProps} imageMaxWidth={true}/></div>;

  const gridArray = [
        {title: 'Overview', content: content, rowType: 'Column'},
        {title: 'Colors', content: <ColorPalette colors={colors} text={'Used cute, romantic pastels to create an inviting aesthetic. Pinks and purples will pay homage to the plum and plum blossom and give almost a 90s anime/vaporwave feel.'}/>},
        {title: 'Fonts', content: <Fonts fonts={fonts} text={'These typefaces are bubbly, yet easy to read, to welcome an audience of all ages. The typeface also pairs well with the cute cat logo.'}/>},
        {title: 'Images', content: imageSlide}
  ]

  return (
    <div>
        <h1 className='title'>Umeko</h1>
        <Grid gridProps={gridArray}/>
    </div>
  );
}

export default Umeko;
