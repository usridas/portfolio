import { useScreenResolution } from '../../utils/ScreenSize.tsx';
import './Nav.css';

export const Footer = () => {
  const { isXSmall, isSmall } = useScreenResolution();
  const isMobile = isXSmall || isSmall;
  return (
    <footer className='footerContainer'>
      <div className='footer'>
        {!isMobile && <div/>}
        <h1 style={{color: '#fdfcf8', fontSize: isMobile ? '24px' : '40px', gridColumn: isMobile ? 'span 2' : ''}}>Let's make cute things!</h1>
        {!isMobile && <div/>}
        <div style={{display: 'flex', flexDirection: 'column', gridColumn: isMobile ? 'span 2' : ''}}>
          <p style={{color: '#fdfcf8'}}>Contact me</p>
          <a tabIndex={0} className='link hover-target' href="mailto:umaiyal.sridas@gmail.com" style={{color: '#fdfcf8', marginBottom: '24px'}}>umaiyal.sridas@gmail.com</a>
          <p style={{color: '#fdfcf8'}}>Website designed and developed by Umaiyal Sridas. Last updated 19 August 2026.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
