"use client"
import React, { useEffect, useRef, useState } from 'react';

// Define cursor colors
const CURSOR_COLORS: { [key: string]: string } = {
  h1: "bg-green-400",
  button: "bg-orange-500",
  default: "bg-sky-500",
};

// Main CustomCursor component
const CustomCursor: React.FC = () => {
  // Reference to the cursor element
  const cursorRef = useRef<HTMLDivElement | null>(null);
  // State to track cursor color
  const [cursorColor, setCursorColor] = useState<string>("bg-sky-500");
  // State to track click event
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    // Update cursor position
    const updateCursorPosition = (x: number, y: number) => {
      cursor.style.top = `${y - 10}px`;
      cursor.style.left = `${x - 10}px`;
    };

    // Event listener for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY);
    };

    // Event listener for touch movement
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      updateCursorPosition(touch.clientX, touch.clientY);
    };

    // Event listener for mouse click
    const handleMouseDown = () => {
      setClicked(true);
      cursor.classList.add("expand");
      // Reset click state after 500 milliseconds
      setTimeout(() => {
        setClicked(false);
        cursor.classList.remove("expand");
      }, 500);
    };

    // Event listener for touch start
    const handleTouchStart = () => {
      setClicked(true);
      cursor.classList.add("expand");
      // Reset click state after 500 milliseconds
      setTimeout(() => {
        setClicked(false);
        cursor.classList.remove("expand");
      }, 500);
    };

    // Event listener for mouseover (hover) on HTML elements
    const handleMouseOver = (e: MouseEvent) => {
      // Get the HTML tag name
      const tagName = (e.target as HTMLElement).tagName.toLowerCase();
      // Set cursor color based on the tag, default to "sky-500"
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchstart", handleTouchStart);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []); // useEffect runs only once on mount

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor-custom ${cursorColor} fixed pointer-events-none transition-transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-full`}
      />
      <div
        className={`fixed pointer-events-none transition-transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-full w-8 h-8 border-2 ${cursorColor}`}
      >
        <div
          className={`w-8 h-8 ${clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"} transition-transform duration-500 ease-in-out rounded-full -z-10 ${cursorColor}`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
