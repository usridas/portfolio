import LargeContent from '../LargeContent';
import SmallHorizontalContent from '../SmallHorizontalContent.js';
import TextContainer from '../TextContainer';
import './ProjectDetailBox.css';

export const ColorBoxSection = ({title, text, isLarge}) => {
    const SingleColorBox = ({colorTitle, colorText, color}) => {
        return (
            <div className="fullLargeColorBox" style={{background: `${color}`}}>
                <h3>{colorTitle}</h3>
                <p className='largeColorBoxText'>{colorText}</p>
            </div>
        );
    };

    const colorDescription = <TextContainer title={title} text={text} />;
    const colorBox1 = <SingleColorBox colorTitle={'COLOR NAME'} colorText={'Hex Code: #FFFFFF\nRGB: 255 255 255\nCMYK: 50% 50% 50% 50%'} color={'#C3BFFF'}/>
    const colorBox2 = <SingleColorBox colorTitle={'COLOR NAME'} colorText={'Hex Code: #FFFFFF\nRGB: 255 255 255\nCMYK: 50% 50% 50% 50%'} color={'#C3BFFF'}/>
    const colorBox3 = <SingleColorBox colorTitle={'COLOR NAME'} colorText={'Hex Code: #FFFFFF\nRGB: 255 255 255\nCMYK: 50% 50% 50% 50%'} color={'#C3BFFF'}/>
    const colorBox4 = <SingleColorBox colorTitle={'COLOR NAME'} colorText={'Hex Code: #FFFFFF\nRGB: 255 255 255\nCMYK: 50% 50% 50% 50%'} color={'#C3BFFF'}/>
    const fullColorBox =
        <div className='largeProjectDetailContent'>
            {colorBox1}
            {colorBox2}
            {colorBox3}
            {colorBox4}
        </div>;
    const colorSection =
        <div className='largeProjectDetailContainer'>
            {colorDescription}
            {fullColorBox}
        </div>;

    if (isLarge) {
        return (
            <LargeContent title={'1'} content={colorSection} titleSize={'128'}/>
        );
    }
    else
        return (
            <SmallHorizontalContent title={'1'} description={colorDescription} content={fullColorBox}/>
        );
    
}

export default ColorBoxSection;
