import { useState } from 'react';
import './ModalButton.scss';

export const ModalButton = ({name, image}) => {
    const [showModal, setShowModal] = useState(false);
    const buttonOnClick = () => {
        setShowModal(true);
    }
    const closeOnClick = () => {
        setShowModal(false);
    }
    return (
        <div className='modalButton'>
            <img src={image} width={'500px'} onClick={buttonOnClick} href=''/>
            {showModal &&
            <div id={name} className='modal'>
                <div className='modalContent'>
                    <div className='close' onClick={closeOnClick}>&times;</div>
                    <img src={image}/>
                </div>
            </div>}
        </div>
    )
}