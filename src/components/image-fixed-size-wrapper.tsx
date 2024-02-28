"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ImageWrapper = ({ src, alt }: { src: any; alt: string }) => {
  const [width, setWidth] = useState(0); // 이미지 너비를 상태로 저장
  const imgRef = useRef<HTMLImageElement>(null); // 이미지 요소에 대한 참조

  useEffect(() => {
    const imgEl = imgRef.current;
    const handleLoad = () => {
      // 이미지 로드 완료 시 실행될 함수
      if (imgEl) {
        setWidth(imgEl.offsetWidth); // 이미지 너비를 상태에 설정
      }
    };

    if (imgEl) {
      imgEl.addEventListener("load", handleLoad); // 이미지 로드 이벤트 리스너 등록
      // 이미지가 이미 로드되었을 경우를 대비한 조건 검사
      if (imgEl.complete) {
        handleLoad();
      }
    }

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      if (imgEl) {
        imgEl.removeEventListener("load", handleLoad);
      }
    };
  }, [src]); // 의존성 배열에 src를 추가하여 이미지 소스가 변경될 때마다 효과를 다시 실행

  return (
    <div style={{ width: width ? `${width}px` : "auto" }}>
      {/* 조건부 스타일링 */}
      <Image
        ref={imgRef}
        src={src}
        alt={alt || ""}
        style={{ display: "block", maxWidth: "none", height: "auto" }}
      />
    </div>
  );
};

export default ImageWrapper;
