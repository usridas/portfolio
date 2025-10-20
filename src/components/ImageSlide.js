import './ImageSlide.css';

export const ImageSlide = ({title, timeFrame, text}) => {

  const imagePaths = [
      '/images/laptopMockup.png',
      '/images/smartPhoneMockup.png',
      '/images/smartPhoneMockup2.png',
    ];

  let imageIndex = 0;
  let currentImage = `'url(${imagePaths[imageIndex]}) center/100% no-repeat, #E6E5E0'`;

  function onBackClick() {
    if (imageIndex > 0 && imageIndex < imagePaths.length) {
      imageIndex--;
    } else {
      imageIndex = imagePaths.length - 1;
    }
    currentImage = `'url(${imagePaths[imageIndex]}) center/100% no-repeat, #E6E5E0'`;
    console.log("hello: ", imageIndex, currentImage);
  }

  function onNextClick() {
    if (imageIndex >= 0 && imageIndex < imagePaths.length - 1) {
      imageIndex++;
    } else {
      imageIndex = 0;
    }
    currentImage = `'url(${imagePaths[imageIndex]}) center/100% no-repeat, #E6E5E0'`;
    console.log("bye: ", imageIndex, currentImage);
  }

  return (
    <div className="fullImageSlideContainer">
        <div className='imageSlideTextContainer'>
            <h3>{title}</h3>
            <h4>{timeFrame}</h4>
        </div>
        <div className='imageSlideContainer'>
          <div className='imageSlide' style={{background: currentImage}}/>
        </div>
        <div className='imageSlideTextContainer'>
            <a onClick={()=>onBackClick()}>BACK</a>
            <a onClick={()=>onNextClick()}>NEXT</a>
        </div>
    </div>
  );
}

export default ImageSlide;
