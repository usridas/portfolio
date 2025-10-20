import LargeContent from './LargeContent';
import LargeTextContainer from './LargeTextContainer';
import './ProjectDetailBox.css';

export const FontBoxSection = ({title, text}) => {

    const SingleFontBox = ({fontTitle, fontSubtitle}) => {
        const fontText = 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz';
        return (
            <div className="fullLargeFontBox">
                <LargeTextContainer title={fontTitle} subtitle={fontSubtitle} text={fontText}/>
            </div>
          );
    };

   

    const fontDescription = <LargeTextContainer title={title} text={text} />;
    const fontBox1 = <SingleFontBox fontTitle={'TYPEFACE NAME'} fontSubtitle={'Use for titles and large text'}/>;
    const fontBox2 = <SingleFontBox fontTitle={'TYPEFACE NAME'} fontSubtitle={'Use for titles and large text'}/>;
    const fontSection =
        <div className='largeProjectDetailContainer'>
            {fontDescription}
            <div className='largeProjectDetailContent'>
                {fontBox1}
                {fontBox2}
            </div>
        </div>;

  return (
        <LargeContent title={'2'} content={fontSection} titleSize={'128'}/>
    );
}

export default FontBoxSection;
