'use client';

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
  return (
    <div className="dev-slide__slide" style={SlideStyles}>
      <img src={src} alt="dev-slide" style={SlideImgStyles} />
    </div>
  )
}

export default DevSlide;