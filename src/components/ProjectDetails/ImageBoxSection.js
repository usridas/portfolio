import LargeContent from '../LargeContent';
import TextContainer from '../TextContainer';
import SmallHorizontalContent from '../SmallHorizontalContent.js';
import './ProjectDetailBox.css';

export const ImageBoxSection = ({title, text, isLarge}) => {

    const imageDescription = <TextContainer title={title} text={text} />;
    const imageBox = <div className='largeImageBox'/>
    const imageSection =
        <div className='largeProjectDetailContainer'>
            {imageDescription}
            {imageBox}
        </div>;

  if (isLarge) {
            return (
                <LargeContent title={'3'} content={imageSection} titleSize={'128'}/>
            );
        }
        else
            return (
                <SmallHorizontalContent title={'3'} description={imageDescription} content={imageBox} titleSize={'64'}/>
            );
}

export default ImageBoxSection;
