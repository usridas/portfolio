import './ImageSlide.css';
import { useState } from 'react';
import { useScreenResolution } from '../../utils/ScreenSize.tsx';


export const ImageSlide = ({imageSlideProps, setTab}) => {

  const [imageIndex, setImageIndex] = useState(0);

   const { isSmall } = useScreenResolution();

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

  function onImageClick() {
    setTab(imageSlideProps[imageIndex].imageLink);
  }

  return (
    <div className="imageSlideContainer">
        {imageSlideProps[imageIndex].title &&
          <div className='imageSlideTextContainer'>
              <h3>{imageSlideProps[imageIndex].title}</h3>
              {imageSlideProps[imageIndex].description && <h4 style={{textAlign: 'end'}}>{imageSlideProps[imageIndex].description}</h4>}
          </div>
        }
        <div className='imageBox' style={{backgroundImage: `url(${imageSlideProps[imageIndex].imagePath})`, backgroundSize: `${imageSlideProps[imageIndex].imageSize ? imageSlideProps[imageIndex].imageSize : 'contain'}`}}>
          {imageSlideProps[imageIndex].imageLink && !isSmall && <a className='imageSlideLink' onClick={onImageClick}>{imageSlideProps[imageIndex].imageText}</a>}
          {imageSlideProps[imageIndex].imageLink && isSmall && <a className='imageSlideLinkSmallHover' onClick={onImageClick}>{imageSlideProps[imageIndex].imageText}</a>}
        </div>
        {imageSlideProps[imageIndex].caption && <p>{imageSlideProps[imageIndex].caption}</p>}
        {imageSlideProps.length > 1 &&
          <div className='imageSlideTextContainer'>
            <a onClick={()=>onBackClick()}>BACK</a>
            <a onClick={()=>onNextClick()}>NEXT</a>
          </div>
        }
    </div>
  );
}

export default ImageSlide;
