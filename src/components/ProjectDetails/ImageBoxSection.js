import LargeContent from '../LargeContent';
import TextContainer from '../TextContainer';
import './ProjectDetailBox.css';

export const ImageBoxSection = ({title, text}) => {

    const imageDescription = <TextContainer title={title} text={text} />;
    const imageBox = <div className='largeImageBox'/>
    const imageSection =
        <div className='largeProjectDetailContainer'>
            {imageDescription}
            {imageBox}
        </div>;

  return (
        <LargeContent title={'3'} content={imageSection} titleSize={'128'}/>
    );
}

export default ImageBoxSection;
