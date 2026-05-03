import './ProjectDetailBox.css';

export const ColorPalette = ({colors, text}) => {

    const fullColorBox = 
        <div className='projectDetailContent'>
          {colors?.map(color => (
            <div className="box" style={{background: `${color.color}`}}>
                <h3>{color.colorName}</h3>
                <p>{color.text}</p>
            </div>
          ))}
        </div>;

    const colorSection =
        <div className='projectDetailContainer'>
            <p>{text}</p>
            {fullColorBox}
        </div>;

    return (colorSection);
}

export default ColorPalette;
