"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styled from "@emotion/styled"

type HeroSectionProps = {}

const SectionContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: -100px;
  margin: calc(-50vw + 50%);
  width: 100vw;

  @media (max-width: 768px) {
    margin-top: -80px;
  }

  @media (max-width: 480px) {
    margin-top: -60px;
  }
`

const ImagesContainer = styled.div<{ translateX: number }>`
  position: absolute;
  width: 1000px;
  height: 60%;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  transform: translateX(${(props) => props.translateX}px);
  transition: ${(props) => (props.translateX === 0 ? "transform 0.5s ease-in-out" : "none")};
  width: 100vw;
  gap: 10px;

  @media (max-width: 768px) {
    height: 50%;
  }

  @media (max-width: 480px) {
    height: 40%;
  }
`

const ImageWrapper = styled.div`
  flex: 0 0 100%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 20%;
    background-color: white;
    z-index: 0;
  }

  &::before {
    top: -10%;
    left: -25%;
    border-radius: 0 0 50% 50%;
  }

  &::after {
    bottom: 10%;
    left: -25%;
    border-radius: 50% 50% 0 0;
  }

  img {
    width: 135%;
    height: 135%;
    object-fit: cover;
    user-select: none;
    pointer-events: auto;

    @media (max-width: 768px) {
      width: 120%;
      height: 120%;
    }

    @media (max-width: 480px) {
      width: 110%;
      height: 110%;
    }
  }
`

const NextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 80%;
  left: 0;
  z-index: 4;
  gap: 570px;

  @media (max-width: 768px) {
    gap: 400px;
    top: 75%;
  }

  @media (max-width: 480px) {
    gap: 200px;
    top: 70%;
  }
`

const Next = styled.h1`
  color: black;
  font-size: 30px;
  margin: -530px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: -400px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin: -200px;
  }
`

const NextPlus = styled.h2`
  font-size: 50px;
  font-weight: 310;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`

const HeroSection: React.FC<HeroSectionProps> = () => {
  // const [currentIndex, setCurrentIndex] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-7wqSFrUSkPAAAqh8DC8cJIUrVzeWrl.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-OaTvlgnJ9o7u50qlyTxqmWZPw0eNFr.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-jhoxk3H6A3nFwUJ5NmhfAH3urlthps.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-icZfS8M49wb1qSjA16ZcgJuk9E0b7r.png",
  ]

  // Create a duplicate array that includes three sets of images for infinite scrolling
  const extendedImages = [...images, ...images, ...images]
  
  // Initialize to the middle set of images
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTranslateX(-images.length * window.innerWidth)
    }
  }, [images.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setTranslateX(prev => prev + diff)
    setStartX(currentX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    handleInfiniteScroll()
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = currentX - startX
    setTranslateX(prev => prev + diff)
    setStartX(currentX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    handleInfiniteScroll()
  }
  
  // Function to handle the "teleporting" for infinite scroll
  const handleInfiniteScroll = () => {
    if (typeof window === 'undefined') return
    
    const imageWidth = window.innerWidth
    const totalImagesWidth = images.length * imageWidth
    
    // If scrolled too far right (past the beginning of middle set)
    if (translateX > -totalImagesWidth + imageWidth) {
      setTranslateX(prev => prev - totalImagesWidth)
    }
    // If scrolled too far left (past the end of middle set)
    else if (translateX < -(totalImagesWidth * 2 - imageWidth)) {
      setTranslateX(prev => prev + totalImagesWidth)
    }
  }

  return (
    <SectionContainer>
      <ImageWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <ImagesContainer translateX={translateX}>
          {extendedImages.map((src, index) => (
            <img key={index} src={src || "/placeholder.svg"} alt={`Hero background ${index + 1}`} />
          ))}
        </ImagesContainer>
      </ImageWrapper>
      <NextContainer>
        <NextPlus>+</NextPlus>
        <NextPlus>+</NextPlus>
        <Next>SCROLL TO EXPLORE</Next>
        <NextPlus>+</NextPlus>
        <NextPlus>+</NextPlus>
      </NextContainer>
    </SectionContainer>
  )
}

export default HeroSection