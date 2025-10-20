import LargeContent from '../components/LargeContent';
import ImageSlide from '../components/ImageSlide';
import './Pages.css';
import image1 from './images/laptopMockup.png';
import image2 from './images/smartPhoneMockup.png';
import image3 from './images/smartPhoneMockup2.png';

export const Projects = ({setTab}) => {

  const imagePaths = [
    image1,
    image2,
    image3
  ];

  const imageTexts = [
    "THIS IS IMAGE 1",
    "THIS IS IMAGE 2",
    "THIS IS IMAGE 3"
  ]

  const imageLinks = [
    "Umeko",
    "Umeko2",
    "Umeko3"
  ]

  const projectSlide = <ImageSlide title={'PROJECT TITLE'} timeFrame={'TIME - TIME'} imagePaths={imagePaths} imageTexts={imageTexts} imageLinks={imageLinks} setTab={setTab}/>;
  return (
        <LargeContent title={'PROJECTS'} content={projectSlide} />
  );
}

export default Projects;
