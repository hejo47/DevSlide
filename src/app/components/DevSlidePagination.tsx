"use client";

const PaginationWrapperStyles: React.CSSProperties = {
  width: "fit-content",
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translate(-50%, 0)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pointerEvents: "none",
  gap: "5px",
  zIndex: 5,
}

const PaginationStyles: React.CSSProperties = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  pointerEvents: "auto",
}

const DevSlidePagination = ({ totalSlide, currentSlide, onClick }: { totalSlide: number, currentSlide: number, onClick: (index: number) => void }) => {
  return (
    <div 
      className="dev-slide__pagination-wrapper" 
      style={PaginationWrapperStyles}
    >
      {
        Array.from({ length: totalSlide }).map((_, index) => (
          <button
            type="button" 
            key={`dev-slide__pagination-${index}`}
            className={`dev-slide__pagination ${index === currentSlide ? "dev-slide__pagination-active" : ""}`} 
            style={PaginationStyles}
            onClick={() => onClick(index)}
          >
          </button>
        ))
      }
    </div>
  )
}

export default DevSlidePagination;