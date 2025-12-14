import './ImageSlide.css';

export const PlainImage = ({plainImageProps}) => {

  return (
    <div className="imageSlideContainer">
        {plainImageProps.title &&
          <div className='imageSlideTextContainer'>
              <h3>{plainImageProps.title}</h3>
              {plainImageProps.description && <h4 style={{textAlign: 'end'}}>{plainImageProps.description}</h4>}
          </div>
        }
        <img className='plainImage' src={plainImageProps.imagePath}/>
        {plainImageProps.caption && <p>{plainImageProps.caption}</p>}
    </div>
  );
}

export default PlainImage;
