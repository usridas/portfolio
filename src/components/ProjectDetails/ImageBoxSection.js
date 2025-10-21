import LargeContent from '../Content/LargeContent.js';
import TextContainer from '../Text/TextContainer.js';
import SmallHorizontalContent from '../Content/SmallHorizontalContent.js';
import './ProjectDetailBox.css';

export const ImageBoxSection = ({title, text, isLarge}) => {

    const imageDescription = <TextContainer title={title} text={text} />;
    const imageBox = <div className='imageBox'/>
    const imageSection =
        <div className='projectDetailContainer'>
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
