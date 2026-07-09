import TextContainer from '../Text/TextContainer.js';
import './ProjectDetailBox.css';

export const Fonts = ({fonts, text, showTitle=false}) => {

    const fontText = 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz';
    const allCapsFontText = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';

    const fullFontBox = 
        <div className='projectDetailContent'>
            {showTitle && <h3 style={{marginBottom: '4px'}}>Typography</h3>}
            {text && <p>{text}</p>}
            {fonts?.map(font => (
            <div className="fontBox">
                <TextContainer title={font.fontName} subtitle={font.fontSubtitle} text={font.allCaps ? allCapsFontText : fontText} fontFamily={font.fontFamily} textSize={font.fontSize} fontWeight={font.fontWeight} fontStyle={font.fontStyle}/>
            </div>
            ))}
        </div>;

    return (fullFontBox);
}

export default Fonts;
