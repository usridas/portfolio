import LargeContent from '../components/LargeContent';
import ImageSlide from '../components/ImageSlide';
import './Pages.css';

export const Projects = ({}) => {
  const projectSlide = <ImageSlide title={'PROJECT TITLE'} timeFrame={'TIME - TIME'}/>;
  return (
        <LargeContent title={'PROJECTS'} content={projectSlide} />
  );
}

export default Projects;
