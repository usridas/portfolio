import './ImageSlide.scss';
import { useState } from 'react';
import { useScreenResolution } from '../../utils/ScreenSize.tsx';
import Button from '../Button/Button.js';
import { useNavigate } from 'react-router-dom';


export const ProjectPreview = ({imageSlideProps}) => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

   const { isXSmall, isSmall } = useScreenResolution();
   const isMobileVar = isXSmall || isSmall;

  function onBackClick() {
    if (imageIndex > 0 && imageIndex < imageSlideProps.length) {
      setImageIndex(imageIndex-1);
    } else {
      setImageIndex(imageSlideProps.length - 1);
    }
  }

  function onNextClick() {
    if (imageIndex === imageSlideProps.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex+1);
    }
  }

  return (
    <div className="projectPreviewContainer">
        {imageSlideProps[imageIndex].title &&
            <div className='projectPreviewTitleContainer'>
                <h3>{imageSlideProps[imageIndex].title}</h3>
                {imageSlideProps[imageIndex].description && <h4 style={{textAlign: 'end'}}>{imageSlideProps[imageIndex].description}</h4>}
            </div>  
        }
        <div className='imageBox' style={{backgroundImage: `url(${imageSlideProps[imageIndex].imagePath})`, backgroundSize: `${imageSlideProps[imageIndex].imageSize ? imageSlideProps[imageIndex].imageSize : 'contain'}`}}>
          {imageSlideProps[imageIndex].tags}
          {imageSlideProps[imageIndex].imageLink && !isMobileVar && <button className='imageSlideLink' tabIndex={0} onClick={()=>{navigate(imageSlideProps[imageIndex].imageLink)}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate(imageSlideProps[imageIndex].imageLink)}}}>{imageSlideProps[imageIndex].imageText}</button>}
          {imageSlideProps[imageIndex].imageLink && isMobileVar && <button className='imageSlideLinkSmallHover' onClick={()=>{navigate(imageSlideProps[imageIndex].imageLink)}}>{imageSlideProps[imageIndex].imageText}</button>}
        </div>
        {imageSlideProps[imageIndex].caption && <p>{imageSlideProps[imageIndex].caption}</p>}
        {imageSlideProps.length > 1 &&
          <div className='imageSlideTextContainer'>
            <Button type='Secondary' text='BACK' onClick={onBackClick}/>
            <div className='circleContainer'>
              {imageSlideProps?.map((item, index) => (
                  <div className='circle' style={{backgroundColor: imageIndex === index ? '#33322A' : '#E6E5E0'}}/>
              ))}
            </div>
            <Button type='Secondary' text='NEXT' onClick={(onNextClick)}/>
          </div>
        } 
    </div>
  );
}

export default ProjectPreview;
