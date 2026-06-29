import './TextContainer.css';

export const TextContainer = ({title, subtitle, text, fontFamily, textSize, fontWeight, fontStyle, insert}) => {
  return (
    <div className="textContainer">
        {(title || subtitle) && <div className='titleSubtitle'>
            {title && <h3>{title}</h3>}
            {subtitle && <h4>{subtitle}</h4>}
        </div>}
        {!insert && <p className='text' style={{fontFamily: fontFamily, fontSize: `${textSize}px`, fontWeight: `${fontWeight}`, fontStyle: `${fontStyle}`}}>{text}</p>}
        {insert && insert}
    </div>
  );
}

export default TextContainer;
