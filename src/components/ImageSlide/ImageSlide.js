import './ImageSlide.css';
import { useState } from 'react';


export const ImageSlide = ({title, timeFrame, imagePaths, imageTexts, imageLinks, setTab}) => {

  const [imageIndex, setImageIndex] = useState(0);

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
    <div className="fullImageSlideContainer">
        <div className='imageSlideTextContainer'>
            <h3>{title}</h3>
            <h4>{timeFrame}</h4>
        </div>
        <div className='imageSlideContainer'>
          <div className='largeImageBox' style={{backgroundImage: `url(${imagePaths[imageIndex]})`}}>
            <a className='imageSlideLink' onClick={onImageClick}>{imageTexts[imageIndex]}</a>
          </div>
        </div>
        <div className='imageSlideTextContainer'>
            <a onClick={()=>onBackClick()}>BACK</a>
            <a onClick={()=>onNextClick()}>NEXT</a>
        </div>
    </div>
  );
}

export default ImageSlide;
