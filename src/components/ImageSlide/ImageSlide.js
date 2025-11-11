import './ImageSlide.css';
import { useState } from 'react';
import { useScreenResolution } from '../../utils/ScreenSize.tsx';


export const ImageSlide = ({titles, descriptions, imagePaths, imageTexts, imageLinks, imageSizes, setTab}) => {

  const [imageIndex, setImageIndex] = useState(0);

   const { isSmall } = useScreenResolution();

  function onBackClick() {
    if (imageIndex > 0 && imageIndex < imagePaths.length) {
      setImageIndex(imageIndex-1);
    } else {
      setImageIndex(imagePaths.length - 1);
    }
  }

  function onNextClick() {
    if (imageIndex === imagePaths.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex+1);
    }
  }

  function onImageClick() {
    setTab(imageLinks[imageIndex]);
  }

  return (
    <div className="imageSlideContainer">
        {titles &&
          <div className='imageSlideTextContainer'>
              <h3>{titles[imageIndex]}</h3>
              {descriptions && <h4 style={{textAlign: 'end'}}>{descriptions[imageIndex]}</h4>}
          </div>
        }
        <div className='imageSlideContainer'>
          <div className='imageBox' style={{backgroundImage: `url(${imagePaths[imageIndex]})`, backgroundSize: `${imageSizes ? imageSizes[imageIndex] : '100%'}`}}>
            {imageLinks && !isSmall && <a className='imageSlideLink' onClick={onImageClick}>{imageTexts[imageIndex]}</a>}
            {imageLinks && isSmall && <a className='imageSlideLinkSmallHover' onClick={onImageClick}>{imageTexts[imageIndex]}</a>}
          </div>
        </div>
        {imagePaths.length > 1 &&
          <div className='imageSlideTextContainer'>
            <a onClick={()=>onBackClick()}>BACK</a>
            <a onClick={()=>onNextClick()}>NEXT</a>
          </div>
        }
    </div>
  );
}

export default ImageSlide;
