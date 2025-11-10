import './TextContainer.css';

export const QuoteContainer = ({title, subtitle, text, fontFamily, textSize, fontWeight, fontStyle}) => {
  return (
    <div className="textContainer">
        <p className='text' style={{fontFamily: fontFamily, fontSize: `${textSize}px`, fontWeight: `${fontWeight}`, fontStyle: `${fontStyle}`}}>{text}</p>
        <h3>{title}</h3>  
    </div>
  );
}

export default QuoteContainer;
