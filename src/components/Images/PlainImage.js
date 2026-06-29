import { toSentenceCase } from '../../utils/utils';
import Spinner from '../Spinner/Spinner';
import './ImageSlide.scss';
import { useState } from 'react';

export const PlainImage = ({plainImageProps, imageMaxWidth=false, textMaxWidth=false}) => {
  const [isLoading, setIsLoading] = useState(true);

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
        {plainImageProps.caption && <p style={{width: 'stretch', textAlign: 'left'}}>{plainImageProps.caption}</p>}
    </div>
  );
}

export default PlainImage;
