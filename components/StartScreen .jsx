// src/components/StartScreen.js
'use client';
import React, { useState, useEffect } from 'react';

const StartScreen = ({ onFinish }) => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
      onFinish();
    }, 2000); // 5 seconds (5000 milliseconds)

    return () => {
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div>
      {showGif && (
        <img src='/assets/gif.gif' className='h-screen w-[100%]' />
      )}
    </div>
  );
};

export default StartScreen;
