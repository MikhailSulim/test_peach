import Icon from '../../Icon/Icon';
import './Gallery.scss';

import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Photo slider component
 * @returns {JSX.Element}
 */

export const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const context = (require as any).context(
      './../../../../public/images/slides',
      false,
      /\.(png|jpe?g|svg)$/
    );
    const allImages: string[] = context
      .keys()
      .map((key: string) => context(key));
    setImages(allImages);
  }, []);

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage((prevImage) => prevImage - 1);
    }
  };

  const handleNext = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage((prevImage) => prevImage + 1);
    }
  };

  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-100 * currentImage}%)`;
    }
  }, [currentImage]);

  const galleryPagination = useMemo(
    () => (
      <div className="gallery__slider">
        <div ref={sliderRef} className="gallery__slider-container">
          {images.map((item) => (
            <img
              loading={'lazy'}
              className="gallery__slider-image"
              key={item}
              src={item}
              alt=""
            />
          ))}
        </div>

        <div className="gallery__pagination">
          {images.map((item, idx) => (
            <div
              key={`pagination_${item}`}
              className={`gallery__pagination-item ${
                idx === currentImage ? 'gallery__pagination-item_current' : ''
              }`}
              onClick={() => {
                setCurrentImage(idx);
              }}
            />
          ))}
        </div>
      </div>
    ),
    [currentImage, images]
  );

  return (
    <section className="gallery">
      <div className="gallery__header">
        <h2 className="gallery__title">Корпоративная жизнь</h2>
        <div className="gallery__navigation">
          <button
            className="gallery__navigation-btn gallery__navigation-btn_left"
            type="button"
            onClick={handlePrev}
            disabled={currentImage === 0}
          >
            <Icon iconId="arrRight" />
          </button>
          <button
            className="gallery__navigation-btn "
            type="button"
            onClick={handleNext}
            disabled={currentImage === images.length - 1}
          >
            <Icon iconId="arrRight" />
          </button>
        </div>
      </div>

      {galleryPagination}
    </section>
  );
};
