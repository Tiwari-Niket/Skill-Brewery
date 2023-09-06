'use client'
import '@styles/globals.css';
import Nav from '@components/Nav';
import { useState } from 'react';
import StartScreen from '@components/StartScreen ';

export const metadata = {
  title: "Skill Brewery",
  description: "Skill Brewery"
};

const RootLayout = ({ children }) => {
  const [showStartScreen, setShowStartScreen] = useState(true);

  const handleStartScreenFinish = () => {
    setShowStartScreen(false);
  };
  return (
    <html>
      <body className='overflow-x-hidden'>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          {showStartScreen ? (
            <StartScreen onFinish={handleStartScreenFinish} />
          ) : (
            <div>
              <Nav />
              {children}
            </div>
          )
          }
        </main>
      </body>
    </html>
  )
}

export default RootLayout;