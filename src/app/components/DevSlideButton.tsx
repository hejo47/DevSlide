'use client';

const ButtonWrapperStyles: React.CSSProperties = {
  width: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pointerEvents: "none",
  zIndex: 5,
}

const ButtonStyles: React.CSSProperties = {
  width: "50px",
  height: "50px",
  position: "relative",
  pointerEvents: "auto",
  zIndex: 6,
}

const DevSlideButton = () => {
  return (
    <div 
      className="dev-slide__button-wrapper" 
      style={ButtonWrapperStyles}
    >
      <button 
        type="button" 
        className="dev-slide__button dev-slide__button-prev" 
        style={ButtonStyles}
        onClick={() => {
          console.log("prev");
        }}
      >
        <span>{"<"}</span>
      </button>
      <button 
        type="button" 
        className="dev-slide__button dev-slide__button-next" 
        style={ButtonStyles}
        onClick={() => {
          console.log("next");
        }}
      >
        <span>{">"}</span>
      </button>
    </div>
  )
}

export default DevSlideButton;