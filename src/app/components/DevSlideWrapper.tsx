"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import DevSlideButton from "./DevSlideButton";
import DevSlidePagination from "./DevSlidePagination";
import "../styles/devSlide.scss";
interface DevSlideWrapperProps {
  children: React.ReactNode;
  totalSlide: number;
}

const DevSlideWrapper = forwardRef<HTMLDivElement, DevSlideWrapperProps>(
  ({ children, totalSlide }, ref) => {
    const [clientWidth, setClientWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const [currentSlide, setCurrentSlide] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

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
      justifyContent: "flex-start",
      alignItems: "flex-start",
      transition: "transform 0.3s ease-in-out",
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
    }, [clientWidth, totalSlide]);

    // currentSlide가 변경될 때마다 translateX 업데이트
    useEffect(() => {
      if(containerRef.current && clientWidth > 0) {
        const translateX = -(currentSlide * clientWidth);
        containerRef.current.style.transform = `translateX(${translateX}px)`;
        console.log(`Slide ${currentSlide}: translateX(${translateX}px)`);
      }
    }, [currentSlide, clientWidth]);

    const onClickPrev = () => {
      console.log("prev");
      if(currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else {
        setCurrentSlide(totalSlide - 1);
      }
    }

    const onClickNext = () => {
      console.log("next");
      if(currentSlide < totalSlide - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }

    useEffect(() => {
      if(currentSlide >= totalSlide) {
        setCurrentSlide(0);
      } else if(currentSlide < 0) {
        setCurrentSlide(totalSlide - 1);
      }
    }, [currentSlide, totalSlide]);

    return (
      <div 
        ref={ref}
        className="dev-slide__wrapper" 
        style={WrapperStyles}
      >
        <div ref={containerRef} className="dev-slide__container" style={ContainerStyles}>
          {children}
        </div>
        <DevSlideButton 
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
        />
        <DevSlidePagination 
          totalSlide={totalSlide}
          currentSlide={currentSlide}
          onClick={(index) => {
            setCurrentSlide(index);
          }} 
        />
      </div>
    )
  }
);

DevSlideWrapper.displayName = 'DevSlideWrapper';

export default DevSlideWrapper;