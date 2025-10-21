import './Content.css';

export const SmallHorizontalContent = ({title, description, content, titleSize}) => {
  return (
    <div className="smallContentContainer">
        <div className="smallHorizontalContentTitle">
            <h1 style={{fontSize: `${titleSize}px`}}>{title}</h1>
            {description}
        </div>
        {content}
    </div>
  );
}

export default SmallHorizontalContent;
