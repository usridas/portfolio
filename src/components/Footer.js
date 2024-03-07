import './Footer.scss';
import emailLogo from '../images/emailLogo.svg';
import githubLogo from '../images/githubLogo.svg';
import instagramLogo from '../images/instagramLogo.svg';

export const Footer = () => {
    return (
    <div className='footerContainer'>
        <h2>
            &copy; 2024 Created By Umaiyal Sridas
        </h2>
        <div className='contactButtonsContainer'>
            <a href='mailto:umaiyal.sridas@gmail.com'><img src={emailLogo}  className='contactButton' alt='mailto:umaiyal.sridas@gmail.com'/></a>
            <a href='https://www.instagram.com/uma.doodles/'><img src={instagramLogo} className='contactButton' alt='https://www.instagram.com/uma.doodles/'/></a>
            <a href='https://github.com/usridas'><img src={githubLogo} className='contactButton' alt='https://github.com/usridas'/></a>
        </div>
    </div>
    )
}