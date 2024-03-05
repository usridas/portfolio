import './NavBar.scss';

export const NavBar = ({setTab}) => {
    const homeOnClick = () => {
        setTab('home');
    }
    return (
    <div className='navBarContainer'>
        <a className='tab' href='#artdesign' onClick={homeOnClick}>
            Art & Design
        </a>
        <a className='tab' href='#projects' onClick={homeOnClick}>
            Projects
        </a>
        <a className='tab' href='#photography' onClick={homeOnClick}>
            Photography
        </a>
        <a className='tab' href='#contactme' onClick={homeOnClick}>
            Contact Me
        </a>
    </div>
    )
}