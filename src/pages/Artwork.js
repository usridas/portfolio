import LargeContent from '../components/LargeContent';
import ImageSlide from '../components/ImageSlide';
import './Pages.css';

export const Artwork = ({}) => {
  const artworkSlide = <ImageSlide title={'PROJECT TITLE'} timeFrame={'TIME - TIME'}/>;
  return (
        <LargeContent title={'ARTWORK'} content={artworkSlide} />
  );
}

export default Artwork;
