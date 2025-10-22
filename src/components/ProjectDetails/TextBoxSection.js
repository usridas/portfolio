import LargeContent from '../Content/LargeContent.js';
import TextContainer from '../Text/TextContainer.js';
import SmallHorizontalContent from '../Content/SmallHorizontalContent.js';
import './ProjectDetailBox.css';

export const TextBoxSection = ({number, title, text, isLarge}) => {

    const textDescription = <TextContainer title={title} text={text} />;

  if (isLarge) {
            return (
                <LargeContent title={number} content={textDescription} titleSize={'128'}/>
            );
        }
        else
            return (
                <SmallHorizontalContent title={number} description={textDescription}  titleSize={'64'}/>
            );
}

export default TextBoxSection;
