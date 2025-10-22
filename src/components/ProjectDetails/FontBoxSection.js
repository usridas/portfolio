import LargeContent from '../Content/LargeContent.js';
import TextContainer from '../Text/TextContainer.js';
import SmallHorizontalContent from '../Content/SmallHorizontalContent.js';
import './ProjectDetailBox.css';

export const FontBoxSection = ({number, title, text, isLarge, fonts}) => {

    const SingleFontBox = ({fontTitle, fontSubtitle, fontFamily, fontSize, fontWeight, fontStyle}) => {
        const fontText = 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz';
        return (
            <div className="fontBox">
                <TextContainer title={fontTitle} subtitle={fontSubtitle} text={fontText} fontFamily={fontFamily} textSize={fontSize} fontWeight={fontWeight} fontStyle={fontStyle}/>
            </div>
          );
    };

   const fullFontBox = 
        <div className='projectDetailContent'>
          {fonts?.map(font => (
            <SingleFontBox fontTitle={font.fontName} fontSubtitle={font.fontSubtitle} fontFamily={font.fontFamily} fontSize={font.fontSize} fontWeight={font.fontWeight} fontStyle={font.fontStyle}/>
          ))}
        </div>;

    const fontDescription = <TextContainer title={title} text={text} />;
    const fontSection =
        <div className='projectDetailContainer'>
            {fontDescription}
            {fullFontBox}
        </div>;

  if (isLarge) {
          return (
              <LargeContent title={number} content={fontSection} titleSize={'128'}/>
          );
      }
      else
          return (
              <SmallHorizontalContent title={number} description={fontDescription} content={fullFontBox} titleSize={'64'}/>
          );
}

export default FontBoxSection;
