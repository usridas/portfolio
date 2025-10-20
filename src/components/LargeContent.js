import './Content.css';

export const LargeContent = ({title, content}) => {
  return (
    <div className="largeContentContainer">
        <div className='largeContentTitle'><h1>{title}</h1></div>
        <div className='largeContentText'>{content}</div>
    </div>
  );
}

export default LargeContent;
