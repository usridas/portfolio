import './TextContainer.css';

export const TextContainer = ({title, subtitle, text}) => {
  return (
    <div className="fullTextContainer">
        <div className='titleSubtitle'>
            <h3>{title}</h3>
            {subtitle && <h4>{subtitle}</h4>}
        </div>
        <p className='text'>{text}</p>
    </div>
  );
}

export default TextContainer;
