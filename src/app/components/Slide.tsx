"use client";
import React, { useState, useEffect, useRef } from "react";

import DevSlideWrapper from "./DevSlideWrapper";
import DevSlide from "./DevSlide";
import { SlideProvider } from "../contexts/SlideContext";

const Slide = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  const [totalSlide, setTotalSlide] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTotalSlide(slideRef.current?.querySelectorAll(".dev-slide__slide").length || 0);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setClientWidth(window.innerWidth);
    }, 1000);
  }, [clientWidth]);

  useEffect(() => {
    if(totalSlide > 0) {
      console.log(totalSlide);
    }
  }, [totalSlide]);

  useEffect(() => {
    if(clientWidth > 0) {
      console.log(clientWidth);
    }
  }, [clientWidth]);

  return (
    <SlideProvider>
      <div>
        <DevSlideWrapper 
          ref={slideRef} 
          totalSlide={totalSlide}
        >
          <DevSlide src="/images/slide_img_1.jpg" idx={0} id="dev-slide-1" />
          <DevSlide src="/images/slide_img_2.jpg" idx={1} id="dev-slide-2" />
          <DevSlide src="/images/slide_img_3.jpg" idx={2} id="dev-slide-3" />
          <DevSlide src="/images/slide_img_2.jpg" idx={3} id="dev-slide-4" />
        </DevSlideWrapper>
      </div>
    </SlideProvider>
  )
}

export default Slide;