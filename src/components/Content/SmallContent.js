import './Content.css';

export const SmallContent = ({title, content, titleSize}) => {
  return (
    <div className="smallContentContainer">
        <h5 style={{fontSize: `${titleSize}px`}}>{title}</h5>
        {content}
    </div>
  );
}

export default SmallContent;
