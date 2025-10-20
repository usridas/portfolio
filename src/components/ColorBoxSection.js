import LargeContent from './LargeContent';
import LargeTextContainer from './LargeTextContainer';
import './ProjectDetailBox.css';

export const ColorBoxSection = ({title, text}) => {
    const SingleColorBox = ({colorTitle, colorText, color}) => {
        return (
            <div className="fullLargeColorBox" style={{background: `${color}`}}>
                <h3>{colorTitle}</h3>
                <p className='largeColorBoxText'>{colorText}</p>
            </div>
        );
    };

    const colorDescription = <LargeTextContainer title={title} text={text} />;
    const colorBox1 = <SingleColorBox colorTitle={'COLOR NAME'} colorText={'Hex Code: #FFFFFF\nRGB: 255 255 255\nCMYK: 50% 50% 50% 50%'} color={'#C3BFFF'}/>
    const colorBox2 = <SingleColorBox colorTitle={'COLOR NAME'} colorText={'Hex Code: #FFFFFF\nRGB: 255 255 255\nCMYK: 50% 50% 50% 50%'} color={'#C3BFFF'}/>
    const colorBox3 = <SingleColorBox colorTitle={'COLOR NAME'} colorText={'Hex Code: #FFFFFF\nRGB: 255 255 255\nCMYK: 50% 50% 50% 50%'} color={'#C3BFFF'}/>
    const colorBox4 = <SingleColorBox colorTitle={'COLOR NAME'} colorText={'Hex Code: #FFFFFF\nRGB: 255 255 255\nCMYK: 50% 50% 50% 50%'} color={'#C3BFFF'}/>
    const colorSection =
        <div className='largeProjectDetailContainer'>
            {colorDescription}
            <div className='largeProjectDetailContent'>
                {colorBox1}
                {colorBox2}
                {colorBox3}
                {colorBox4}
            </div>
        </div>;

  return (
        <LargeContent title={'1'} content={colorSection} titleSize={'128'}/>
    );
}

export default ColorBoxSection;
