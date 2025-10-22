import LargeContent from '../Content/LargeContent.js';
import TextContainer from '../Text/TextContainer.js';
import SmallHorizontalContent from '../Content/SmallHorizontalContent.js';
import './ProjectDetailBox.css';

export const ImageBoxSection = ({title, text, content, isLarge}) => {

    const imageDescription = <TextContainer title={title} text={text} />;
    const imageSection =
        <div className='projectDetailContainer'>
            {imageDescription}
            {content}
        </div>;

  if (isLarge) {
            return (
                <LargeContent title={'3'} content={imageSection} titleSize={'128'}/>
            );
        }
        else
            return (
                <SmallHorizontalContent title={'3'} description={imageDescription} content={content} titleSize={'64'}/>
            );
}

export default ImageBoxSection;
