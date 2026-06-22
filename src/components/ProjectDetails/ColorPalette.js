import './ProjectDetailBox.css';

export const ColorPalette = ({colors}) => {

    const fullColorBox = 
        <div className='projectDetailContent'>
          {colors?.map(color => (
            <div className="box" style={{background: `${color.color}`}}>
                <h3 style={{color: color.textColor==='light'?'#ffffff':'#33322A'}}>{color.colorName}</h3>
                <p style={{color: color.textColor==='light'?'#ffffff':'#33322A'}}>{color.text}</p>
            </div>
          ))}
        </div>;

    return (fullColorBox);
}

export default ColorPalette;
