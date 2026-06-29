import './ImageSlide.scss';
import { useState, useEffect } from 'react';
import Button from '../Button/Button.js';
import Spinner from '../Spinner/Spinner.js';


export const ImageSlide = ({imageSlideProps, imageMaxWidth=false}) => {

  const [imageIndex, setImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = imageSlideProps[imageIndex].imagePath;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [imageSlideProps, imageIndex]);

  return (        
    <div className="imageSlideContainer" style={{maxWidth: imageMaxWidth ? '700px' : 'none'}}>
        {imageSlideProps[imageIndex].title &&
          <div className='imageSlideTitleContainer'>
              <h3>{imageSlideProps[imageIndex].title}</h3>
              {imageSlideProps[imageIndex].description && <h4 style={{textAlign: 'end'}}>{imageSlideProps[imageIndex].description}</h4>}
          </div>
        }
        {isLoading && <div className='imageBoxLoading'><Spinner /></div>}
        <div className='imageBox' style={{display: isLoading ? 'none':'', backgroundImage: `url(${imageSlideProps[imageIndex].imagePath})`, backgroundSize: `${imageSlideProps[imageIndex].imageSize ? imageSlideProps[imageIndex].imageSize : 'contain'}`}}/>
        {imageSlideProps[imageIndex].caption && <p>{imageSlideProps[imageIndex].caption}</p>}
        {imageSlideProps.length > 1 &&
          <div className='imageSlideTextContainer'>
            <Button type='Secondary' text='Back' onClick={onBackClick}/>
            <div className='circleContainer'>
              {imageSlideProps?.map((item, index) => (
                  <div className='circle' style={{backgroundColor: imageIndex === index ? '#33322A' : '#E6E5E0'}}/>
              ))}
            </div>
            <Button type='Secondary' text='Next' onClick={(onNextClick)}/>
          </div>
        } 
    </div>
  );
}

export default ImageSlide;
