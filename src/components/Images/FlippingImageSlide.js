import './ImageSlide.scss';
import { useState, useEffect } from 'react';
import Button from '../Button/Button.js';
import Spinner from '../Spinner/Spinner.js';
import { isMobile, toSentenceCase } from '../../utils/utils.js';
import { Rotate } from '../../assets/images/index.js';


export const FlippingImageSlide = ({imageSlideProps, imageMaxWidth=false}) => {

  const [imageIndex, setImageIndex] = useState(0);
  const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);


  function onBackClick() {
    if (imageIndex > 0 && imageIndex < imageSlideProps.length) {
      setImageIndex(imageIndex-1);
      imageSlideProps[imageIndex].flipButtonFunction(false);
    } else {
      setImageIndex(imageSlideProps.length - 1);
      imageSlideProps[imageIndex].flipButtonFunction(false);
    }
  }

  function onNextClick() {
    if (imageIndex === imageSlideProps.length - 1) {
      setImageIndex(0);
      imageSlideProps[imageIndex].flipButtonFunction(false);
    } else {
      setImageIndex(imageIndex+1);
      imageSlideProps[imageIndex].flipButtonFunction(false);
    }
  }

  useEffect(() => {
    setIsLoading1(true);
    setIsLoading2(true);
    const img1 = new Image();
    const img2 = new Image();
    img1.src = imageSlideProps[imageIndex].imagePath1;
    img2.src = imageSlideProps[imageIndex].imagePath2;
    img1.onload = () => setIsLoading1(false);
    img1.onerror = () => setIsLoading1(false);
    img2.onload = () => setIsLoading2(false);
    img2.onerror = () => setIsLoading2(false);
  }, [imageSlideProps, imageIndex]);

  return (        
    <div className="imageSlideContainer" style={{maxWidth: imageMaxWidth ? '700px' : 'none'}}>
        {imageSlideProps[imageIndex].title1 &&
        <div style={{display: 'flex', flexDirection: 'row', width: 'stretch', justifyContent: 'space-between', alignItems: 'center'}}>
            <h3>{imageSlideProps[imageIndex].flipButtonState ? imageSlideProps[imageIndex].title2 : imageSlideProps[imageIndex].title1}</h3>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px'}}>
                <img src={Rotate} style={{width: '24px'}} alt=''/>
                {!isMobile() && <h4>Hover over image to see more</h4>}
                {isMobile() && <h4>Tap image to see more</h4>}
            </div>
        </div>
        }
        {/* {(isLoading1 || isLoading2) && <div className='flippingImageBoxLoading'><Spinner /></div>} */}
        <div className='imageSlideFlipCard' onMouseOver={()=>{imageSlideProps[imageIndex].flipButtonFunction(true)}} onTouchEnd={(event)=>{event.preventDefault(); imageSlideProps[imageIndex].flipButtonFunction(!imageSlideProps[imageIndex].flipButtonState)}} onMouseLeave={()=>{imageSlideProps[imageIndex].flipButtonFunction(false)}}>
            <div className={imageSlideProps[imageIndex].flipButtonState ? 'imageSlideFlipCardInner imageSlideIsFlipped hover-target' : 'imageSlideFlipCardInner hover-target'}>
                <div className='imageSlideFlipCardFront'>
                    {isLoading1 && <div className='flippingImageBoxLoading'><Spinner /></div>}
                    {!isLoading1 && <img onLoad={()=>setIsLoading1(false)} alt={toSentenceCase(imageSlideProps[imageIndex].title1)} aria-label={toSentenceCase(imageSlideProps[imageIndex].title1)} className='plainImageFlip' src={imageSlideProps[imageIndex].imagePath1} style={isLoading1 ? { display: 'none' } : {maxWidth: imageMaxWidth ? '700px' : 'none'}}/>}
                </div>
                <div className='imageSlideFlipCardBack'>
                    {isLoading2 && <div className='flippingImageBoxLoading'><Spinner /></div>}
                    {!isLoading2 && <img onLoad={()=>setIsLoading2(false)} alt={toSentenceCase(imageSlideProps[imageIndex].title2)} aria-label={toSentenceCase(imageSlideProps[imageIndex].title2)} className='plainImageFlip' src={imageSlideProps[imageIndex].imagePath2} style={isLoading2 ? { display: 'none' } : {maxWidth: imageMaxWidth ? '700px' : 'none'}}/>}
                </div>
            </div>
        </div>
        {(imageSlideProps[imageIndex].flipButtonState && imageSlideProps[imageIndex].caption1) && <p>{imageSlideProps[imageIndex].caption1}</p>}
        {(!imageSlideProps[imageIndex].flipButtonState && imageSlideProps[imageIndex].caption2) && <p>{imageSlideProps[imageIndex].caption2}</p>}
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

export default FlippingImageSlide;
