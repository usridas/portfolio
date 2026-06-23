import Spinner from '../Spinner/Spinner';
import './ImageSlide.scss';
import { useState } from 'react';

export const PlainImage = ({plainImageProps, imageMaxWidth=false, textMaxWidth=false}) => {
  const [isLoading, setIsLoading] = useState(true);
  function toSentenceCase(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className="imageSlideContainer" style={{maxWidth: textMaxWidth ? '700px' : 'none'}}>
        {plainImageProps.title &&
          <div className='imageSlideTextContainer'>
              <h3>{plainImageProps.title}</h3>
              {plainImageProps.description && <h4 style={{textAlign: 'end'}}>{plainImageProps.description}</h4>}
          </div>
        }
        {isLoading && <div className='plainImageLoading'><Spinner /></div>}
        <img onLoad={()=>setIsLoading(false)} alt={toSentenceCase(plainImageProps.title)} aria-label={toSentenceCase(plainImageProps.title)} className='plainImage' src={plainImageProps.imagePath} style={isLoading ? { display: 'none' } : {maxWidth: imageMaxWidth ? '700px' : 'none'}}/>
        {plainImageProps.caption && <p>{plainImageProps.caption}</p>}
    </div>
  );
}

export default PlainImage;
