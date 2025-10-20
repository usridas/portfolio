import './Content.css';

export const LargeContent = ({title, content}) => {

  return (
    <div className="largeProjectSectionContainer">
        <div className='largeProjectSectionTitle'><h1>{title}</h1></div>
        <div className='largeProjectSectionText'>{content}</div>
    </div>
  );
}

export default LargeContent;