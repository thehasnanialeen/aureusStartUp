import React, { useState, useEffect } from 'react';
import useOnScreen from './useOnScreen';

const GalleryImage = ({ image, index }) => {
    const [imageRef, isVisible] = useOnScreen({ threshold: 0.1 });
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        if (isVisible && !hasBeenVisible) {
            setHasBeenVisible(true);
        }
    }, [isVisible, hasBeenVisible]);

    const imageClass = hasBeenVisible ? 'image grow' : 'image';

    return (
        <div ref={imageRef} className="image-wrapper">
            <img
                alt={'Event'}
                src={image}
                className={imageClass}
                id={`img-${index}`}
            />
            <div className="overlay">Image Description</div>
        </div>
    );
};
export default GalleryImage;