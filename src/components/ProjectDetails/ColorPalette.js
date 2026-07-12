import './ProjectDetailBox.css';

export const ColorPalette = ({colors, showTitle=false, text}) => {

    const fullColorBox = 
        <div className='projectDetailContent'>
          {showTitle && <h3 style={{marginBottom: text ? '0px' : '4px'}}>Color palette</h3>}
          {text && <p style={{marginBottom: '8px'}}>{text}</p>}
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
