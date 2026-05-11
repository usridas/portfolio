import './ImageSlide.scss';

export const PlainImage = ({plainImageProps}) => {
  function toSentenceCase(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return (
    <div className="imageSlideContainer">
        {plainImageProps.title &&
          <div className='imageSlideTextContainer'>
              <h3>{plainImageProps.title}</h3>
              {plainImageProps.description && <h4 style={{textAlign: 'end'}}>{plainImageProps.description}</h4>}
          </div>
        }
        <img alt={toSentenceCase(plainImageProps.title)} className='plainImage' src={plainImageProps.imagePath}/>
        {plainImageProps.caption && <p>{plainImageProps.caption}</p>}
    </div>
  );
}

export default PlainImage;
