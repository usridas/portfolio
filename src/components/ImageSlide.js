import './ImageSlide.css';
import { useState } from 'react';


export const ImageSlide = ({title, timeFrame, imagePaths, imageTexts}) => {

  // const imagePaths = [
  //   image1,
  //   image2,
  //   image3
  // ];

  // const imageText = [
  //   "THIS IS IMAGE 1",
  //   "THIS IS IMAGE 2",
  //   "THIS IS IMAGE 3"
  // ]

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

  return (
    <div className="fullImageSlideContainer">
        <div className='imageSlideTextContainer'>
            <h3>{title}</h3>
            <h4>{timeFrame}</h4>
        </div>
        <div className='imageSlideContainer'>
          <div className='imageSlide' id="imageSlide" style={{backgroundImage: `url(${imagePaths[imageIndex]})`}}>
            <a className='imageSlideLink'>{imageTexts[imageIndex]}</a>
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
