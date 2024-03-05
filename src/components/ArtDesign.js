import './ArtDesign.scss';
import anatomy from '../images/AnatomySeries-01.png';
import mushrooms from '../images/MushroomSeries-01.png';
import { ModalButton } from './ModalButton';

export const ArtDesign = () => {
    return (
    <div>
        <h1 id='artdesign'>
            Art & Design
        </h1>
        <div className='artGrid'>
            <ModalButton name={'anatomy'} image={anatomy}/>
            <ModalButton name={'mushroom'} image={mushrooms}/>
        </div>
    </div>
    )
}