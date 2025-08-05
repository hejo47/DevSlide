'use client';

import { useSlideContext } from '../contexts/SlideContext';

interface DevSlideProps {
  src: string;
  idx: number;
  id: string;
}

const SlideStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const SlideImgStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
}

const DevSlide = ({ 
  src, 
  idx, 
  id, 
}: DevSlideProps) => {
  const { currentSlide, totalSlide } = useSlideContext();
  
  const getSlideClass = () => {
    if (totalSlide === 0) {
      return "dev-slide__slide";
    }
    if (idx === currentSlide) {
      return "dev-slide__slide dev-slide__slide-active";
    }
    if (currentSlide === 0) {
      if (idx === totalSlide - 1) {
        return "dev-slide__slide dev-slide__slide-prev";
      }
    } else if (idx === currentSlide - 1) {
      return "dev-slide__slide dev-slide__slide-prev";
    }
    if (currentSlide === totalSlide - 1) {
      if (idx === 0) {
        return "dev-slide__slide dev-slide__slide-next";
      }
    } else if (idx === currentSlide + 1) {
      return "dev-slide__slide dev-slide__slide-next";
    }
    
    return "dev-slide__slide";
  };

  return (
    <div 
      id={`dev-slide-${idx}`}
      className={getSlideClass()}
      style={SlideStyles}
    >
      <img src={src} alt="dev-slide" style={SlideImgStyles} />
    </div>
  )
}

export default DevSlide;