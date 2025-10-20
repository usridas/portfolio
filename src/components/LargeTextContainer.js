import './TextContainer.css';

export const LargeTextContainer = ({title, subtitle, text}) => {
  return (
    <div className="fullLargeTextContainer">
        <div className='largeTitleSubtitle'>
            <h3>{title}</h3>
            {subtitle && <h4>{subtitle}</h4>}
        </div>
        <p className='largeText'>{text}</p>
    </div>
  );
}

export default LargeTextContainer;
