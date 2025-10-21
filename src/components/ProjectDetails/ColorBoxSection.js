import LargeContent from '../LargeContent';
import SmallHorizontalContent from '../SmallHorizontalContent.js';
import TextContainer from '../TextContainer';
import './ProjectDetailBox.css';

export const ColorBoxSection = ({title, text, isLarge, colors}) => {
    const SingleColorBox = ({colorTitle, colorText, color}) => {
        return (
            <div className="fullLargeColorBox" style={{background: `${color}`}}>
                <h3>{colorTitle}</h3>
                <p className='largeColorBoxText'>{colorText}</p>
            </div>
        );
    };

    const fullColorBox = 
        <div className='largeProjectDetailContent'>
          {colors?.map(color => (
            <SingleColorBox colorTitle={color.colorName} colorText={color.text} color={color.color}/>
          ))}
        </div>;


    const colorDescription = <TextContainer title={title} text={text} />;
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
            <SmallHorizontalContent title={'1'} description={colorDescription} content={fullColorBox} titleSize={'64'}/>
        );
    
}

export default ColorBoxSection;
