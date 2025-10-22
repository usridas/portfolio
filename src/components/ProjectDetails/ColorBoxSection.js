import LargeContent from '../Content/LargeContent.js';
import SmallHorizontalContent from '../Content/SmallHorizontalContent.js';
import TextContainer from '../Text/TextContainer.js';
import './ProjectDetailBox.css';

export const ColorBoxSection = ({number, title, text, isLarge, colors}) => {
    const SingleColorBox = ({colorTitle, colorText, color}) => {
        return (
            <div className="colorBox" style={{background: `${color}`}}>
                <h3>{colorTitle}</h3>
                <p>{colorText}</p>
            </div>
        );
    };

    const fullColorBox = 
        <div className='projectDetailContent'>
          {colors?.map(color => (
            <SingleColorBox colorTitle={color.colorName} colorText={color.text} color={color.color}/>
          ))}
        </div>;


    const colorDescription = <TextContainer title={title} text={text} />;
    const colorSection =
        <div className='projectDetailContainer'>
            {colorDescription}
            {fullColorBox}
        </div>;

    if (isLarge) {
        return (
            <LargeContent title={number} content={colorSection} titleSize={'128'}/>
        );
    }
    else
        return (
            <SmallHorizontalContent title={number} description={colorDescription} content={fullColorBox} titleSize={'64'}/>
        );
    
}

export default ColorBoxSection;
