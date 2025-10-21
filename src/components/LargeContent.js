import './Content.css';

export const LargeContent = ({title, content, titleSize}) => {
  return (
    <div className="largeContentContainer"  id="3">
        <div className='largeContentTitle'><h1 style={{fontSize: `${titleSize}px`}}>{title}</h1></div>
        <div className='largeContentText'>{content}</div>
    </div>
  );
}

export default LargeContent;
