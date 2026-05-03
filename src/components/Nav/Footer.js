import './Nav.css';
import Resume from '../../assets/documents/Resume.pdf';
import { useScreenResolution } from '../../utils/ScreenSize.tsx';

export const Footer = ({}) => {
  const { isLarge, isMedium } = useScreenResolution();
  return (
    <p className='footer'>Website designed and developed by Umaiyal Sridas. 2026.</p>
  );
}

export default Footer;
