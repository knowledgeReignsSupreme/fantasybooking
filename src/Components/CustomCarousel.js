import React, {useEffect, useState} from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function CustomCarousel({imagesToRender}) {
  const [imageValue, setImageValue] = useState(0);

  useEffect(() => {
    setImageValue(0);
  }, []);

  const handleImageSwipe = (value) => {
    setImageValue(+value);
  };

  return (
    <div className="singledestination__wrapper__img">
        <Carousel 
           arrows
          value={imageValue}
          onChange={handleImageSwipe}
          animationSpeed="800"
          slides={[
            (<img
              alt={`${imagesToRender} 1`}
              className='singledestination__wrapper__img'
              src={imagesToRender.images[0]}
            />),(
            <img
            alt={`${imagesToRender} 2`}
            className='singledestination__wrapper__img'
              src={imagesToRender.images[1]}
            />),
          ]}
          plugins={['arrows', 'clickToChange', 'infinite', 'centered']}
        />
    </div>
  )
}
