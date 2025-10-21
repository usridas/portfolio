import './TextContainer.css';

export const TextContainer = ({title, subtitle, text, fontFamily, textSize, fontWeight, fontStyle}) => {
  return (
    <div className="textContainer">
        <div className='titleSubtitle'>
            <h3>{title}</h3>
            {subtitle && <h4>{subtitle}</h4>}
        </div>
        <p className='text' style={{fontFamily: fontFamily, fontSize: `${textSize}px`, fontWeight: `${fontWeight}`, fontStyle: `${fontStyle}`}}>{text}</p>
    </div>
  );
}

export default TextContainer;
