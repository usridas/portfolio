import './Content.css';

export const SmallContent = ({title, content, titleSize}) => {
  return (
    <div className="smallContentContainer"  id="2">
        <h1 style={{fontSize: `${titleSize}px`}}>{title}</h1>
        {content}
    </div>
  );
}

export default SmallContent;
