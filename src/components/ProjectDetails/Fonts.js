import TextContainer from '../Text/TextContainer.js';
import './ProjectDetailBox.css';

export const Fonts = ({fonts, text}) => {

    const fontText = 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz';

    const fullFontBox = 
        <div className='projectDetailContent'>
            {fonts?.map(font => (
            <div className="fontBox">
                <TextContainer title={font.fontName} subtitle={font.fontSubtitle} text={fontText} fontFamily={font.fontFamily} textSize={font.fontSize} fontWeight={font.fontWeight} fontStyle={font.fontStyle}/>
            </div>
            ))}
        </div>;

    const fontSection =
        <div className='projectDetailContainer'>
            <p>{text}</p>
            {fullFontBox}
        </div>;

    return (fontSection);
}

export default Fonts;
