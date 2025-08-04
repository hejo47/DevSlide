"use client";

import React, { forwardRef, useEffect, useState } from "react";
import DevSlideButton from "./DevSlideButton";

interface DevSlideWrapperProps {
  children: React.ReactNode;
  totalSlide: number;
}

const DevSlideWrapper = forwardRef<HTMLDivElement, DevSlideWrapperProps>(
  ({ children, totalSlide }, ref) => {
    const [clientWidth, setClientWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const WrapperStyles: React.CSSProperties = {
      height: "100vh",
      position: "relative",
      overflow: "hidden",
    }

    const ContainerStyles: React.CSSProperties = {
      width: `${containerWidth}px`,
      height: "100%",
      overflow: "hidden",
      display: "flex",
    }

    useEffect(() => {
      setInterval(() => {
        setClientWidth(window.innerWidth);
      }, 1000);
    }, [clientWidth]);

    useEffect(() => {
      if(clientWidth > 0) {
        console.log(clientWidth);
      }
    }, [clientWidth]);

    useEffect(() => {
      if(totalSlide > 0 && clientWidth > 0) {
        setContainerWidth(totalSlide * clientWidth);
      }
    }, [clientWidth]);

    return (
      <div 
        ref={ref}
        className="dev-slide__wrapper" 
        style={WrapperStyles}
      >
        <div className="dev-slide__container" style={ContainerStyles}>
          {children}
        </div>
        <DevSlideButton />
      </div>
    )
  }
);

DevSlideWrapper.displayName = 'DevSlideWrapper';

export default DevSlideWrapper;